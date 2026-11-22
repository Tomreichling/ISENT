import { StyleSheet, Text, View } from "react-native";

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text>Agenda ici !</Text>
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
