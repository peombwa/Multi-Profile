# Microsoft Graph PowerShell AutoRest Configuration

> Values
``` yaml
azure: false
powershell: true
license-header: MICROSOFT_MIT_NO_VERSION
metadata:
  authors: Microsoft Corporation
  owners: Microsoft Corporation
  description: 'Microsoft Graph PowerShell: $(service-name) cmdlets'
  copyright: Microsoft Corporation. All rights reserved.
  tags: Microsoft Graph
  companyName: Microsoft Corporation
  requireLicenseAcceptance: true
  licenseUri: https://aka.ms/devservicesagreement
  projectUri: https://github.com/microsoftgraph/msgraph-sdk-powershell
```

> Names
``` yaml
prefix: Mg
subject-prefix: $(service-name)
module-name: $(prefix).$(service-name)
namespace: Microsoft.Graph.PowerShell.Cmdlets.$(service-name)
```

> Folders
``` yaml
clear-output-folder: true
output-folder: .
```

> Profiles
``` yaml
tag: all-api-versions
require: $(this-folder)../profiles/readme.md
profile:
  - latest-v1.0-beta
  - latest-v1.0
```