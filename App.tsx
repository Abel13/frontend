import React from "react";
import { Container, StatusBar } from "./src/styles";
import { Provider } from "react-redux";
import { store } from "./src/store";

import Garage from "./src/screens/Garage";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Arial: require("./assets/fonts/arial.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <Provider store={store}>
      <Container>
        <StatusBar />
        <Garage />
      </Container>
    </Provider>
  );
}
