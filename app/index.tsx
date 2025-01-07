import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.background}
    >
      <Image source={require('./pomodoro.png')}/>
      <View style={styles.actions}/>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#01080E',
    gap: 40
  },
  actions: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480'
  }
})