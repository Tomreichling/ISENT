import { StyleSheet, Text, View } from "react-native";

export default function Notes() {
  return (
    <View style={styles.container}>
      <Text>Notes ici !</Text>
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
