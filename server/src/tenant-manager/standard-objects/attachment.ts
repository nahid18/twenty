const attachmentMetadata = {
  nameSingular: 'attachmentV2',
  namePlural: 'attachmentsV2',
  labelSingular: 'Attachment',
  labelPlural: 'Attachments',
  targetTableName: 'attachment',
  description: 'An attachment',
  icon: 'IconFileImport',
  isActive: true,
  isSystem: true,
  fields: [
    {
      isCustom: false,
      isActive: true,
      type: 'TEXT',
      name: 'name',
      label: 'Name',
      targetColumnMap: {
        value: 'name',
      },
      description: 'Attachment name',
      icon: 'IconFileUpload',
      isNullable: false,
    },
    {
      isCustom: false,
      isActive: true,
      type: 'TEXT',
      name: 'fullPath',
      label: 'Full path',
      targetColumnMap: {
        value: 'fullPath',
      },
      description: 'Attachment full path',
      icon: 'IconLink',
      isNullable: false,
    },
    {
      isCustom: false,
      isActive: true,
      type: 'TEXT',
      name: 'type',
      label: 'Type',
      targetColumnMap: {
        value: 'type',
      },
      description: 'Attachment type',
      icon: 'IconList',
      isNullable: false,
    },
    // Relations
    {
      isCustom: false,
      isActive: true,
      type: 'RELATION',
      name: 'author',
      label: 'Author',
      targetColumnMap: {
        value: 'authorId',
      },
      description: 'Attachment author',
      icon: 'IconCircleUser',
      isNullable: false,
    },
    {
      isCustom: false,
      isActive: true,
      type: 'RELATION',
      name: 'activity',
      label: 'Activity',
      targetColumnMap: {
        value: 'activityId',
      },
      description: 'Attachment activity',
      icon: 'IconNotes',
      isNullable: false,
    },
    {
      isCustom: false,
      isActive: true,
      type: 'RELATION',
      name: 'person',
      label: 'Person',
      targetColumnMap: {
        value: 'personId',
      },
      description: 'Attachment person',
      icon: 'IconUser',
      isNullable: false,
    },
    {
      isCustom: false,
      isActive: true,
      type: 'RELATION',
      name: 'company',
      label: 'Company',
      targetColumnMap: {
        value: 'companyId',
      },
      description: 'Attachment company',
      icon: 'IconBuildingSkyscraper',
      isNullable: false,
    },
  ],
};

export default attachmentMetadata;