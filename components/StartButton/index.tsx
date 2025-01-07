import { Pressable, StyleSheet, Text } from "react-native"

export const StartButton = () => {
    return (<Pressable style={styles.button}>
        <Text style={styles.buttonText}>
            Começar
        </Text>
    </Pressable>)
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    width: '100%',
    borderRadius: 35,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 27
  }
})