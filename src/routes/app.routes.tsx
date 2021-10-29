import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

export type RootStackParamList = {
  Garage: undefined;
  Details: { car: Car };
};

const { Navigator, Screen } =
  createSharedElementStackNavigator<RootStackParamList>();

import GarageScreen from "../screens/Garage";
import DetailsScreen from "../screens/Details";
import { Car } from "../models/car";

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <Screen name="Garage" component={GarageScreen} />
      <Screen
        name="Details"
        component={DetailsScreen}
        sharedElements={(route, otherRoute, showing) => {
          const { car } = route.params;
          return [{ id: `item.${car.id}.photo`, resize: "auto" }];
        }}
      />
    </Navigator>
  );
}
