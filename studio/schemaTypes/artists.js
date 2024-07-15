export default {
  name: 'artists',
  type: 'document',
  title: 'Artists',
  groups: [
    {
      name: 'general',
      title: 'General',
      default: true,
    },
    {
      name: 'links',
      title: 'Links',
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Artist Name',
      validation: (Rule) => Rule.required(), // Make Artist Name required
      group: 'general',
    },
    {
      name: 'handle',
      type: 'string',
      title: 'Artist Handle',
      description: 'Short, unique handle for URLs. Exclude spaces and special characters.',
      validation: (Rule) => Rule.required(), // Make Artist Handle required
      group: 'general',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: 'general',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'customImage',
      title: 'Artist Image',
      group: 'general',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'spotifyId',
      type: 'string',
      title: 'Spotify ID',
      group: 'general',
    },
    {
      name: 'bio',
      type: 'text', // Consider 'array of blocks' for rich text editing
      title: 'Bio',
      group: 'general',
    },
    {
      name: 'social',
      type: 'object',
      title: 'Social Media Handles',
      description:
        "Username for each social media platform. Don't include @, and don't include a URL. eg. 'musicsmostwanted' or 'm3diasmostwanted'",
      fields: [
        {name: 'twitter', type: 'string', title: 'Twitter'},
        {name: 'instagram', type: 'string', title: 'Instagram'},
        {name: 'tiktok', type: 'string', title: 'TikTok'},
        {name: 'twitch', type: 'string', title: 'Twitch'},
      ],
      group: 'general',
    },
    {
      name: 'streamingLinks',
      type: 'object',
      title: 'Streaming Platforms',
      fields: [
        {name: 'spotify', type: 'string', title: 'Spotify'},
        {name: 'appleMusic', type: 'string', title: 'Apple Music'},
        {name: 'soundcloud', type: 'string', title: 'SoundCloud'},
        {name: 'youtubeMusic', type: 'string', title: 'YouTube Music'},
        {name: 'deezer', type: 'string', title: 'Deezer'},
        {name: 'tidal', type: 'string', title: 'TIDAL'},
        {name: 'amazonMusic', type: 'string', title: 'Amazon Music'},
        {name: 'bandcamp', type: 'string', title: 'Bandcamp'},
      ],
      group: 'general',
    },
    {
      name: 'pinnedSongLink',
      type: 'object',
      title: 'Pinned Song',
      description:
        'This will be at the top of the link section. Only one song can be pinned. Optional.',
      group: 'links',
      fields: [
        {name: 'songTitle', type: 'string', title: 'Song Title'},
        {
          name: 'songArtists',
          title: 'Arists',
          type: 'string',
          description: 'Divided by commas.',
        },
        {
          name: 'pinned_urls',
          type: 'object',
          title: 'URLs',
          description: 'URLs for each streaming platform. Leave blank if not available.',
          fields: [
            {name: 'spotify', type: 'url', title: 'Spotify'},
            {name: 'youtube', type: 'url', title: 'Youtube Music'},
            {name: 'apple', type: 'url', title: 'Apple Music'},
            {name: 'tidal', type: 'url', title: 'Tidal'},
            {name: 'amazon', type: 'url', title: 'Amazon Music'},
            {name: 'deezer', type: 'url', title: 'Deezer'},
            {name: 'bandcamp', type: 'url', title: 'Bandcamp'},
            {name: 'soundcloud', type: 'url', title: 'SoundCloud'},
          ],
        },
        {name: 'image', type: 'customImage', title: 'Cover Image'},
      ],
    },

    {
      name: 'stackedLinks',
      type: 'array',
      title: 'Stacked Links',
      of: [{type: 'regularLink'}],
      group: 'links',
    },
  ],
}
