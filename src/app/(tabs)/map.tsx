import Head from "expo-router/head";

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EcoMap from "../../components/EcoMap";
import { colors } from "../../constants/colors";

export default function MapScreen() {
  return (
    <>
      <Head>
        <title>Mapa de reciclaje | Ecogrupo</title>
        <meta
          name="description"
          content="Consulta el mapa de Ecogrupo para localizar puntos de reciclaje y conocer dónde puedes contribuir al cuidado del medio ambiente."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <SafeAreaView style={styles.screen}>
        <EcoMap />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
});
