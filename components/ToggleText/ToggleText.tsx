import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

const ToggleText: React.FC = () => {
  const [showFirstText, setShowFirstText] = useState(true);

  const handleToggle = () => {
    setShowFirstText((prev) => !prev);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='subtitle'>
        {showFirstText ? 'Olá, Ex Machiner!' : 'Tchau, Ex Machiner!'}
      </ThemedText>
      <Button title="Alternar Texto" onPress={handleToggle} />
    </ThemedView>
  );
};

export default ToggleText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});
