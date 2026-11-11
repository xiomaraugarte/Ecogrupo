
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { theme } from '../constants/theme';

const weeks = [
  { label: 'S9', completed: true },
  { label: 'S10', completed: true },
  { label: 'S11', completed: true },
  { label: 'S12', completed: true },
  { label: 'S13', completed: false },
];

export default function ProfileStreakCard() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/StreakSuccess');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.number}>12</Text>

      <Text style={styles.title}>Semanas de racha</Text>

      <Image
        source={require('../../assets/images/rachi.png')}
        style={styles.character}
        resizeMode="contain"
      />

      <View style={styles.divider} />

      <View style={styles.weeks}>
        {weeks.map((week) => (
          <View key={week.label} style={styles.week}>
            <Text style={styles.weekLabel}>
              {week.label}
            </Text>

            <View
              style={[
                styles.weekCircle,
                !week.completed && styles.incompleteCircle,
              ]}
            >
              {week.completed && (
                <MaterialIcons
                  name="check"
                  size={theme.icon.md}
                  color={theme.colors.black}
                />
              )}
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.message}>
        ¡Recicla esta semana y mantén viva tu racha!
      </Text>

      <Pressable
        style={styles.button}
        onPress={handleRegister}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>
          Registrar reciclaje
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.streak,
    borderRadius: theme.radius.lg,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
    alignItems: 'center',
    overflow: 'hidden',
  },
  number: {
    fontSize: 48,
    fontWeight: '900',
    lineHeight: 55,
    color: theme.colors.white,
  },
  title: {
    fontSize: theme.text.title + theme.spacing.xs,
    color: theme.colors.white,
    textAlign: 'center',
  },
  character: {
    width: '80%',
    height: 245,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.white,
  },
  weeks: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.sm + theme.spacing.xs,
  },
  week: {
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  weekLabel: {
    color: theme.colors.white,
    fontSize: theme.text.small,
  },
  weekCircle: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.streakProgress,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incompleteCircle: {
    backgroundColor: theme.colors.incomplete,
  },
  message: {
    color: theme.colors.white,
    fontSize: theme.text.small,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.colors.secondaryButton,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm + theme.spacing.xs,
    borderRadius: theme.radius.sm,
    marginTop: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.text.body,
    fontWeight: '700',
  },
});
