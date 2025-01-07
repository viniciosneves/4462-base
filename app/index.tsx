import { ContextButton } from "@/components/ContextButton";
import { FokusButton } from "@/components/FokusButton";
import { IconPause, IconPlay } from "@/components/Icons";
import { Timer } from "@/components/Timer";
import { useRef, useState } from "react";
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

export interface IContext {
  id: string
  initialValue: number
  image: NodeRequire
  display: string
}

export default function Index() {

  const [context, setContext] = useState(pomodoro[0])
  const [timerRuning, setTimerRuning] = useState<boolean>(false)
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleContextChange = (newContext: IContext) => {
    setContext(newContext);
    setSeconds(newContext.initialValue)
  };

  function clear() {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRuning(false)
    }
  }

  function toogleTimer() {
    if (timerRef.current) {
      clear()
      return
    }
    setTimerRuning(true)
    const id = setInterval(() => {
      setSeconds((oldValue) => {
        if (oldValue === 0) {
          clear();
          setSeconds(context.initialValue);
          return context.initialValue;
        }
        return oldValue - 1;
      });
    }, 1000);
    timerRef.current = id; 
  }

  return (
    <View
      style={styles.background}
    >
      <Image source={context.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((item) => (<ContextButton
            key={item.id}
            active={item.id === context.id}
            onPress={handleContextChange}
            item={item}
          />))}
        </View>
        <Timer time={seconds} />
        <FokusButton 
          title={(timerRuning) ? 'Pausar' : 'Começar'} 
          icon={(timerRuning) ? <IconPause /> : <IconPlay />} 
          onPress={toogleTimer} 
        />
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
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#B6B6B6CC',
    fontSize: 15,
    textAlign: 'center'
  }
})