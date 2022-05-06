import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Prontuario from "../screens/Prontuario";
import Receita from "../screens/Receita";
import Home from "../screens/Home";

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Prontuario: undefined;
  Receita: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Prontuario" component={Prontuario} />
      <Stack.Screen name="Receita" component={Receita} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
