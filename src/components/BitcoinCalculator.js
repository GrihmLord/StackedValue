// BitcoinCalculator.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BitcoinCalculator = () => {
  const [silverValue, setSilverValue] = useState('');
  const [bitcoinValue, setBitcoinValue] = useState(0);

  const calculateBitcoinValue = () => {
    // Convert input to numbers
    const silverValueFloat = parseFloat(silverValue || 0);
    const bitcoinPrice = 28294.00; // Replace with actual price

    // Calculate the Bitcoin value
    const totalBitcoinValue = silverValueFloat / bitcoinPrice;

    setBitcoinValue(totalBitcoinValue.toFixed(8)); // Limit to eight decimal places
  };

  return (
    <View style={styles.container}>
      <Text>Enter total silver value (USD):</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Silver Value"
        keyboardType="numeric"
        value={silverValue}
        onChangeText={(text) => setSilverValue(text)}
      />

      <Button title="Calculate Bitcoin Value" onPress={calculateBitcoinValue} />

      <Text>Total Bitcoin Value: {bitcoinValue} BTC</Text>
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

export default BitcoinCalculator;
