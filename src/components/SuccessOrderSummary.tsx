import { colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

export interface OrderItem {
  id: string;
  quantity: number;
  name: string;
}

interface SuccessOrderSummaryProps {
  items?: OrderItem[];
}

const DEFAULT_ITEMS: OrderItem[] = [
  { id: '1', quantity: 1, name: 'Tomate' },
  { id: '2', quantity: 1, name: 'Lechuga' },
  { id: '3', quantity: 1, name: 'Pimiento' },
];

export default function SuccessOrderSummary({ items = DEFAULT_ITEMS }: SuccessOrderSummaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Este es tu pedido</Text>

      <View style={styles.listContainer}>
        {items.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.itemRow,
              index % 2 === 1 ? styles.rowLightGreen : styles.rowGray,
            ]}
          >
            <Text style={styles.itemText}>
              {item.quantity}x {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  listContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemRow: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  rowGray: {
    backgroundColor: colors.highlight,
  },
  rowLightGreen: {
    backgroundColor: colors.sustainableSelected,
  },
  itemText: {
    fontSize: 16,
    color: colors.textMuted,
  },
});