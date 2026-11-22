import { Lemon_400Regular, useFonts } from "@expo-google-fonts/lemon";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

export default function Header() {
  const [fontsLoaded] = useFonts({
    Lemon: Lemon_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Bienvenidos a</Text>
      <Image
        source={require("../../assets/images/Ecogrupo.png")}
        style={styles.logo}
        alt="Logo de Ecogrupo"
        accessibilityLabel="Logo de Ecogrupo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  greeting: {
    fontFamily: "Lemon",
    textAlign: "center",
    fontSize: 32,
    color: colors.text,
    marginBottom: 16,
  },
  logo: {
    width: "100%",
    aspectRatio: 5.5,
  },
});
