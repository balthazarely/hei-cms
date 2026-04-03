import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path segment, e.g. "bank-lofts"',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Consulting', value: 'consulting' },
        { label: 'Development', value: 'development' },
        { label: 'Investment', value: 'investment' },
      ],
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'completedDate',
      type: 'text',
      admin: {
        description: 'e.g. "2021"',
      },
    },
    {
      name: 'size',
      type: 'text',
      admin: {
        description: 'e.g. "63,000 Sq. Ft."',
      },
    },
    {
      name: 'projectType',
      type: 'text',
      admin: {
        description: 'e.g. "Redevelopment"',
      },
    },
    {
      name: 'showSidePanel',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'awards',
      type: 'array',
      fields: [
        {
          name: 'awardName',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'media',
      type: 'array',
      fields: [
        {
          name: 'mediaName',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
