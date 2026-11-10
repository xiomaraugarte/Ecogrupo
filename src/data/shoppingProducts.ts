
import { ImageSourcePropType } from 'react-native';

export interface ShoppingProduct {
  id: string;
  name: string;
  description: string;
  points: number;
  price: number;
  image: ImageSourcePropType;
}

export const shoppingProducts: ShoppingProduct[] = [
  {
    id: 'tomate',
    name: 'Tomate',
    description: 'Bolsa de 1kg',
    points: 20,
    price: 8,
    image: require('../../assets/images/tomates2.png'),
  },
  {
    id: 'zanahoria',
    name: 'Zanahoria',
    description: 'Bolsa de 1kg',
    points: 15,
    price: 5,
    image: require('../../assets/images/zanahoria.png'),
  },
  {
    id: 'cebolla',
    name: 'Cebolla',
    description: 'Bolsa de 1kg',
    points: 18,
    price: 6,
    image: require('../../assets/images/cebolla.png'),
  },
  {
    id: 'papa',
    name: 'Papa',
    description: 'Bolsa de 1kg',
    points: 18,
    price: 6,
    image: require('../../assets/images/papa.png'),
  },
  {
    id: 'lechuga',
    name: 'Lechuga',
    description: 'Bolsa de 1kg',
    points: 20,
    price: 8,
    image: require('../../assets/images/lechuga2.png'),
  },
  {
    id: 'brocoli',
    name: 'Brócoli',
    description: 'Bolsa de 1kg',
    points: 25,
    price: 10,
    image: require('../../assets/images/brocoli.png'),
  },
  {
    id: 'pimenton',
    name: 'Pimentón',
    description: 'Bolsa de 1kg',
    points: 35,
    price: 14,
    image: require('../../assets/images/pimenton.png'),
  },
  {
    id: 'pepino',
    name: 'Pepino',
    description: 'Bolsa de 1kg',
    points: 18,
    price: 6,
    image: require('../../assets/images/pepino.png'),
  },
  {
    id: 'acelga',
    name: 'Acelga',
    description: 'Bolsa de 1kg',
    points: 15,
    price: 5,
    image: require('../../assets/images/acelga.png'),
  },
  {
    id: 'arveja',
    name: 'Arveja',
    description: 'Bolsa de 1kg',
    points: 30,
    price: 12,
    image: require('../../assets/images/arveja.png'),
  },
];
