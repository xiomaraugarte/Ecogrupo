
import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

const ranking = [
  {
    id: '1',
    name: 'Tefy',
    weeks: '20 Semanas',
    position: '1',
    medal: require('../../assets/images/primero.png'),
    avatar: require('../../assets/images/azafata.png'),
  },
  {
    id: '2',
    name: 'Ana',
    weeks: '13 Semanas',
    position: '2',
    medal: require('../../assets/images/segundo.png'),
    avatar: require('../../assets/images/mucama.png'),
  },
  {
    id: '3',
    name: 'Tú',
    weeks: '12 Semanas',
    position: '3',
    medal: require('../../assets/images/tercero.png'),
    avatar: require('../../assets/images/foto_Xiomaro.png'),
  },
  {
    id: '4',
    name: 'Ramón',
    weeks: '2 Semanas',
    position: '4',
    medal: undefined,
    avatar: require('../../assets/images/graduado.png'),
  },
];

export default function ProfileRanking() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Compite con tus amigos!</Text>
      <Text style={styles.title}>Ranking</Text>

      <View style={styles.list}>
        {ranking.map((person) => (
          <View
            key={person.id}
            style={[
              styles.row,
              person.position === '3' && styles.currentUser,
            ]}
          >
            <View style={styles.medalContainer}>
              {person.position !== '4' ? (
                <Image
                  source={person.medal}
                  style={styles.medal}
                  resizeMode="contain"
                />
              ) : (
                <Text style={styles.position}>4</Text>
              )}
            </View>

            <Image
              source={person.avatar}
              style={styles.avatar}
              resizeMode="cover"
            />

            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.weeks}>{person.weeks}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.text.heading,
    fontWeight: '600',
    color: theme.colors.text,
  },
  title: {
    fontSize: theme.text.display,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  list: {
    gap: theme.spacing.sm,
  },
  row: {
    height: 74,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing.sm + theme.spacing.xs,
    gap: theme.spacing.sm + theme.spacing.xs,
    elevation: 3,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.18,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 3 },
  },
  currentUser: {
    backgroundColor: theme.colors.highlight,
    borderColor: theme.colors.primarySoft,
  },
  medalContainer: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  medal: {
    width: 55,
    height: 65,
  },
  position: {
    fontSize: theme.text.display,
    fontWeight: '900',
    color: theme.colors.text,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.avatarBackground,
  },
  name: {
    flex: 1,
    fontSize: theme.text.small,
    color: theme.colors.text,
  },
  weeks: {
    fontSize: theme.text.caption,
    color: theme.colors.text,
  },
});
