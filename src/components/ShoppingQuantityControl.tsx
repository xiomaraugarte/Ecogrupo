
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function ShoppingQuantityControl({
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  if (quantity === 0) {
    return (
      <Pressable
        onPress={onIncrease}
        style={styles.addOnly}
        accessibilityRole="button"
        accessibilityLabel="Añadir producto"
      >
        <MaterialIcons name="add" size={53} color="#222222" />
      </Pressable>
    );
  }

  return (
    <View style={styles.selector}>
      <Pressable
        onPress={onDecrease}
        style={styles.action}
        accessibilityRole="button"
        accessibilityLabel="Quitar producto"
      >
        <MaterialIcons
          name={quantity === 1 ? 'delete-outline' : 'remove'}
          size={32}
          color="#222222"
        />
      </Pressable>

      <Text style={styles.quantity}>
        {quantity} kg
      </Text>

      <Pressable
        onPress={onIncrease}
        style={styles.action}
        accessibilityRole="button"
        accessibilityLabel="Añadir otra unidad"
      >
        <MaterialIcons name="add" size={36} color="#222222" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addOnly: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selector: {
    width: '100%',
    minHeight: 64,
    backgroundColor: '#E3E1E1',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  action: {
    width: 35,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 19,
    color: '#111111',
    fontWeight: '500',
  },
});
