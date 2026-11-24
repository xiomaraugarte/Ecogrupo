
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { shoppingProducts } from '../data/shoppingProducts';

type Category = 'family' | 'home';
type Quantities = Record<string, number>;

interface ShoppingState {
  quantities: Quantities;
  category: Category;
  setCategory: (value: Category) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalPoints: number;
  totalPrice: number;
  totalProducts: number;
}

const ShoppingContext = createContext<ShoppingState | null>(null);

export function ShoppingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [category, setCategory] = useState<Category>('family');

  const increase = (id: string) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id: string) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  };

  const totalPoints = shoppingProducts.reduce(
    (sum, product) =>
      sum + product.points * (quantities[product.id] || 0),
    0
  );

  const totalPrice = shoppingProducts.reduce(
    (sum, product) =>
      sum + product.price * (quantities[product.id] || 0),
    0
  );

  const totalProducts = Object.values(quantities).reduce(
    (sum, quantity) => sum + quantity,
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
