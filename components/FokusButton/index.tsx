import { Pressable, StyleSheet, Text } from "react-native"

interface FokusButtonProps {
  onPress: () => void
  title: string
}

export const FokusButton = ({ onPress, title } : FokusButtonProps) => {
    return (<Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
            {title}
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