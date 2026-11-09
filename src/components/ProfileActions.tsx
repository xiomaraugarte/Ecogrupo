
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

export default function ProfileActions() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Editar perfil</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Añadir amigos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  button: {
    flex: 1,
    height: 48,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  buttonText: {
    fontSize: theme.text.body,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
