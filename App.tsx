import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack, { RootStackParamList } from "./src/stacks/MainStack";

export default function App() {
  const [initialPage, setInitialPage] =
    useState<keyof RootStackParamList>("Onboarding");

  return (
    <NavigationContainer>
      <MainStack initialPage={initialPage} />
    </NavigationContainer>
  );
}
