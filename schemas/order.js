export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      options: {
        disableNew: true
      }
    },
    {
      title: 'Username',
      name: 'userName',
      type: 'string'
    },
    {
      title: 'ItemsPrice',
      name: 'itemsPrice',
      type: 'number'
    },
    {
      title: 'ShippingPrice',
      name: 'shippingPrice',
      type: 'number'
    },
    {
      title: 'TaxPrice',
      name: 'taxPrice',
      type: 'number'
    },
    {
      title: 'TotalPrice',
      name: 'totalPrice',
      type: 'number'
    },
    {
      title: 'ShippingAddress',
      name: 'shippingAddress',
      type: 'shippingAddress'
    },
    {
      title: 'PaymentMethod',
      name: 'paymentMethod',
      type: 'string'
    },
    {
      title: 'PaymentResult',
      name: 'paymentResult',
      type: 'paymentResult'
    },
    {
      title: 'OrderItems',
      name: 'orderItems',
      type: 'array',
      of: [
        {
          title: 'Order item',
          type: 'orderItem'
        }
      ]
    },
    {
      title: 'IsPaid',
      name: 'isPaid',
      type: 'boolean'
    },
    {
      title: 'Paid Date',
      name: 'paidDate',
      type: 'datetime'
    },
    {
      title: 'isDelivered',
      name: 'isDelivered',
      type: 'boolean'
    },
    {
      title: 'DeliveredAt',
      name: 'deliveredAt',
      type: 'datetime'
    },
    {
      title: 'CreatedAt',
      name: 'createdAt',
      type: 'datetime'
    }
  ]
}
