import { Image } from "expo-image";
import { StyleSheet, useColorScheme } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const theme = useColorScheme();

  const banner =
    theme === "dark"
      ? require("@/assets/images/banner-dark.png")
      : require("@/assets/images/banner-light.png");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#c9f4f5", dark: "#267abe" }}
      headerImage={<Image source={banner} style={styles.banner} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Aqui você poderá visualizar e testar os componentes desenvolvidos em
          TypeScript (.tsx) durante os exercícios.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Como funciona?</ThemedText>
        <ThemedText>
          1. Acesse a aba "Explore" para ver a lista de exercícios disponíveis.
        </ThemedText>
        <ThemedText>
          2. Toque em um exercício para abrir a tela correspondente.
        </ThemedText>
        <ThemedText>
          3. Veja o componente renderizado e interaja com ele (se aplicável).
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">💡 Dica:</ThemedText>
        <ThemedText>
          Use este app para testar, revisar e demonstrar seus componentes!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  banner: {
    height: 280,
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
