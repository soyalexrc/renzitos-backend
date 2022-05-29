export default {
  name: 'color',
  title: 'Color',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'colorValue',
      title: 'Color Value',
      type: 'colorPicker'
    }
  ],
}
