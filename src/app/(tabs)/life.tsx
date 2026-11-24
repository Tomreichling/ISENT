import { StyleSheet, Text, View } from "react-native";

export default function Life() {
  return (
    <View style={styles.container}>
      <Text>Student Life</Text>
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
