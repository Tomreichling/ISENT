import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme";

interface TitleElement {
  label: string;
}

export default function Title({ label }: TitleElement) {
  return <Text style={styles.title}>{label}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
