import React from "react";
import { Colors, Container, StatusBar } from "./src/styles";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";

import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  let [fontsLoaded] = useFonts({
    Arial: require("./assets/fonts/arial.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <StatusBar backgroundColor={Colors.backgroundColor} />
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </Container>
      </PersistGate>
    </Provider>
  );
}
