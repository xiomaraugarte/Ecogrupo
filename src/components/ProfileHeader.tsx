import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { theme } from '../constants/theme';

export default function ProfileHeader() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Ecogrupo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Pressable
        style={styles.cartButton}
        onPress={() => router.push('/cart')}
      >
        <MaterialIcons
          name="shopping-cart"
          size={theme.icon.lg}
          color={theme.colors.white}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: theme.spacing.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    width: 230,
    height: 55,
  },
  cartButton: {
    position: 'absolute',
    right: theme.spacing.xs,
    bottom: theme.spacing.xs,
    width: 55,
    height: 55,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
