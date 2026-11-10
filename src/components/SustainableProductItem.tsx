
import { colors } from '@/constants/colors';
import type { SustainableProduct } from '@/data/sustainableProducts';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    product: SustainableProduct;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onViewMore: () => void;
};

export default function SustainableProductItem({
    product,
    quantity,
    onIncrease,
    onDecrease,
    onViewMore,
}: Props) {
    return (
        <View style={styles.container}>
            <Image source={product.image} style={styles.image} />

            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.priceLabel}</Text>

                <Pressable style={styles.moreButton} onPress={onViewMore}>
                    <Text style={styles.moreText}>Ver más</Text>
                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={24}
                        color={colors.text}
                    />
                </Pressable>
            </View>

            <View style={styles.quantityContainer}>
                {quantity === 0 ? (
                    <Pressable onPress={onIncrease}>
                        <MaterialIcons name="add" size={52} color={colors.text} />
                    </Pressable>
                ) : (
                    <View style={styles.quantityControl}>
                        <Pressable onPress={onDecrease}>
                            <MaterialIcons
                                name={quantity === 1 ? 'delete-outline' : 'remove'}
                                size={23}
                                color={colors.text}
                            />
                        </Pressable>

                        <Text style={styles.quantity}>{quantity}</Text>

                        <Pressable onPress={onIncrease}>
                            <MaterialIcons name="add" size={24} color={colors.text} />
                        </Pressable>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        marginBottom: 44,
    },
    image: {
        width: 108,
        height: 82,
        borderRadius: 17,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        color: colors.text,
    },
    price: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
    },
    moreButton: {
        height: 48,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        marginTop: 15,
    },
    moreText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
    },
    quantityContainer: {
        width: 54,
        alignItems: 'center',
    },
    quantityControl: {
        alignItems: 'center',
        backgroundColor: colors.controlBackground,
        borderRadius: 15,
        padding: 7,
        gap: 5,
    },
    quantity: {
        fontSize: 16,
        color: colors.text,
    },
});
