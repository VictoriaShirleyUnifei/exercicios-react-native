/* 1. Crie um componente funcional chamado "Greeting" 
que renderiza uma mensagem de saudação. 
Adicione uma estilização básica do componente, com style. */

import React from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export default function Greeting() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Saudação(Function):</ThemedText>
      <ThemedText>Olá, Ex Machiner! 👋</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20
  },
});
