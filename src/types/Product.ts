export interface Product {
  id: number
  name: string
  price: number
  type: 'grocery' | 'beauty' | 'electronics'
}

export interface CartItem extends Product {
  quantity: number
  subtotalWithDiscount: number
}
