export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{type: "reference", to: {type: "category"}}],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{type: "reference", to: {type: "size"}}],
    },
    {
      name: "genders",
      title: "Genders",
      type: "array",
      of: [{type: "reference", to: {type: "gender"}}],
    },
    {
      name: "materials",
      title: "Materials",
      type: "array",
      of: [{type: "string"}],
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{type: "reference", to: {type: "color"}}],
    },
    {
      name: 'unitPrice',
      title: 'Unit Price',
      type: 'number'
    },
    {
      name: 'wholesalePrice',
      title: 'Wholesale Price',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
}
