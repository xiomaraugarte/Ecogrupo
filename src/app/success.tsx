import SuccessHeader from '@/components/SuccessHeader';
import SuccessInstructions from '@/components/SuccessIns';
import SuccessOrderSummary from '@/components/SuccessOrderSummary';
import SuccessQRCode from '@/components/SuccessQRCode';
import { colors } from '@/constants/colors';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function SuccessScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SuccessHeader />
        <SuccessOrderSummary />
        <SuccessInstructions />
        <SuccessQRCode />
        {/* COMPONENTS: add each one right above this line */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});