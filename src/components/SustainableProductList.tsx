
import {
    sustainableProducts,
    type SustainableProduct,
} from '@/data/sustainableProducts';
import { View } from 'react-native';
import SustainableProductItem from './SustainableProductItem';

type Props = {
    quantities: Record<string, number>;
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
    onSelect: (product: SustainableProduct) => void;
};

export default function SustainableProductList({
    quantities,
    onIncrease,
    onDecrease,
    onSelect,
}: Props) {
    return (
        <View>
            {sustainableProducts.map(product => (
                <SustainableProductItem
                    key={product.id}
                    product={product}
                    quantity={quantities[product.id] || 0}
                    onIncrease={() => onIncrease(product.id)}
                    onDecrease={() => onDecrease(product.id)}
                    onViewMore={() => onSelect(product)}
                />
            ))}
        </View>
    );
}
