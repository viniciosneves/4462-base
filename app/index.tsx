import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.background}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#01080E'
  },
  text: {
    color: '#fff'
  }
})