import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const INITIAL_COUNT = 10;

const Countdown: React.FC = () => {
  const [count, setCount] = useState<number>(INITIAL_COUNT);

  useEffect(() => {
    console.log(`Novo valor do contador: ${count}`);
  }, [count]);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      console.log("Botão clicado: decrementando");
    } else {
      setCount(INITIAL_COUNT);
      console.log("Botão clicado: recomeçando");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Countdown</ThemedText>
      <ThemedText style={styles.counter}>{count}</ThemedText>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.6 }, 
        ]}
        onPress={handleDecrement}
        hitSlop={20}
      >
        <ThemedText style={styles.buttonText}>
          {count > 0 ? "Decrementar" : "Recomeçar"}
        </ThemedText>
      </Pressable>
      {count === 0 && <ThemedText>Contagem finalizada!</ThemedText>}
    </ThemedView>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    padding: 20,
  },
  counter: {
    fontSize: 30,
    fontWeight: "bold",
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
  finishedText: {
    marginTop: 20,
    fontSize: 18,
  },
});
