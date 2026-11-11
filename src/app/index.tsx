
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import Login from "./Login";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <Login /> */}
      <Login />
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
