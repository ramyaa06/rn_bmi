import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));

      let bmiCategory = '';
      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Fit (Normal Weight)';
      } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
      } else {
        bmiCategory = 'Obese';
      }

      setBmiCategory(bmiCategory);
    } else {
      setBmiResult('Please enter weight and height.');
      setBmiCategory('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.calculateButton} onPress={calculateBMI}>
        <Text style={styles.calculateButtonText}>Calculate BMI</Text>
      </TouchableOpacity>

      {bmiResult !== '' && (
        <View>
          <Text style={styles.resultText}>Your BMI: {bmiResult}</Text>
          <Text style={styles.resultText}>Category: {bmiCategory}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  calculateButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
