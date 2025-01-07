import { Pressable, StyleSheet, Text } from "react-native"

interface FokusButtonProps {
  onPress: () => void
  title: string
  icon?: React.JSX.Element
}

export const FokusButton = ({ onPress, title, icon } : FokusButtonProps) => {
    return (<Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
            {icon} {title}
        </Text>
    </Pressable>)
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    width: '100%',
    borderRadius: 35,
    padding: 8,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#021123',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 27
  }
})