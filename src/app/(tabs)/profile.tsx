import Head from "expo-router/head";

import { ScrollView, StyleSheet, View } from "react-native";

import ProfileActions from "@/components/ProfileActions";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileRanking from "@/components/ProfileRanking";
import ProfileStreakCard from "@/components/ProfileStreakCard";
import ProfileUserSummary from "@/components/ProfileUserSummary";
import ProfileWishlist from "@/components/ProfileWishlist";

import { theme } from "../../constants/theme";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Mi cuenta | Ecogrupo</title>
        <meta
          name="description"
          content="Consulta tu perfil, tus puntos y tu actividad de reciclaje en Ecogrupo."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <ProfileHeader />
          <ProfileUserSummary />
          <ProfileActions />
          <ProfileStreakCard />
          <ProfileRanking />
          <ProfileWishlist />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.lg,
  },
});
