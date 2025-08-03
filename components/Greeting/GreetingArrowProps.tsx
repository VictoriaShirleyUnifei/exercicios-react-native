import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

type GreetingProps = {
  name: string;
  age: number;
};

const GreetingArrowProps: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Saudação:</ThemedText>
      <ThemedText>Olá, {name}! Você é uma Ex Machiner de {age} anos! 👋</ThemedText>
    </ThemedView>
  );
};

export default GreetingArrowProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
});
