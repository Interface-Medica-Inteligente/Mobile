import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack, { RootStackParamList } from "./src/stacks/MainStack";
import { Platform, UIManager } from "react-native";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  const [initialPage, setInitialPage] =
    useState<keyof RootStackParamList>("Onboarding");

  return (
    <NavigationContainer>
      <MainStack initialPage={initialPage} />
    </NavigationContainer>
  );
}
