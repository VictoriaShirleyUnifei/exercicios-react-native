import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

type CheckTextProps = {
  text: string;
};

const CheckText: React.FC<CheckTextProps> = ({ text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <Checkbox
        value={checked}
        onValueChange={setChecked}
        color={checked ? '#3498db' : undefined} 
        style={styles.checkbox}
      />
      <ThemedText style={[checked && styles.checked]}>{text}</ThemedText>
    </ThemedView>
  );
};

export default CheckText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
