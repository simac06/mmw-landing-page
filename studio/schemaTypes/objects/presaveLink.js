export default {
  name: 'presaveLink',
  title: 'Presave Link',
  type: 'object',
  fields: [
    {
      name: 'songTitle',
      title: 'Song Title',
      type: 'string',
    },
    {
      name: 'songArtists',
      title: 'Arists',
      type: 'string',
      description: 'Divided by commas.',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
  ],
}
