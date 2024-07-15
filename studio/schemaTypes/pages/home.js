export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Home',
    },
    {
      name: 'heroSlides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'heroSlide',
        },
      ],
    },
  ],
}
