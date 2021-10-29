import React from "react";
import { Colors, Container, StatusBar } from "./src/styles";
import { Provider } from "react-redux";
import { store } from "./src/store";

import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Arial: require("./assets/fonts/arial.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <Provider store={store}>
      <Container>
        <StatusBar backgroundColor={Colors.backgroundColor} />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </Container>
    </Provider>
  );
}
