import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import GarageScreen from "../screens/Garage";
import DetailsScreen from "../screens/Details";
import { CarProps } from "../models/car";

const { Navigator, Screen } =
  createSharedElementStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Garage: undefined;
  Details: { car: CarProps };
};

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
        sharedElements={(route) => {
          const { car } = route.params;
          return [{ id: `item.${car.id}.photo`, resize: "auto" }];
        }}
      />
    </Navigator>
  );
}
