import React from "react";
import { StyleSheet } from "react-native";
import { Collapsible } from "../Collapsible";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

type ListItemProps = {
  index: number;
  name: string;
  year: number;
  rate: number;
};

export const ListItemObject: React.FC<ListItemProps> = ({
  index,
  name,
  year,
  rate,
}) => {
  return (
    <ThemedView style={styles.itemContainer}>
      <Collapsible title={`${index + 1}. ${name}`}>
        <ThemedText>Ano: {year}</ThemedText>
        <ThemedText>Nota: {rate}</ThemedText>
      </Collapsible>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  index: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
  },
});
  