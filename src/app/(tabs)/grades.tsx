import { StyleSheet, Text, View } from "react-native";

export default function Grades() {
  return (
    <View style={styles.container}>
      <Text>Your grades</Text>
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
