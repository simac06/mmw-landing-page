export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'social',
      title: 'Social',
    },
    {
      name: 'favicon',
      title: 'Favicon',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
    },
    {
      name: 'favicons',
      title: 'Favicons',
      type: 'object',
      group: 'favicon',
      fields: [
        {
          name: 'favicon16',
          title: 'Favicon 16x16',
          type: 'image',
          description: 'Upload the favicon-16x16.png file here.',
        },
        {
          name: 'favicon32',
          title: 'Favicon 32x32',
          type: 'image',
          description: 'Upload the favicon-32x32.png file here.',
        },
        {
          name: 'androidChrome192',
          title: 'Android Chrome 192x192',
          type: 'image',
          description: 'Upload the android-chrome-192x192.png file here.',
        },
        {
          name: 'androidChrome512',
          title: 'Android Chrome 512x512',
          type: 'image',
          description: 'Upload the android-chrome-512x512.png file here.',
        },
        {
          name: 'appleTouchIcon',
          title: 'Apple Touch Icon',
          type: 'image',
          description: 'Upload the apple-touch-icon.png file here.',
        },
        {
          name: 'mstile150',
          title: 'MS Tile 150x150',
          type: 'image',
          description: 'Upload the mstile-150x150.png file here.',
        },
        {
          name: 'safariPinnedTab',
          title: 'Safari Pinned Tab',
          type: 'file',
          description: 'Upload the safari-pinned-tab.svg file here.',
          options: {
            accept: 'image/svg+xml',
          },
        },
        {
          name: 'faviconIco',
          title: 'Favicon ICO',
          type: 'file',
          description: 'Upload the favicon.ico file here.',
          options: {
            accept: 'image/x-icon',
          },
        },
        {
          name: 'browserconfigXml',
          title: 'Browserconfig XML',
          type: 'file',
          description: 'Upload the browserconfig.xml file here.',
          options: {
            accept: 'text/xml',
          },
        },
        {
          name: 'siteWebmanifest',
          title: 'Web Manifest',
          type: 'file',
          description: 'Upload the site.webmanifest file here.',
          options: {
            accept: 'application/json',
          },
        },
      ],
    },
  ],
}
