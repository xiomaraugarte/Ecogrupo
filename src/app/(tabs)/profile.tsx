
import { ScrollView, StyleSheet, View } from 'react-native';

import ProfileActions from '@/components/ProfileActions';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileRanking from '@/components/ProfileRanking';
import ProfileStreakCard from '@/components/ProfileStreakCard';
import ProfileUserSummary from '@/components/ProfileUserSummary';
import ProfileWishlist from '@/components/ProfileWishlist';

import { theme } from '../../constants/theme';

export default function Profile() {
  return (
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
