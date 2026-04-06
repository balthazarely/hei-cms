import type { GlobalConfig } from 'payload'

export const CategoryPages: GlobalConfig = {
  slug: 'category-pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'redevelopment',
      type: 'group',
      label: 'Redevelopment',
      fields: [
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'consulting',
      type: 'group',
      label: 'Consulting',
      fields: [
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'renewableEnergy',
      type: 'group',
      label: 'Renewable Energy',
      fields: [
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
