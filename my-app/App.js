import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, SetCount] = useState(0)

  const onclick = () => {
    SetCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Text> Cuenta: {count} </Text>
        <TouchableOpacity style={styles.button} onPress={onclick}>
            <Text style={styles.buttonText}>Sumar1</Text>
        </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
