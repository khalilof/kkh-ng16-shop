export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface BasketProduct extends Product {
  count: number;
}


export const PRODUCTS_DB: Product[] = [
  {
    id: 123,
    title: 'Cheetos Hot and Flaming',
    price: 3.99,
    image: 'cheetos',
    description: 'a b c',
    category: 'cat1'
  },
  {
    id: 8732,
    title: 'Pepsi Cola',
    price: 2.99,
    image: 'pepsi',
    description: 'a b c',
    category: 'cat1'
  },
  {
    id: 989832,
    title: 'Pop Corn',
    price: 2.49,
    image: 'popcorn',
    description: 'a b c',
    category: 'cat1'
  },
  {
    id: 54354,
    title: 'Gü',
    price: 3.45,
    image: 'gue',
    description: 'a b c',
    category: 'cat1'
  }
]
