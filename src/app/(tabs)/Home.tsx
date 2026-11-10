import HomeBottomNavigation from '@/components/HomeBottomNavigation';
import HomeImpactStats from '@/components/HomeImpactStats';
import HomeProductCard from '@/components/HomeProductCard';
import HomeProfileHeader from '@/components/HomeProfileHeader';
import HomeRankingCard from '@/components/HomeRankingCard';
import HomeRecyclingCard from '@/components/HomeRecyclingCard';
import HomeUserSummary from '@/components/HomeUserSummary';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../constants/theme';

export default function Home() {
    return (
        <View style={styles.container}>
            <HomeProfileHeader />
            <HomeUserSummary />
            <HomeRankingCard />
            <HomeRecyclingCard />
            <HomeImpactStats />
            <HomeProductCard />
            <HomeBottomNavigation />
            {/* COMPONENTS: add each one right above this line */}
        </View>
    );
}
const styles = StyleSheet.create({
    // Your whole view. Select your frame in Figma.
    container: {
        flex: 1,
        gap: theme.spacing.md // Auto layout → gap between blocks → theme.spacing
        // Add here any other setting your frame needs (alignItems, justifyContent...)
    },
});