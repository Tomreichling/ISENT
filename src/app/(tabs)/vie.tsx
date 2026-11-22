import { StyleSheet, Text, View } from "react-native";

export default function VIe() {
  return (
    <View style={styles.container}>
      <Text>La vie étudiante ici !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
