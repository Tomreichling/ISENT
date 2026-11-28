import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme";

interface CardElement {
  topLeft: string;
  topRight: string;
  label: string;
  bottomLeft: string;
  bottomRight: string;
}

export default function Card({
  topLeft,
  topRight,
  label,
  bottomLeft,
  bottomRight,
}: CardElement) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.topLeft}>{topLeft}</Text>
        <Text style={styles.topRight}>{topRight}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
          {label}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.footerRow}>
        <Text style={styles.bottomLeft}>{bottomLeft}</Text>
        <Text style={styles.bottomRight}>{bottomRight}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.secondary,
    borderRadius: 24,
    paddingHorizontal: 26,
    paddingVertical: 24,
    width: "100%",
    shadowColor: theme.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topLeft: {
    color: "rgba(255, 255, 255, 0.78)",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  topRight: {
    color: "rgba(255, 255, 255, 0.78)",
    fontSize: 14,
    fontWeight: "500",
  },
  body: {
    marginTop: 28,
    marginBottom: 24,
  },
  label: {
    color: theme.white,
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    marginBottom: 20,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLeft: {
    color: theme.white,
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  bottomRight: {
    color: "rgba(255, 255, 255, 0.35)",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
