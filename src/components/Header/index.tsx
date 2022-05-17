import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { Actions as DoctorActions } from "../../reducers/doctor";
import { IconButton } from "../IconButton";
import { Container, Content, Title } from "./styles";

const logout = require("../../assets/log-out.png");

const Header = () => {
  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(DoctorActions.entities.setDoctor({ id: undefined }));
  };

  return (
    <Container insets={insets}>
      <Content>
        <Title>Olá, Isaac</Title>
        <IconButton onPress={handleLogout} icon={logout} />
      </Content>
    </Container>
  );
};

export { Header };
