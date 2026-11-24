import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ShoppingCartSummary from '@/components/ShoppingCartSummary';
import ShoppingCategories from '@/components/ShoppingCategories';
import ShoppingDescription from '@/components/ShoppingDescription';
import ShoppingHeader from '@/components/ShoppingHeader';
import ShoppingProductList from '@/components/ShoppingProductList';

import { theme } from '../../constants/theme';

export default function Shopping() {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top']}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        <ShoppingHeader />
        <ShoppingCategories />
        <ShoppingDescription />
        <ShoppingProductList />
      </ScrollView>

      <ShoppingCartSummary />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.xl,
    flexGrow: 1,
  },
});