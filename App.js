import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [etanol, setEtanol] = useState('');
  const [resultado, setResultado] = useState('');
  const [image, setImage] = useState(null);

  function calcular() {
    if (!gasolina || !etanol) {
      setResultado('Informe os valores de gasolina e etanol');
      setImage('')
      return;
    }

    const valorGasolina = parseFloat(gasolina);
    const valorEtanol = parseFloat(etanol);

    if (valorEtanol <= 0.7 * valorGasolina) {
      setResultado('É mais vantajoso abastecer com etanol');
      setImage(require('./assets/etanol.png'));
    } else {
      setResultado('É melhor abastecer com gasolina');
      setImage(require('./assets/gasolina.png'));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor da gasolina:</Text>
        <TextInput
          style={styles.input}
          value={gasolina}
          onChangeText={(value) => setGasolina(value)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Valor do etanol:</Text>
        <TextInput
          style={styles.input}
          value={etanol}
          onChangeText={(value) => setEtanol(value)}
          keyboardType="numeric"
        />
        <Text style={styles.button} onPress={calcular}>
          Calcular
        </Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{resultado}</Text>
        {image && <Image source={image} style={styles.image} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
