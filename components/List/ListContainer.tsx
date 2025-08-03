import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ListItem } from "./ListItem";

export default function ListContainer() {
  const movies = [
    "Todos Menos Você",
    "Belo Desastre",
    "Wicked",
    "Cinderela",
    "Upgrade - As Cores do Amor",
    "A Outra Zoey",
    "Diário de Uma Paixão",
    "A Fera",
    "Um Dia",
    "Chefes de Estado",
    "Questão de Tempo",
    "Meu Amor em Oxford",
  ];
  return (
    <View>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Filmes</ThemedText>
      </View>

      <View>
        {movies.map((movie, index) => (
          <ListItem key={index} index={index} name={movie} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 20
  },
});
