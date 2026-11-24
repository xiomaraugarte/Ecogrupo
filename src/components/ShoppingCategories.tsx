
import { useShopping } from '@/context/ShoppingContext';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ShoppingCategories() {
  const { category, setCategory } = useShopping();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setCategory('family')}
        style={[
          styles.button,
          category === 'family' && styles.selected,
        ]}
      >
        <Text style={styles.text}>
          Canasta{'\n'}familiar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push('/SustainableHome')}
        style={[
          styles.button,
          category === 'home' && styles.selected,
        ]}
      >
        <Text style={styles.text}>
          Hogar{'\n'}sostenible
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: 18,
  },
  button: {
    width: 91,
    height: 49,
    borderWidth: 1,
    borderColor: '#17694C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  selected: {
    backgroundColor: '#DCEAB9',
    borderWidth: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    color: '#111111',
  },
});
