import { IContext } from "@/app"
import { Pressable, StyleSheet, Text } from "react-native"

interface ContextButtonProps {
    active: boolean
    onPress: (item: IContext) => void
    item: IContext
}

export const ContextButton = ({ active, onPress, item } : ContextButtonProps) => {
    return (<Pressable
        style={[
            active ? styles.contextButtonActive : null
        ]}
        onPress={() => onPress(item)}
    >
        <Text style={styles.contextButtonText}>
            {item.display}
        </Text>
    </Pressable>)
}

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  contextButtonText: {
    padding: 8,
    color: '#FFF',
    fontSize: 13
  }
})