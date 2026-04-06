import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  fields: [
    // ── HeroLarge ──────────────────────────────────────────────
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: 'Hartman Ely Investments',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Creating Sustainable Communities',
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: 'See Our Work',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '/all-projects',
        },
      ],
    },

    // ── HomeBlockMission ───────────────────────────────────────
    {
      name: 'mission',
      type: 'group',
      label: 'Mission Block',
      fields: [
        {
          name: 'statement',
          type: 'textarea',
          required: true,
          defaultValue:
            'Our passion is helping communities create environmentally responsible buildings, infrastructure and other features that are sustainable, transit oriented and energy independent.',
        },
      ],
    },

    // ── HomeBlockTwo ───────────────────────────────────────────
    {
      name: 'about',
      type: 'group',
      label: 'About Block',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'We specialize in the redevelopment of historic buildings.',
        },
        {
          name: 'body',
          type: 'textarea',
          required: true,
        },
      ],
    },

    // ── HomeBlockThree ─────────────────────────────────────────
    {
      name: 'portfolio',
      type: 'group',
      label: 'Portfolio Block',
      fields: [
        {
          name: 'categories',
          type: 'array',
          label: 'Categories',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'body',
              type: 'textarea',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
              admin: {
                description: 'e.g. "/categories/redevelopment"',
              },
            },
          ],
        },
      ],
    },

    // ── SEO ────────────────────────────────────────────────────
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
