---
external help file:
Module Name: Mg.UsersMail
online version: https://docs.microsoft.com/en-us/powershell/module/mg.usersmail/update-mgusersmailusermailfolder
schema: 2.0.0
---

# Update-MgUsersMailUserMailFolder

## SYNOPSIS
Update the navigation property mailFolders in users

## SYNTAX

### UpdateExpanded (Default)
```
Update-MgUsersMailUserMailFolder -MailFolderId <String> -UserId <String> [-ChildFolderCount <Int32>]
 [-ChildFolders <IMicrosoftGraphMailFolder[]>] [-DisplayName <String>] [-Id <String>]
 [-MessageRules <IMicrosoftGraphMessageRule[]>] [-Messages <IMicrosoftGraphMessage[]>]
 [-MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]
 [-ParentFolderId <String>]
 [-SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]
 [-TotalItemCount <Int32>] [-UnreadItemCount <Int32>]
 [-UserConfigurations <IMicrosoftGraphUserConfiguration[]>] [-WellKnownName <String>] [-PassThru] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

### Update
```
Update-MgUsersMailUserMailFolder -MailFolderId <String> -UserId <String>
 -BodyParameter <IMicrosoftGraphMailFolder> [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### UpdateViaIdentity
```
Update-MgUsersMailUserMailFolder -InputObject <IUsersMailIdentity> -BodyParameter <IMicrosoftGraphMailFolder>
 [-PassThru] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### UpdateViaIdentityExpanded
```
Update-MgUsersMailUserMailFolder -InputObject <IUsersMailIdentity> [-ChildFolderCount <Int32>]
 [-ChildFolders <IMicrosoftGraphMailFolder[]>] [-DisplayName <String>] [-Id <String>]
 [-MessageRules <IMicrosoftGraphMessageRule[]>] [-Messages <IMicrosoftGraphMessage[]>]
 [-MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]
 [-ParentFolderId <String>]
 [-SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]
 [-TotalItemCount <Int32>] [-UnreadItemCount <Int32>]
 [-UserConfigurations <IMicrosoftGraphUserConfiguration[]>] [-WellKnownName <String>] [-PassThru] [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Update the navigation property mailFolders in users

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
mailFolder
To construct, see NOTES section for BODYPARAMETER properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphMailFolder
Parameter Sets: Update, UpdateViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ChildFolderCount
.

```yaml
Type: System.Int32
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChildFolders
.
To construct, see NOTES section for CHILDFOLDERS properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphMailFolder[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The mailFolder's display name.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: UpdateViaIdentity, UpdateViaIdentityExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MailFolderId
key: mailFolder-id of mailFolder

```yaml
Type: System.String
Parameter Sets: Update, UpdateExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageRules
.
To construct, see NOTES section for MESSAGERULES properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphMessageRule[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Messages
.
To construct, see NOTES section for MESSAGES properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphMessage[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MultiValueExtendedProperties
.
To construct, see NOTES section for MULTIVALUEEXTENDEDPROPERTIES properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphMultiValueLegacyExtendedProperty[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParentFolderId
The unique identifier for the mailFolder's parent mailFolder.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns true when the command succeeds

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SingleValueExtendedProperties
.
To construct, see NOTES section for SINGLEVALUEEXTENDEDPROPERTIES properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphSingleValueLegacyExtendedProperty[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TotalItemCount
.

```yaml
Type: System.Int32
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnreadItemCount
.

```yaml
Type: System.Int32
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserConfigurations
.
To construct, see NOTES section for USERCONFIGURATIONS properties and create a hash table.

```yaml
Type: Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphUserConfiguration[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Parameter Sets: Update, UpdateExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WellKnownName
.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
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

### Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IMicrosoftGraphMailFolder

### Microsoft.Graph.PowerShell.Cmdlets.UsersMail.Models.IUsersMailIdentity

## OUTPUTS

### System.Boolean

## NOTES

ALIASES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties. For information on hash tables, run Get-Help about_Hash_Tables.


BODYPARAMETER <IMicrosoftGraphMailFolder>: mailFolder
  - `[Id <String>]`: Read-only.
  - `[ChildFolderCount <Int32?>]`: 
  - `[ChildFolders <IMicrosoftGraphMailFolder[]>]`: 
  - `[DisplayName <String>]`: The mailFolder's display name.
  - `[MessageRules <IMicrosoftGraphMessageRule[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[ActionAssignCategories <String[]>]`: A list of categories to be assigned to a message.
    - `[ActionCopyToFolder <String>]`: The ID of a folder that a message is to be copied to.
    - `[ActionDelete <Boolean?>]`: Indicates whether a message should be moved to the Deleted Items folder.
    - `[ActionForwardAsAttachmentTo <IMicrosoftGraphRecipient[]>]`: The email addresses of the recipients to which a message should be forwarded as an attachment.
      - `[EmailAddressAddress <String>]`: The email address of the person or entity.
      - `[EmailAddressName <String>]`: The display name of the person or entity.
    - `[ActionForwardTo <IMicrosoftGraphRecipient[]>]`: The email addresses of the recipients to which a message should be forwarded.
    - `[ActionMarkAsRead <Boolean?>]`: Indicates whether a message should be marked as read.
    - `[ActionMarkImportance <String>]`: importance
    - `[ActionMoveToFolder <String>]`: The ID of the folder that a message will be moved to.
    - `[ActionPermanentDelete <Boolean?>]`: Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
    - `[ActionRedirectTo <IMicrosoftGraphRecipient[]>]`: The email addresses to which a message should be redirected.
    - `[ActionStopProcessingRules <Boolean?>]`: Indicates whether subsequent rules should be evaluated.
    - `[Conditions <IMicrosoftGraphMessageRulePredicates>]`: messageRulePredicates
      - `[BodyContains <String[]>]`: Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
      - `[BodyOrSubjectContains <String[]>]`: Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
      - `[Categories <String[]>]`: Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
      - `[FromAddresses <IMicrosoftGraphRecipient[]>]`: Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
      - `[HasAttachments <Boolean?>]`: Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
      - `[HeaderContains <String[]>]`: Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
      - `[Importance <String>]`: importance
      - `[IsApprovalRequest <Boolean?>]`: Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
      - `[IsAutomaticForward <Boolean?>]`: Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
      - `[IsAutomaticReply <Boolean?>]`: Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
      - `[IsEncrypted <Boolean?>]`: Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
      - `[IsMeetingRequest <Boolean?>]`: Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
      - `[IsMeetingResponse <Boolean?>]`: Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
      - `[IsNonDeliveryReport <Boolean?>]`: Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
      - `[IsPermissionControlled <Boolean?>]`: Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
      - `[IsReadReceipt <Boolean?>]`: Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
      - `[IsSigned <Boolean?>]`: Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
      - `[IsVoicemail <Boolean?>]`: Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
      - `[MessageActionFlag <String>]`: messageActionFlag
      - `[NotSentToMe <Boolean?>]`: Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
      - `[RecipientContains <String[]>]`: Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
      - `[SenderContains <String[]>]`: Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
      - `[Sensitivity <String>]`: sensitivity
      - `[SentCcMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
      - `[SentOnlyToMe <Boolean?>]`: Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
      - `[SentToAddresses <IMicrosoftGraphRecipient[]>]`: Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
      - `[SentToMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
      - `[SentToOrCcMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
      - `[SubjectContains <String[]>]`: Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
      - `[WithinSizeRangeMaximumSize <Int32?>]`: The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
      - `[WithinSizeRangeMinimumSize <Int32?>]`: The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    - `[DisplayName <String>]`: The display name of the rule.
    - `[Exceptions <IMicrosoftGraphMessageRulePredicates>]`: messageRulePredicates
    - `[HasError <Boolean?>]`: Indicates whether the rule is in an error condition. Read-only.
    - `[IsEnabled <Boolean?>]`: Indicates whether the rule is enabled to be applied to messages.
    - `[IsReadOnly <Boolean?>]`: Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
    - `[Sequence <Int32?>]`: Indicates the order in which the rule is executed, among other rules.
  - `[Messages <IMicrosoftGraphMessage[]>]`: 
    - `[Categories <String[]>]`: The categories associated with the item
    - `[ChangeKey <String>]`: Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
    - `[CreatedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
    - `[LastModifiedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
    - `[Id <String>]`: Read-only.
    - `[Attachments <IMicrosoftGraphAttachment[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[ContentType <String>]`: The MIME type.
      - `[IsInline <Boolean?>]`: true if the attachment is an inline attachment; otherwise, false.
      - `[LastModifiedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
      - `[Name <String>]`: The attachment's file name.
      - `[Size <Int32?>]`: The length of the attachment in bytes.
    - `[BccRecipients <IMicrosoftGraphRecipient[]>]`: The Bcc: recipients for the message.
    - `[BodyContent <String>]`: The content of the item.
    - `[BodyContentType <String>]`: bodyType
    - `[BodyPreview <String>]`: The first 255 characters of the message body. It is in text format.
    - `[CcRecipients <IMicrosoftGraphRecipient[]>]`: The Cc: recipients for the message.
    - `[CompletedDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
    - `[CompletedDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    - `[ConversationId <String>]`: The ID of the conversation the email belongs to.
    - `[ConversationIndex <Byte[]>]`: Indicates the position of the message within the conversation.
    - `[DueDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
    - `[DueDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    - `[Extensions <IMicrosoftGraphExtension[]>]`: 
      - `[Id <String>]`: Read-only.
    - `[FlagStatus <String>]`: followupFlagStatus
    - `[FromEmailAddressAddress <String>]`: The email address of the person or entity.
    - `[FromEmailAddressName <String>]`: The display name of the person or entity.
    - `[HasAttachments <Boolean?>]`: 
    - `[Importance <String>]`: importance
    - `[InferenceClassification <String>]`: inferenceClassificationType
    - `[InternetMessageHeaders <IMicrosoftGraphInternetMessageHeader[]>]`: A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the message.  Returned only on applying a $select query option. Read-only.
      - `[Name <String>]`: Represents the key in a key-value pair.
      - `[Value <String>]`: The value in a key-value pair.
    - `[InternetMessageId <String>]`: The message ID in the format specified by RFC2822.
    - `[IsDeliveryReceiptRequested <Boolean?>]`: 
    - `[IsDraft <Boolean?>]`: 
    - `[IsRead <Boolean?>]`: 
    - `[IsReadReceiptRequested <Boolean?>]`: 
    - `[MentionPreviewIsMentioned <Boolean?>]`: 
    - `[Mentions <IMicrosoftGraphMention[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[Application <String>]`: 
      - `[ClientReference <String>]`: 
      - `[CreatedByAddress <String>]`: The email address of the person or entity.
      - `[CreatedByName <String>]`: The display name of the person or entity.
      - `[CreatedDateTime <DateTime?>]`: 
      - `[DeepLink <String>]`: 
      - `[MentionText <String>]`: 
      - `[MentionedAddress <String>]`: The email address of the person or entity.
      - `[MentionedName <String>]`: The display name of the person or entity.
      - `[ServerCreatedDateTime <DateTime?>]`: 
    - `[MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[Value <String[]>]`: A collection of property values.
    - `[ParentFolderId <String>]`: The unique identifier for the message's parent mailFolder.
    - `[ReceivedDateTime <DateTime?>]`: The date and time the message was received.
    - `[ReplyTo <IMicrosoftGraphRecipient[]>]`: The email addresses to use when replying.
    - `[SenderEmailAddressAddress <String>]`: The email address of the person or entity.
    - `[SenderEmailAddressName <String>]`: The display name of the person or entity.
    - `[SentDateTime <DateTime?>]`: The date and time the message was sent.
    - `[SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[Value <String>]`: A property value.
    - `[StartDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
    - `[StartDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    - `[Subject <String>]`: The subject of the message.
    - `[ToRecipients <IMicrosoftGraphRecipient[]>]`: The To: recipients for the message.
    - `[UniqueBodyContent <String>]`: The content of the item.
    - `[UniqueBodyContentType <String>]`: bodyType
    - `[UnsubscribeData <String[]>]`: 
    - `[UnsubscribeEnabled <Boolean?>]`: 
    - `[WebLink <String>]`: The URL to open the message in Outlook Web App.You can append an ispopout argument to the end of the URL to change how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout window. If ispopout is set to 0, then the browser will show the message in the Outlook Web App review pane.The message will open in the browser if you are logged in to your mailbox via Outlook Web App. You will be prompted to login if you are not already logged in with the browser.This URL can be accessed from within an iFrame.
  - `[MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]`: 
  - `[ParentFolderId <String>]`: The unique identifier for the mailFolder's parent mailFolder.
  - `[SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]`: 
  - `[TotalItemCount <Int32?>]`: 
  - `[UnreadItemCount <Int32?>]`: 
  - `[UserConfigurations <IMicrosoftGraphUserConfiguration[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[BinaryData <Byte[]>]`: 
  - `[WellKnownName <String>]`: 

CHILDFOLDERS <IMicrosoftGraphMailFolder[]>: .
  - `[Id <String>]`: Read-only.
  - `[ChildFolderCount <Int32?>]`: 
  - `[ChildFolders <IMicrosoftGraphMailFolder[]>]`: 
  - `[DisplayName <String>]`: The mailFolder's display name.
  - `[MessageRules <IMicrosoftGraphMessageRule[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[ActionAssignCategories <String[]>]`: A list of categories to be assigned to a message.
    - `[ActionCopyToFolder <String>]`: The ID of a folder that a message is to be copied to.
    - `[ActionDelete <Boolean?>]`: Indicates whether a message should be moved to the Deleted Items folder.
    - `[ActionForwardAsAttachmentTo <IMicrosoftGraphRecipient[]>]`: The email addresses of the recipients to which a message should be forwarded as an attachment.
      - `[EmailAddressAddress <String>]`: The email address of the person or entity.
      - `[EmailAddressName <String>]`: The display name of the person or entity.
    - `[ActionForwardTo <IMicrosoftGraphRecipient[]>]`: The email addresses of the recipients to which a message should be forwarded.
    - `[ActionMarkAsRead <Boolean?>]`: Indicates whether a message should be marked as read.
    - `[ActionMarkImportance <String>]`: importance
    - `[ActionMoveToFolder <String>]`: The ID of the folder that a message will be moved to.
    - `[ActionPermanentDelete <Boolean?>]`: Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
    - `[ActionRedirectTo <IMicrosoftGraphRecipient[]>]`: The email addresses to which a message should be redirected.
    - `[ActionStopProcessingRules <Boolean?>]`: Indicates whether subsequent rules should be evaluated.
    - `[Conditions <IMicrosoftGraphMessageRulePredicates>]`: messageRulePredicates
      - `[BodyContains <String[]>]`: Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
      - `[BodyOrSubjectContains <String[]>]`: Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
      - `[Categories <String[]>]`: Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
      - `[FromAddresses <IMicrosoftGraphRecipient[]>]`: Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
      - `[HasAttachments <Boolean?>]`: Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
      - `[HeaderContains <String[]>]`: Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
      - `[Importance <String>]`: importance
      - `[IsApprovalRequest <Boolean?>]`: Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
      - `[IsAutomaticForward <Boolean?>]`: Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
      - `[IsAutomaticReply <Boolean?>]`: Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
      - `[IsEncrypted <Boolean?>]`: Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
      - `[IsMeetingRequest <Boolean?>]`: Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
      - `[IsMeetingResponse <Boolean?>]`: Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
      - `[IsNonDeliveryReport <Boolean?>]`: Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
      - `[IsPermissionControlled <Boolean?>]`: Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
      - `[IsReadReceipt <Boolean?>]`: Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
      - `[IsSigned <Boolean?>]`: Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
      - `[IsVoicemail <Boolean?>]`: Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
      - `[MessageActionFlag <String>]`: messageActionFlag
      - `[NotSentToMe <Boolean?>]`: Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
      - `[RecipientContains <String[]>]`: Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
      - `[SenderContains <String[]>]`: Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
      - `[Sensitivity <String>]`: sensitivity
      - `[SentCcMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
      - `[SentOnlyToMe <Boolean?>]`: Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
      - `[SentToAddresses <IMicrosoftGraphRecipient[]>]`: Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
      - `[SentToMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
      - `[SentToOrCcMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
      - `[SubjectContains <String[]>]`: Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
      - `[WithinSizeRangeMaximumSize <Int32?>]`: The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
      - `[WithinSizeRangeMinimumSize <Int32?>]`: The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    - `[DisplayName <String>]`: The display name of the rule.
    - `[Exceptions <IMicrosoftGraphMessageRulePredicates>]`: messageRulePredicates
    - `[HasError <Boolean?>]`: Indicates whether the rule is in an error condition. Read-only.
    - `[IsEnabled <Boolean?>]`: Indicates whether the rule is enabled to be applied to messages.
    - `[IsReadOnly <Boolean?>]`: Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
    - `[Sequence <Int32?>]`: Indicates the order in which the rule is executed, among other rules.
  - `[Messages <IMicrosoftGraphMessage[]>]`: 
    - `[Categories <String[]>]`: The categories associated with the item
    - `[ChangeKey <String>]`: Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
    - `[CreatedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
    - `[LastModifiedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
    - `[Id <String>]`: Read-only.
    - `[Attachments <IMicrosoftGraphAttachment[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[ContentType <String>]`: The MIME type.
      - `[IsInline <Boolean?>]`: true if the attachment is an inline attachment; otherwise, false.
      - `[LastModifiedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
      - `[Name <String>]`: The attachment's file name.
      - `[Size <Int32?>]`: The length of the attachment in bytes.
    - `[BccRecipients <IMicrosoftGraphRecipient[]>]`: The Bcc: recipients for the message.
    - `[BodyContent <String>]`: The content of the item.
    - `[BodyContentType <String>]`: bodyType
    - `[BodyPreview <String>]`: The first 255 characters of the message body. It is in text format.
    - `[CcRecipients <IMicrosoftGraphRecipient[]>]`: The Cc: recipients for the message.
    - `[CompletedDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
    - `[CompletedDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    - `[ConversationId <String>]`: The ID of the conversation the email belongs to.
    - `[ConversationIndex <Byte[]>]`: Indicates the position of the message within the conversation.
    - `[DueDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
    - `[DueDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    - `[Extensions <IMicrosoftGraphExtension[]>]`: 
      - `[Id <String>]`: Read-only.
    - `[FlagStatus <String>]`: followupFlagStatus
    - `[FromEmailAddressAddress <String>]`: The email address of the person or entity.
    - `[FromEmailAddressName <String>]`: The display name of the person or entity.
    - `[HasAttachments <Boolean?>]`: 
    - `[Importance <String>]`: importance
    - `[InferenceClassification <String>]`: inferenceClassificationType
    - `[InternetMessageHeaders <IMicrosoftGraphInternetMessageHeader[]>]`: A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the message.  Returned only on applying a $select query option. Read-only.
      - `[Name <String>]`: Represents the key in a key-value pair.
      - `[Value <String>]`: The value in a key-value pair.
    - `[InternetMessageId <String>]`: The message ID in the format specified by RFC2822.
    - `[IsDeliveryReceiptRequested <Boolean?>]`: 
    - `[IsDraft <Boolean?>]`: 
    - `[IsRead <Boolean?>]`: 
    - `[IsReadReceiptRequested <Boolean?>]`: 
    - `[MentionPreviewIsMentioned <Boolean?>]`: 
    - `[Mentions <IMicrosoftGraphMention[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[Application <String>]`: 
      - `[ClientReference <String>]`: 
      - `[CreatedByAddress <String>]`: The email address of the person or entity.
      - `[CreatedByName <String>]`: The display name of the person or entity.
      - `[CreatedDateTime <DateTime?>]`: 
      - `[DeepLink <String>]`: 
      - `[MentionText <String>]`: 
      - `[MentionedAddress <String>]`: The email address of the person or entity.
      - `[MentionedName <String>]`: The display name of the person or entity.
      - `[ServerCreatedDateTime <DateTime?>]`: 
    - `[MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[Value <String[]>]`: A collection of property values.
    - `[ParentFolderId <String>]`: The unique identifier for the message's parent mailFolder.
    - `[ReceivedDateTime <DateTime?>]`: The date and time the message was received.
    - `[ReplyTo <IMicrosoftGraphRecipient[]>]`: The email addresses to use when replying.
    - `[SenderEmailAddressAddress <String>]`: The email address of the person or entity.
    - `[SenderEmailAddressName <String>]`: The display name of the person or entity.
    - `[SentDateTime <DateTime?>]`: The date and time the message was sent.
    - `[SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]`: 
      - `[Id <String>]`: Read-only.
      - `[Value <String>]`: A property value.
    - `[StartDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
    - `[StartDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    - `[Subject <String>]`: The subject of the message.
    - `[ToRecipients <IMicrosoftGraphRecipient[]>]`: The To: recipients for the message.
    - `[UniqueBodyContent <String>]`: The content of the item.
    - `[UniqueBodyContentType <String>]`: bodyType
    - `[UnsubscribeData <String[]>]`: 
    - `[UnsubscribeEnabled <Boolean?>]`: 
    - `[WebLink <String>]`: The URL to open the message in Outlook Web App.You can append an ispopout argument to the end of the URL to change how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout window. If ispopout is set to 0, then the browser will show the message in the Outlook Web App review pane.The message will open in the browser if you are logged in to your mailbox via Outlook Web App. You will be prompted to login if you are not already logged in with the browser.This URL can be accessed from within an iFrame.
  - `[MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]`: 
  - `[ParentFolderId <String>]`: The unique identifier for the mailFolder's parent mailFolder.
  - `[SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]`: 
  - `[TotalItemCount <Int32?>]`: 
  - `[UnreadItemCount <Int32?>]`: 
  - `[UserConfigurations <IMicrosoftGraphUserConfiguration[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[BinaryData <Byte[]>]`: 
  - `[WellKnownName <String>]`: 

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

MESSAGERULES <IMicrosoftGraphMessageRule[]>: .
  - `[Id <String>]`: Read-only.
  - `[ActionAssignCategories <String[]>]`: A list of categories to be assigned to a message.
  - `[ActionCopyToFolder <String>]`: The ID of a folder that a message is to be copied to.
  - `[ActionDelete <Boolean?>]`: Indicates whether a message should be moved to the Deleted Items folder.
  - `[ActionForwardAsAttachmentTo <IMicrosoftGraphRecipient[]>]`: The email addresses of the recipients to which a message should be forwarded as an attachment.
    - `[EmailAddressAddress <String>]`: The email address of the person or entity.
    - `[EmailAddressName <String>]`: The display name of the person or entity.
  - `[ActionForwardTo <IMicrosoftGraphRecipient[]>]`: The email addresses of the recipients to which a message should be forwarded.
  - `[ActionMarkAsRead <Boolean?>]`: Indicates whether a message should be marked as read.
  - `[ActionMarkImportance <String>]`: importance
  - `[ActionMoveToFolder <String>]`: The ID of the folder that a message will be moved to.
  - `[ActionPermanentDelete <Boolean?>]`: Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
  - `[ActionRedirectTo <IMicrosoftGraphRecipient[]>]`: The email addresses to which a message should be redirected.
  - `[ActionStopProcessingRules <Boolean?>]`: Indicates whether subsequent rules should be evaluated.
  - `[Conditions <IMicrosoftGraphMessageRulePredicates>]`: messageRulePredicates
    - `[BodyContains <String[]>]`: Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
    - `[BodyOrSubjectContains <String[]>]`: Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
    - `[Categories <String[]>]`: Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
    - `[FromAddresses <IMicrosoftGraphRecipient[]>]`: Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
    - `[HasAttachments <Boolean?>]`: Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
    - `[HeaderContains <String[]>]`: Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
    - `[Importance <String>]`: importance
    - `[IsApprovalRequest <Boolean?>]`: Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
    - `[IsAutomaticForward <Boolean?>]`: Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
    - `[IsAutomaticReply <Boolean?>]`: Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
    - `[IsEncrypted <Boolean?>]`: Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
    - `[IsMeetingRequest <Boolean?>]`: Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
    - `[IsMeetingResponse <Boolean?>]`: Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
    - `[IsNonDeliveryReport <Boolean?>]`: Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
    - `[IsPermissionControlled <Boolean?>]`: Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
    - `[IsReadReceipt <Boolean?>]`: Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
    - `[IsSigned <Boolean?>]`: Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
    - `[IsVoicemail <Boolean?>]`: Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
    - `[MessageActionFlag <String>]`: messageActionFlag
    - `[NotSentToMe <Boolean?>]`: Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
    - `[RecipientContains <String[]>]`: Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
    - `[SenderContains <String[]>]`: Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
    - `[Sensitivity <String>]`: sensitivity
    - `[SentCcMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
    - `[SentOnlyToMe <Boolean?>]`: Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
    - `[SentToAddresses <IMicrosoftGraphRecipient[]>]`: Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
    - `[SentToMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
    - `[SentToOrCcMe <Boolean?>]`: Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
    - `[SubjectContains <String[]>]`: Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
    - `[WithinSizeRangeMaximumSize <Int32?>]`: The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    - `[WithinSizeRangeMinimumSize <Int32?>]`: The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
  - `[DisplayName <String>]`: The display name of the rule.
  - `[Exceptions <IMicrosoftGraphMessageRulePredicates>]`: messageRulePredicates
  - `[HasError <Boolean?>]`: Indicates whether the rule is in an error condition. Read-only.
  - `[IsEnabled <Boolean?>]`: Indicates whether the rule is enabled to be applied to messages.
  - `[IsReadOnly <Boolean?>]`: Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
  - `[Sequence <Int32?>]`: Indicates the order in which the rule is executed, among other rules.

MESSAGES <IMicrosoftGraphMessage[]>: .
  - `[Categories <String[]>]`: The categories associated with the item
  - `[ChangeKey <String>]`: Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
  - `[CreatedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
  - `[LastModifiedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
  - `[Id <String>]`: Read-only.
  - `[Attachments <IMicrosoftGraphAttachment[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[ContentType <String>]`: The MIME type.
    - `[IsInline <Boolean?>]`: true if the attachment is an inline attachment; otherwise, false.
    - `[LastModifiedDateTime <DateTime?>]`: The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
    - `[Name <String>]`: The attachment's file name.
    - `[Size <Int32?>]`: The length of the attachment in bytes.
  - `[BccRecipients <IMicrosoftGraphRecipient[]>]`: The Bcc: recipients for the message.
    - `[EmailAddressAddress <String>]`: The email address of the person or entity.
    - `[EmailAddressName <String>]`: The display name of the person or entity.
  - `[BodyContent <String>]`: The content of the item.
  - `[BodyContentType <String>]`: bodyType
  - `[BodyPreview <String>]`: The first 255 characters of the message body. It is in text format.
  - `[CcRecipients <IMicrosoftGraphRecipient[]>]`: The Cc: recipients for the message.
  - `[CompletedDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
  - `[CompletedDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
  - `[ConversationId <String>]`: The ID of the conversation the email belongs to.
  - `[ConversationIndex <Byte[]>]`: Indicates the position of the message within the conversation.
  - `[DueDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
  - `[DueDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
  - `[Extensions <IMicrosoftGraphExtension[]>]`: 
    - `[Id <String>]`: Read-only.
  - `[FlagStatus <String>]`: followupFlagStatus
  - `[FromEmailAddressAddress <String>]`: The email address of the person or entity.
  - `[FromEmailAddressName <String>]`: The display name of the person or entity.
  - `[HasAttachments <Boolean?>]`: 
  - `[Importance <String>]`: importance
  - `[InferenceClassification <String>]`: inferenceClassificationType
  - `[InternetMessageHeaders <IMicrosoftGraphInternetMessageHeader[]>]`: A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the message.  Returned only on applying a $select query option. Read-only.
    - `[Name <String>]`: Represents the key in a key-value pair.
    - `[Value <String>]`: The value in a key-value pair.
  - `[InternetMessageId <String>]`: The message ID in the format specified by RFC2822.
  - `[IsDeliveryReceiptRequested <Boolean?>]`: 
  - `[IsDraft <Boolean?>]`: 
  - `[IsRead <Boolean?>]`: 
  - `[IsReadReceiptRequested <Boolean?>]`: 
  - `[MentionPreviewIsMentioned <Boolean?>]`: 
  - `[Mentions <IMicrosoftGraphMention[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[Application <String>]`: 
    - `[ClientReference <String>]`: 
    - `[CreatedByAddress <String>]`: The email address of the person or entity.
    - `[CreatedByName <String>]`: The display name of the person or entity.
    - `[CreatedDateTime <DateTime?>]`: 
    - `[DeepLink <String>]`: 
    - `[MentionText <String>]`: 
    - `[MentionedAddress <String>]`: The email address of the person or entity.
    - `[MentionedName <String>]`: The display name of the person or entity.
    - `[ServerCreatedDateTime <DateTime?>]`: 
  - `[MultiValueExtendedProperties <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[Value <String[]>]`: A collection of property values.
  - `[ParentFolderId <String>]`: The unique identifier for the message's parent mailFolder.
  - `[ReceivedDateTime <DateTime?>]`: The date and time the message was received.
  - `[ReplyTo <IMicrosoftGraphRecipient[]>]`: The email addresses to use when replying.
  - `[SenderEmailAddressAddress <String>]`: The email address of the person or entity.
  - `[SenderEmailAddressName <String>]`: The display name of the person or entity.
  - `[SentDateTime <DateTime?>]`: The date and time the message was sent.
  - `[SingleValueExtendedProperties <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>]`: 
    - `[Id <String>]`: Read-only.
    - `[Value <String>]`: A property value.
  - `[StartDateTime <String>]`: A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
  - `[StartDateTimeZone <String>]`: Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
  - `[Subject <String>]`: The subject of the message.
  - `[ToRecipients <IMicrosoftGraphRecipient[]>]`: The To: recipients for the message.
  - `[UniqueBodyContent <String>]`: The content of the item.
  - `[UniqueBodyContentType <String>]`: bodyType
  - `[UnsubscribeData <String[]>]`: 
  - `[UnsubscribeEnabled <Boolean?>]`: 
  - `[WebLink <String>]`: The URL to open the message in Outlook Web App.You can append an ispopout argument to the end of the URL to change how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout window. If ispopout is set to 0, then the browser will show the message in the Outlook Web App review pane.The message will open in the browser if you are logged in to your mailbox via Outlook Web App. You will be prompted to login if you are not already logged in with the browser.This URL can be accessed from within an iFrame.

MULTIVALUEEXTENDEDPROPERTIES <IMicrosoftGraphMultiValueLegacyExtendedProperty[]>: .
  - `[Id <String>]`: Read-only.
  - `[Value <String[]>]`: A collection of property values.

SINGLEVALUEEXTENDEDPROPERTIES <IMicrosoftGraphSingleValueLegacyExtendedProperty[]>: .
  - `[Id <String>]`: Read-only.
  - `[Value <String>]`: A property value.

USERCONFIGURATIONS <IMicrosoftGraphUserConfiguration[]>: .
  - `[Id <String>]`: Read-only.
  - `[BinaryData <Byte[]>]`: 

## RELATED LINKS

