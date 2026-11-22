import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";

type ButtonsecProps = {
  onPress: () => void;
};

export default function Buttonsec({ onPress }: ButtonsecProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Iniciar Sesión</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderColor: colors.primarySoft,
    borderWidth: 4,
    borderRadius: 16,
    paddingVertical: 12,
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: colors.text },
});
