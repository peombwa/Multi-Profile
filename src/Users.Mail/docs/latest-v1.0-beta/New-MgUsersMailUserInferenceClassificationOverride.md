---
external help file:
Module Name: Mg.UsersMail
online version: https://docs.microsoft.com/en-us/powershell/module/mg.usersmail/new-mgusersmailuserinferenceclassificationoverride
schema: 2.0.0
---

# New-MgUsersMailUserInferenceClassificationOverride

## SYNOPSIS
Create new navigation property to overrides for users

## SYNTAX

### CreateExpanded (Default)
```
New-MgUsersMailUserInferenceClassificationOverride -UserId <String> [-ClassifyAs <String>] [-Id <String>]
 [-SenderEmailAddressAddress <String>] [-SenderEmailAddressName <String>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

### Create
```
New-MgUsersMailUserInferenceClassificationOverride -UserId <String>
 -BodyParameter <IMicrosoftGraphInferenceClassificationOverride> [-Confirm] [-WhatIf] [<CommonParameters>]
```

### CreateViaIdentity
```
New-MgUsersMailUserInferenceClassificationOverride -InputObject <IUsersMailIdentity>
 -BodyParameter <IMicrosoftGraphInferenceClassificationOverride> [-Confirm] [-WhatIf] [<CommonParameters>]
```

### CreateViaIdentityExpanded
```
New-MgUsersMailUserInferenceClassificationOverride -InputObject <IUsersMailIdentity> [-ClassifyAs <String>]
 [-Id <String>] [-SenderEmailAddressAddress <String>] [-SenderEmailAddressName <String>] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Create new navigation property to overrides for users

## EXAMPLES

### Example 1: {{ Add title here }}
```powershell
PS C:\> {{ Add code here }}

{{ Add output here }}
```

{{ Add description here }}

### Example 2: {{ Add title here }}
```powershell
PS C:\> {{ Add code here }}

{{ Add output here }}
```

{{ Add description here }}

## PARAMETERS

### -BodyParameter
inferenceClassificationOverride
To construct, see NOTES section for BODYPARAMETER properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphInferenceClassificationOverride
Parameter Sets: Create, CreateViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClassifyAs
inferenceClassificationType

```yaml
Type: System.String
Parameter Sets: CreateExpanded, CreateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
Read-only.

```yaml
Type: System.String
Parameter Sets: CreateExpanded, CreateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
Identity Parameter
To construct, see NOTES section for INPUTOBJECT properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IUsersMailIdentity
Parameter Sets: CreateViaIdentity, CreateViaIdentityExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SenderEmailAddressAddress
The email address of the person or entity.

```yaml
Type: System.String
Parameter Sets: CreateExpanded, CreateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderEmailAddressName
The display name of the person or entity.

```yaml
Type: System.String
Parameter Sets: CreateExpanded, CreateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserId
key: user-id of user

```yaml
Type: System.String
Parameter Sets: Create, CreateExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphInferenceClassificationOverride

### Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IUsersMailIdentity

## OUTPUTS

### Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphInferenceClassificationOverride

## NOTES

ALIASES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties. For information on hash tables, run Get-Help about_Hash_Tables.


BODYPARAMETER <IMicrosoftGraphInferenceClassificationOverride>: inferenceClassificationOverride
  - `[Id <String>]`: Read-only.
  - `[ClassifyAs <String>]`: inferenceClassificationType
  - `[SenderEmailAddressAddress <String>]`: The email address of the person or entity.
  - `[SenderEmailAddressName <String>]`: The display name of the person or entity.

INPUTOBJECT <IUsersMailIdentity>: Identity Parameter
  - `[AttachmentId <String>]`: key: attachment-id of attachment
  - `[ExtensionId <String>]`: key: extension-id of extension
  - `[InferenceClassificationOverrideId <String>]`: key: inferenceClassificationOverride-id of inferenceClassificationOverride
  - `[MailFolderId <String>]`: key: mailFolder-id of mailFolder
  - `[MailFolderId1 <String>]`: key: mailFolder-id of mailFolder
  - `[MentionId <String>]`: key: mention-id of mention
  - `[MessageId <String>]`: key: message-id of message
  - `[MessageRuleId <String>]`: key: messageRule-id of messageRule
  - `[MultiValueLegacyExtendedPropertyId <String>]`: key: multiValueLegacyExtendedProperty-id of multiValueLegacyExtendedProperty
  - `[SingleValueLegacyExtendedPropertyId <String>]`: key: singleValueLegacyExtendedProperty-id of singleValueLegacyExtendedProperty
  - `[UserConfigurationId <String>]`: key: userConfiguration-id of userConfiguration
  - `[UserId <String>]`: key: user-id of user

## RELATED LINKS

