import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function TabTwoScreen() {
  const router = useRouter();

  const exercises = [
    { title: "Exercício 1 - Greeting", route: "/exercises/exercise1" },
    { title: "Exercício 2 - Greeting com Name e Age", route: "/exercises/exercise2"},
    { title: "Exercício 3 - Lista de Strings", route: "/exercises/exercise3"},
    { title: "Exercício 4 - Lista de Objetos", route: "/exercises/exercise4"},
    { title: "Exercício 5 - Countdown", route: "/exercises/exercise5"},
    { title: "Exercício 6 - Random", route: "/exercises/exercise6"},
    { title: "Exercício 7 - ToggleText", route: "/exercises/exercise7"},
    { title: "Exercício 8 - CheckText", route: "/exercises/exercise8"},
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText style={{ marginBottom: 16 }}>
        Escolha um exercício para visualizar na prática! Clique em um item da
        lista para abrir a tela correspondente.
      </ThemedText>

     {exercises.map((item) => (
      <TouchableOpacity
        key={item.route}
        onPress={() => router.push(item.route as any)}
        style={styles.item}
      >
        <ThemedText>▶️ {item.title}</ThemedText>
      </TouchableOpacity>
    ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  item: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
});
