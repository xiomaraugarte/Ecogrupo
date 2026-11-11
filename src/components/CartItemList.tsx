import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    points: number;
    quantity: number;
    image: any;
}

interface CartItemListProps {
    items: CartItem[];
    onRemoveItem: (id: string) => void;
    onQuantityChange: (id: string, delta: number) => void;
}

export default function CartItemList({ items, onRemoveItem, onQuantityChange }: CartItemListProps) {
    return (
        <ScrollView contentContainerStyle={styles.listContent}>
            {items.map((item) => (
                <View key={item.id} style={styles.itemCard}>
                    <Image source={item.image} style={styles.itemImage} />

                    <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>{item.price} Bs.</Text>
                        <Text style={styles.itemPoints}>{item.points} Puntos</Text>
                    </View>

                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            onPress={() => onRemoveItem(item.id)}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <MaterialIcons name="delete-outline" size={26} color={colors.black} />
                        </TouchableOpacity>

                        <Text style={styles.quantityText}>{item.quantity}</Text>

                        <TouchableOpacity onPress={() => onQuantityChange(item.id, 1)}>
                            <MaterialIcons name="add" size={26} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listContent: {
        paddingHorizontal: 20,
        gap: 16,
        paddingBottom: 20,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 16,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 16,
    },
    itemName: {
        fontSize: 18,
        color: colors.text,
        marginBottom: 2,
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
    },
    itemPoints: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.controlBackground,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        gap: 16,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
    },
});