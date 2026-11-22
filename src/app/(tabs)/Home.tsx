import Head from "expo-router/head";
import { ScrollView, StyleSheet, View } from "react-native";

import HomeImpactStats from "@/components/HomeImpactStats";
import HomeProductCard from "@/components/HomeProductCard";
import HomeProfileHeader from "@/components/HomeProfileHeader";
import HomeRankingCard from "@/components/HomeRankingCard";
import HomeRecyclingCard from "@/components/HomeRecyclingCard";
import HomeUserSummary from "@/components/HomeUserSummary";

import { colors } from "@/constants/colors";
import { theme } from "@/constants/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecogrupo | Recicla, gana puntos y cuida el planeta</title>

        <meta
          name="description"
          content="Con Ecogrupo puedes registrar tus reciclajes, ganar puntos, consultar tu impacto ambiental y contribuir a un planeta más sostenible."
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Ecogrupo | Recicla y cuida el planeta"
        />

        <meta
          property="og:description"
          content="Registra tus reciclajes, gana puntos y contribuye al medio ambiente."
        />
      </Head>

      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <HomeProfileHeader />
          <HomeUserSummary />
          <HomeRankingCard />
          <HomeRecyclingCard />
          <HomeImpactStats />
          <HomeProductCard />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    gap: theme.spacing.md,
  },
});
