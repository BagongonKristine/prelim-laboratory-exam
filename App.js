import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import Helloworld from "./components/Helloworld";
import Username from "./components/Username";
import Counter from "./components/Counter";

const image = { uri: "https://upload.wikimedia.org/wikipedia/en/7/7d/Mashle_anime_key_visual.png" };


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Helloworld />
          <Username />
          <Counter />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    paddingBottom: 200,
    opacity: 0.9,
  },
  image: {
    flex: 2,
    justifyContent: "center",
  },
});