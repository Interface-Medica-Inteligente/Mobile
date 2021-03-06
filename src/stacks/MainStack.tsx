import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Prontuario from "../screens/Prontuario";
import Receita from "../screens/Receita";
import Laudo from "../screens/Laudo";
import Home from "../screens/Home";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import doctorSelector from "../selectors/doctorSelector";
import { SearchModal } from "../components/SearchModal";
import dialogSelector from "../selectors/dialogSelector";
import { Actions as DialogActions } from "../reducers/dialog";

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Prontuario: undefined;
  Receita: undefined;
  Laudo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(doctorSelector.isLogged);
  const isVisible = useSelector(dialogSelector.isVisible);
  const type = useSelector(dialogSelector.getType);

  const handleClose = () => {
    dispatch(DialogActions.ui.closeDialog());
  };

  return (
    <>
      <Stack.Navigator
        initialRouteName="Prontuario"
        screenOptions={{
          header: () => <Header />,
          cardStyle: {
            flex: 1,
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
        {isLogged && <Stack.Screen name="Prontuario" component={Prontuario} />}
        {isLogged && <Stack.Screen name="Receita" component={Receita} />}
        {isLogged && <Stack.Screen name="Laudo" component={Laudo} />}
        {isLogged && <Stack.Screen name="Home" component={Home} />}
      </Stack.Navigator>
      <SearchModal visible={isVisible} type={type} onClose={handleClose} />
    </>
  );
};

export default MainStack;
