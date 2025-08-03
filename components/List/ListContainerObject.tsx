import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ListItemObject } from "./ListItemObject";

type MoviesProps = {
  name: string;
  year: number;
  rate: number;
};

export default function ListContainerObject() {
  const movies: MoviesProps[] = [
    { name: "Todos Menos Você", year: 2023, rate: 4.2 },
    { name: "Belo Desastre", year: 2023, rate: 1.5 },
    { name: "Wicked", year: 2024, rate: 4.6 },
    { name: "Cinderela", year: 2021, rate: 1.2 },
    { name: "Upgrade - As Cores do Amor", year: 2024, rate: 4.0 },
    { name: "A Outra Zoey", year: 2023, rate: 3.8 },
    { name: "Diário de Uma Paixão", year: 2004, rate: 4.8 },
    { name: "A Fera", year: 2011, rate: 3.2 },
    { name: "Um Dia", year: 2011, rate: 3.0 },
    { name: "Chefes de Estado", year: 2025, rate: 4.0 },
    { name: "Questão de Tempo", year: 2013, rate: 4.5 },
    { name: "Meu Amor em Oxford", year: 2025, rate: 4.3 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Filmes</ThemedText>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ListItemObject
            index={index}
            name={item.name}
            rate={item.rate}
            year={item.year}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
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
    alignItems: "center",
    gap: 8,
    padding: 20
  },
});
