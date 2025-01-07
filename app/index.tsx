import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('./short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('./long.png'),
    display: 'Pausa longa'
  }
]

interface IContext {
  id: string
  initialValue: number
  image: NodeRequire
  display: string
}

export default function Index() {

  const [context, setContext] = useState(pomodoro[0])
  const handleContextChange = (newContext: IContext) => {
    setContext(newContext);
  };
  
  return (
    <View
      style={styles.background}
    >
      <Image source={context.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((item) => (<Pressable
            key={item.id}
            style={[
              item.id === context.id ? styles.contextButtonActive : null
            ]}
            onPress={() => handleContextChange(item)}
          >
            <Text style={styles.contextButtonText}>
              {item.display}
            </Text>
          </Pressable>))}
        </View>
        <Text style={styles.timer}>
          {new Date(context.initialValue * 1000).toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  contextButtonText: {
    padding: 8,
    color: '#FFF',
    fontSize: 13
  },
  actions: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  timer: {
    color: '#FFF',
    fontSize: 54,
    textAlign: 'center'
  },
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
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#B6B6B6CC',
    fontSize: 15,
    textAlign: 'center'
  }
})