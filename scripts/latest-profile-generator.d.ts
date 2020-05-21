export declare function getLatestProfile(crawlData: CrawlResult): Profile;
interface Resource {
    path: string;
    apiVersion: string;
    providerNamespace: string;
    name: string;
}
interface CrawlResult {
    operations: {
        [operation: string]: Array<{
            apiVersion: string;
            originalLocation: string;
        }>;
    };
    resources: Array<Resource>;
    blackListedPaths?: Array<PathMetadata>;
}
interface PathMetadata {
    endpoint: string;
    apiVersion: string;
    originalLocation: string;
}
interface Profile {
    resources: {
        [providerNamespace: string]: {
            [apiVersion: string]: Array<string>;
        };
    };
    operations: {
        [path: string]: string;
    };
}
export {};
//# sourceMappingURL=latest-profile-generator.d.ts.map