
import type { ImageSourcePropType } from 'react-native';

export type SustainableProduct = {
    id: string;
    name: string;
    price: number;
    priceLabel: string;
    image: ImageSourcePropType;
    description: string[];
};

export const sustainableProducts: SustainableProduct[] = [
    {
        id: 'pipes',
        name: 'Tuberías de desagüe',
        price: 50,
        priceLabel: '50 Bs c/u',
        image: require('../../assets/images/tubo.png'),
        description: [
            'Disponibles en medidas de 1 pulgada y 6 pulgadas',
            'Fabricados 100% con botellas de plástico recicladas',
        ],
    },

    {
        id: 'gardens',
        name: 'Huertos',
        price: 5,
        priceLabel: 'Bs 5',
        image: require('../../assets/images/huerto.png'),
        description: [
            'Ideales para cultivar hortalizas y plantas en espacios pequeños, como patios, terrazas y jardines.',
            'Elaborados con materiales reciclados que promueven el cultivo sostenible y el cuidado del medio ambiente.',
        ],
    },

];
