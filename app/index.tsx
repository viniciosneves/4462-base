import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.background}
    >
      <Image source={require('./pomodoro.png')}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>
              Foco
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>
              Pausa curta
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>
              Pausa longa
            </Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>
          25:00
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
    padding: 8
  },
  contextButtonText: {
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