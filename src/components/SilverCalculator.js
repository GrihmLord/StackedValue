// SilverCalculator.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SilverCalculator = () => {
  const [grams, setGrams] = useState('');
  const [kilograms, setKilograms] = useState('');
  const [silverValue, setSilverValue] = useState(0);

  const calculateSilverValue = () => {
    // Convert input to numbers
    const gramsValue = parseFloat(grams || 0);
    const kilogramsValue = parseFloat(kilograms || 0);

    // Calculate the total silver value
    const totalSilverValue = (gramsValue / 1000 + kilogramsValue) * 22.77;

    setSilverValue(totalSilverValue.toFixed(2)); // Limit to two decimal places
  };

  return (
    <View style={styles.container}>
      <Text>Enter total number of grams:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Grams"
        keyboardType="numeric"
        value={grams}
        onChangeText={(text) => setGrams(text)}
      />

      <Text>Enter total number of kilograms:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Kilograms"
        keyboardType="numeric"
        value={kilograms}
        onChangeText={(text) => setKilograms(text)}
      />

      <Button title="Calculate Silver Value" onPress={calculateSilverValue} />

      <Text>Total Silver Value: $ {silverValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 5,
    width: 200,
  },
});

export default SilverCalculator;
