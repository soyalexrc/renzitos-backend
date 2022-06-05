export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string'
    },
    {
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean'
    }
  ]
}
