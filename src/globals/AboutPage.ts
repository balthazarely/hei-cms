import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      admin: {
        description: 'Main heading, e.g. "Historic Buildings are our Passion"',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      admin: {
        description: 'Subheading below the main heading',
      },
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
    },
    {
      name: 'team',
      type: 'array',
      label: 'Team Members',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          required: true,
        },
        {
          name: 'linkedInLink',
          type: 'text',
          admin: {
            description: 'Full LinkedIn profile URL',
          },
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
