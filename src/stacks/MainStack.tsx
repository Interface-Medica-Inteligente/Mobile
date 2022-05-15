import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Prontuario from "../screens/Prontuario";
import Receita from "../screens/Receita";
import Laudo from "../screens/Laudo";
import Home from "../screens/Home";
import { Header } from "../components/Header";

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Prontuario: undefined;
  Receita: undefined;
  Laudo: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Prontuario" component={Prontuario} />
      <Stack.Screen name="Receita" component={Receita} />
      <Stack.Screen name="Laudo" component={Laudo} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
