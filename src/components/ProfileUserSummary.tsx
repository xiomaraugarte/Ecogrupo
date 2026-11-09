
import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

export default function ProfileUserSummary() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/foto_Xiomaro.png')}
        style={styles.avatar}
        resizeMode="cover"
      />

      <View style={styles.userInfo}>
        <Text style={styles.welcome}>Bienvenido</Text>

        <Text style={styles.name}>Xiomaro</Text>
        <Text style={styles.name}>Castro</Text>

        <View style={styles.stats}>
          <Text style={styles.statText}>4 amigos</Text>
          <Text style={styles.statText}>5000 Puntos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    minHeight: 175,
  },
  avatar: {
    width: '46%',
    height: 175,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.avatarBackground,
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: theme.text.title,
    color: theme.colors.text,
    textAlign: 'center',
  },
  name: {
    fontSize: theme.text.display,
    fontWeight: '900',
    lineHeight: 29,
    color: theme.colors.black,
    textAlign: 'center',
  },
  stats: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.md,
  },
  statText: {
    fontSize: theme.text.caption,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
