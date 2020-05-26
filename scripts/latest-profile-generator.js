"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("@ts-common/fs"));
const process = tslib_1.__importStar(require("process"));
const Path = tslib_1.__importStar(require("path"));
const cm = tslib_1.__importStar(require("@ts-common/commonmark-to-markdown"));
const it = tslib_1.__importStar(require("@ts-common/iterator"));
const yaml = tslib_1.__importStar(require("js-yaml"));
const string_map_1 = require("@ts-common/string-map");
const main = async (specificationsDirectory, profilesDirectory) => {
    try {
        const list = fs.recursiveReaddir(specificationsDirectory);
        const specs = [];
        let foundMultiApiReadmes = false;
        for await (const file of list) {
            const f = Path.parse(file);
            if (f.base === "readme.enable-multi-api.md") {
                foundMultiApiReadmes = true;
                const content = (await fs.readFile(file)).toString();
                const readMe = cm.parse(content);
                const set = new Set();
                for (const c of cm.iterate(readMe.markDown)) {
                    if (c.type === "code_block" &&
                        c.info !== null &&
                        c.info.startsWith("yaml") &&
                        c.literal !== null) {
                        const y = yaml.load(c.literal)["input-file"];
                        if (typeof y === "string") {
                            set.add(y.replace('$(this-folder)', ''));
                        }
                        else if (it.isArray(y)) {
                            for (const i of y) {
                                let cleanFilePath = i.replace('$(this-folder)', '');
                                set.add(cleanFilePath);
                                specs.push(Path.join(f.dir, cleanFilePath));
                            }
                        }
                    }
                }
            }
        }
        if (!foundMultiApiReadmes) {
            throw `Couldn't find any readme.enable-multi-api.md files.`;
        }
        for (const spec of specs) {
            console.log(`Processing spec: ${spec}`);
            const allPaths = await getPaths([spec]);
            console.log(allPaths);
            const apiVersion = Array.from(new Set(allPaths.map((path) => path.apiVersion)))[0];
            const crawlResult = getCrawlData(allPaths);
            const telemetryDir = Path.join(profilesDirectory, `crawl-log-${apiVersion}.json`);
            fs.writeFile(telemetryDir, JSON.stringify(crawlResult, null, 2));
            console.log(`Telemetry written at ${telemetryDir}`);
            const latestProfile = getLatestProfile(crawlResult);
            const latestProfileMarkDown = cm.markDownExToString({
                markDown: cm.createNode("document", cm.createNode("heading", cm.createText("Latest Azure Profile")), cm.createNode("block_quote", cm.createNode("paragraph", cm.createText("see https://aka.ms/autorest"))), cm.createCodeBlock("yaml ", yaml.dump({ "profiles": { [`latest-${apiVersion}`]: latestProfile } }, { lineWidth: 1000 })))
            });
            const latestProfileDir = Path.join(profilesDirectory, `definitions/`);
            const latestProfileLocation = Path.join(latestProfileDir, `latest-${apiVersion}.md`);
            fs.writeFile(latestProfileLocation, latestProfileMarkDown);
            console.log(`Latest profile written at ${latestProfileLocation}`);
            // now get all the profile definitions and generate the readme.
            const definitions = fs.recursiveReaddir(latestProfileDir);
            const definitionsRelativePaths = [];
            for await (const file of definitions) {
                const f = Path.parse(file);
                definitionsRelativePaths.push(`$(this-folder)/definitions/${f.base}`);
            }
            const profilesReadme = cm.markDownExToString({
                markDown: cm.createNode("document", cm.createNode('heading', cm.createText("Azure Profiles")), cm.createNode("block_quote", cm.createNode("paragraph", cm.createText("see https://aka.ms/autorest"))), cm.createNode("block_quote", cm.createNode("paragraph", cm.createText("The files under this directory are the profile definitions used by autorest."))), cm.createCodeBlock("yaml", yaml.dump({ "require": definitionsRelativePaths })))
            });
            fs.writeFile(Path.join(profilesDirectory, "readme.md"), profilesReadme);
            console.log(`Regenerated profiles readme.md at ${profilesDirectory}`);
            console.log('DONE');
        }
    }
    catch (e) {
        console.error(e);
    }
};
async function getPaths(specHandles) {
    console.log(`Parsing specs`);
    const result = new Array();
    for (const specHandle of specHandles) {
        try {
            let spec = null;
            if (specHandle.endsWith(".yml") || specHandle.endsWith(".yaml")) {
                const specYaml = yaml.safeLoad((await fs.readFile(specHandle)).toString());
                spec = JSON.parse(JSON.stringify(specYaml));
            }
            else {
                spec = JSON.parse((await fs.readFile(specHandle)).toString());
            }
            if (spec.openapi && spec.info.version) {
                for (const path of Object.entries(spec.paths)) {
                    result.push({ endpoint: path[0], apiVersion: spec.info.version, originalLocation: Path.relative(process.cwd(), specHandle).replace(/\\/g, '/') });
                }
            }
        }
        catch (e) {
            console.error(`Couldn't parse ${specHandle} - ${e}`);
        }
    }
    return result;
}
function getCrawlData(paths) {
    console.log(`Crawling paths for resources and getting telemetry ...`);
    const result = { resources: new Array(), operations: {} };
    const providerNamePattern = `microsoft\.[a-z]+(?:\.[a-z]+)?`;
    const parameterPattern = `\{[a-z0-9]+\}`;
    const nonParameterPattern = `[a-z0-9]+`;
    const resourcePathRegex = new RegExp(`(.*)(\/providers\/${providerNamePattern}(:?\/${nonParameterPattern}|\/${parameterPattern})+\/?$)`, 'gi');
    for (const p of paths) {
        if (p.endpoint.match(resourcePathRegex)) {
            const resource = { path: p.endpoint, apiVersion: p.apiVersion, providerNamespace: '', name: '' };
            // get last /provider/microsoft.<provider>... section. Also, get rid of any possible trailing slash '/'
            const scopedProviderSection = resource.path.replace(/\/*$/, '').replace(resourcePathRegex, '$2').split('/');
            resource.providerNamespace = scopedProviderSection[2].toLowerCase();
            // for now, only provider-namespaces ending with admin are blacklisted
            if (resource.providerNamespace.endsWith('admin')) {
                if (result.blackListedPaths === undefined) {
                    result.blackListedPaths = [];
                }
                result.blackListedPaths.push(p);
                continue;
            }
            const resourcesSection = `/${scopedProviderSection.slice(3).join('/')}`;
            const resourceRegex = new RegExp(`\/${nonParameterPattern}\/${nonParameterPattern}|\/${nonParameterPattern}\/${parameterPattern}|\/${nonParameterPattern}$`, 'gi');
            const resourceMatches = resourcesSection.match(resourceRegex);
            if (resourceMatches !== null) {
                const resourceNames = resourceMatches.map(each => each.split('/')[1]);
                resource.name = resourceNames.join('/');
            }
            result.resources.push(resource);
        }
        else {
            if (result.operations[p.endpoint] === undefined) {
                result.operations[p.endpoint] = [];
            }
            result.operations[p.endpoint].push({ apiVersion: p.apiVersion, originalLocation: p.originalLocation });
        }
    }
    return result;
}
function getLatestProfile(crawlData) {
    const latestProfile = { resources: {}, operations: {} };
    const allResources = crawlData.resources;
    const allOperations = crawlData.operations;
    const compareVersions = require('compare-versions');
    console.log('Constructing latest profile ...');
    // --- Process Resources ---
    crawlData.resources.sort((a, b) => {
        try {
            return compareVersions(getSemverEquivalent(b.apiVersion), getSemverEquivalent(a.apiVersion));
        }
        catch {
            const dummy = '';
            console.log(dummy);
        }
    });
    const latestResources = {};
    for (const resource of allResources) {
        const resourceUid = `${resource.providerNamespace.toLowerCase()}${resource.name.toLowerCase()}`;
        if (latestResources[resourceUid] === undefined) {
            latestResources[resourceUid] = { apiVersion: resource.apiVersion, name: resource.name, providerNamespace: resource.providerNamespace.toLowerCase(), path: resource.path };
        }
    }
    for (const resource of string_map_1.values(latestResources)) {
        latestProfile.resources[resource.providerNamespace] = latestProfile.resources[resource.providerNamespace] || {};
        latestProfile.resources[resource.providerNamespace][resource.apiVersion] = latestProfile.resources[resource.providerNamespace][resource.apiVersion] || [];
        latestProfile.resources[resource.providerNamespace][resource.apiVersion].push(resource.name);
    }
    for (const apiVersion of string_map_1.values(latestProfile.resources)) {
        for (const resources of string_map_1.values(apiVersion)) {
            resources.sort();
        }
    }
    // --- Process Operations ---
    for (const operation of string_map_1.values(allOperations)) {
        operation.sort((a, b) => {
            return compareVersions(getSemverEquivalent(b.apiVersion), getSemverEquivalent(a.apiVersion));
        });
    }
    for (const operation of string_map_1.keys(allOperations)) {
        latestProfile.operations[operation] = allOperations[operation][0].apiVersion;
    }
    return latestProfile;
}
exports.getLatestProfile = getLatestProfile;
// azure rest specs mostly uses versioning of the form yyyy-mm-dd
// To take into consideration this we convert to an equivalent of
// semver for comparisons.
function getSemverEquivalent(version) {
    let result = '';
    for (const i of version.split(/[\.\-]/g)) {
        if (!result) {
            result = i;
            continue;
        }
        result = Number.isNaN(Number.parseInt(i)) ? `${result}-${i}` : `${result}.${Number(i)}`;
    }
    const semver = require('semver');
    return semver.valid(semver.coerce(result));
}
main(Path.join(process.cwd(), "specification"), Path.join(process.cwd(), "profiles"));
//# sourceMappingURL=latest-profile-generator.js.map