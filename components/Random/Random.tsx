import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

type RandomProps = {
  items: string[];
};

const Random: React.FC<RandomProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handlePress = () => {
    if (!items || items.length === 0) return;
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Random</ThemedText>
      <Button title="Sortear item" onPress={handlePress} />
      {selectedItem !== null && (
        <ThemedText style={styles.text}>
          Item sorteado: {selectedItem}
        </ThemedText>
      )}
    </ThemedView>
  );
};

export default Random;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
    button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
