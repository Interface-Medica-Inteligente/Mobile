import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

interface MainStackProps {
  initialPage: keyof RootStackParamList | undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = ({ initialPage }: MainStackProps) => {
  return (
    <Stack.Navigator initialRouteName={initialPage}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
