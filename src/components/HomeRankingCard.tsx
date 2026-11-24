
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export default function HomeRankingCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sigue subiendo en el ranking!
      </Text>

      <View style={styles.content}>
        <View style={styles.information}>
          <Text style={styles.description}>
            Te falta 1 semana para llegar
            {'\n'}al puesto #2.
          </Text>

          <View style={styles.progressBackground}>
            <View style={styles.progress} />
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Ver ranking
            </Text>
          </Pressable>
        </View>

        <MaterialIcons
          name="emoji-events"
          size={88}
          color={colors.rankingTrophy}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.rankingCard,
    borderRadius: 24,
    padding: 20,
    gap: 6,
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.rankingText,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  information: {
    flex: 1,
    gap: 10,
  },

  description: {
    fontSize: 12,
    color: colors.black,
  },

  progressBackground: {
    height: 27,
    backgroundColor: colors.rankingProgressBackground,
    borderRadius: 20,
    overflow: 'hidden',
  },

  progress: {
    width: '85%',
    height: '100%',
    backgroundColor: colors.rankingProgress,
    borderRadius: 20,
  },

  button: {
    alignSelf: 'center',
    backgroundColor: colors.rankingText,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 4,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
