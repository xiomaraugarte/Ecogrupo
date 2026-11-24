import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

import type { CartItem } from '@/components/CartItemList';
import { shoppingProducts } from '@/data/shoppingProducts';
import { sustainableProducts } from '@/data/sustainableProducts';

type Category = 'family' | 'home';
type Quantities = Record<string, number>;

interface ShoppingState {
  quantities: Quantities;
  category: Category;
  setCategory: (value: Category) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  clearCart: () => void;
  items: CartItem[];
  totalPoints: number;
  totalPrice: number;
  totalProducts: number;
}

const ShoppingContext = createContext<ShoppingState | null>(null);

const allProducts = [
  ...shoppingProducts,
  ...sustainableProducts.map(product => ({
    ...product,
    points: 0,
  })),
];

export function ShoppingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [category, setCategory] = useState<Category>('family');

  const increase = (id: string) => {
    setQuantities(previous => ({
      ...previous,
      [id]: (previous[id] || 0) + 1,
    }));
  };

  const decrease = (id: string) => {
    setQuantities(previous => ({
      ...previous,
      [id]: Math.max(0, (previous[id] || 0) - 1),
    }));
  };

  const remove = (id: string) => {
    setQuantities(previous => ({
      ...previous,
      [id]: 0,
    }));
  };

  const clearCart = () => {
    setQuantities({});
  };

  const items: CartItem[] = allProducts
    .filter(product => (quantities[product.id] || 0) > 0)
    .map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      points: product.points,
      quantity: quantities[product.id],
      image: product.image,
    }));

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalPoints = items.reduce(
    (sum, item) => sum + item.points * item.quantity,
    0
  );

  const totalProducts = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <ShoppingContext.Provider
      value={{
        quantities,
        category,
        setCategory,
        increase,
        decrease,
        remove,
        clearCart,
        items,
        totalPoints,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShopping() {
  const context = useContext(ShoppingContext);

  if (!context) {
    throw new Error(
      'useShopping debe utilizarse dentro de ShoppingProvider'
    );
  }

  return context;
}