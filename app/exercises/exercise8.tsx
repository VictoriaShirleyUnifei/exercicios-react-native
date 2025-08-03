import CheckText from "@/components/CheckText/CheckText";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Exercise8() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title'>Checkbox</ThemedText>
      <View>
        <CheckText text="Estudar React Native" />
        <CheckText text="Fazer exercícios" />
        <CheckText text="Assistir aula" />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: "center", 
    alignItems: "center",
    gap: 20
 },
});
