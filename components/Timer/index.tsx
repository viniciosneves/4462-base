import { StyleSheet, Text } from "react-native";

interface TimerProps {
    time: number
}

export const Timer = ({ time }: TimerProps) => {
    const date = new Date(time * 1000);
    return (<Text style={styles.timer}>
        {date.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' })}
    </Text>)
}

const styles = StyleSheet.create({
  timer: {
    color: '#FFF',
    fontSize: 54,
    textAlign: 'center'
  }
})