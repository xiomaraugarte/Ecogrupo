import { useLocalSearchParams, useRouter } from "expo-router";
import Head from "expo-router/head";
import { useEffect, useRef, useState } from "react";

import { ScrollView, StyleSheet, View } from "react-native";

import ProfileActions from "@/components/ProfileActions";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileRanking from "@/components/ProfileRanking";
import ProfileStreakCard from "@/components/ProfileStreakCard";
import ProfileUserSummary from "@/components/ProfileUserSummary";
import ProfileWishlist from "@/components/ProfileWishlist";

import { theme } from "../../constants/theme";

export default function Profile() {
  const router = useRouter();
  const { section } = useLocalSearchParams<{ section?: string }>();

  const scrollRef = useRef<ScrollView>(null);
  const [rankingY, setRankingY] = useState<number | null>(null);

  useEffect(() => {
    if (section !== "ranking" || rankingY === null) {
      return;
    }

    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({
        y: Math.max(0, rankingY - theme.spacing.md),
        animated: true,
      });

      router.setParams({ section: "" });
    }, 300);

    return () => clearTimeout(timer);
  }, [section, rankingY, router]);

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
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <ProfileHeader />
          <ProfileUserSummary />
          <ProfileActions />
          <ProfileStreakCard />

          <View
            onLayout={(event) => {
              setRankingY(event.nativeEvent.layout.y);
            }}
          >
            <ProfileRanking />
          </View>

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