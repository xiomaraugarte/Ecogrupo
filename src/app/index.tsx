
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import Shopping from './(tabs)/shopping';

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <Login /> */}
      <Shopping />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
});
