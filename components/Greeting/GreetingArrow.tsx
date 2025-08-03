import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const GreetingArrow: React.FC = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Saudação(Arrow Function):</ThemedText>
      <ThemedText>Olá, Ex Machiner! 👋</ThemedText>
    </ThemedView>
  );
};

export default GreetingArrow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
});
