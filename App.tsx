import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainStack, { RootStackParamList } from "./src/stacks/MainStack";
import { Platform, UIManager } from "react-native";
import { navigationRef } from "./src/services/navigationService";

import store from "./src/store";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </React.StrictMode>
  );
}
