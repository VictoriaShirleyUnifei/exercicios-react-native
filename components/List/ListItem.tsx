import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ListItemProps = {
    index: number;
    name: string;
}

export const ListItem: React.FC<ListItemProps> = ({ index, name }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.index}>{index + 1}.</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#e0e0e0",
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  index: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  name: {
    fontSize: 18,
    color: "#222",
  },
});