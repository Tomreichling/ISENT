import { StyleSheet, Text, View } from "react-native";

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text>Your agenda</Text>
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
