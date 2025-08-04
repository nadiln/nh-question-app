import React, { use, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function CalculatorScreen() {
  const { input1, setInput1, input2, setInput2, total, handleAddNumbers, clearCalculator } = useCalculatorScreen();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Adding Two Numbers</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Input 1</Text>
          <TextInput
            style={styles.input}
            value={input1}
            onChangeText={setInput1}
            placeholder="Enter first number"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Input 2</Text>
          <TextInput
            style={styles.input}
            value={input2}
            onChangeText={setInput2}
            placeholder="Enter second number"
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddNumbers}>
          <Text style={styles.buttonText}>Add Numbers</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>
            Total: {total !== null ? total.toString() : '-'}
          </Text>
        </View>

        <TouchableOpacity style={styles.clearButton} onPress={clearCalculator}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//Custom hook which handles logic for the Calculator screen
function useCalculatorScreen() {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);

  const handleAddNumbers = () => {
    if (input1.trim() === '' || input2.trim() === '') {
      Alert.alert('Error', 'Please enter both numbers');
      return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Error', 'Please enter valid numbers');
      return;
    }

    const sum = num1 + num2;
    setTotal(sum);
  };

  const clearCalculator = () => {
    setInput1('');
    setInput2('');
    setTotal(null);
  };

  return {
    input1,
    setInput1,
    input2,
    setInput2,
    total,
    handleAddNumbers,
    clearCalculator,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});