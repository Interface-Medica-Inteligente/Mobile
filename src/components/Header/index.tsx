import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton } from "../IconButton";
import { Container, Content, Title } from "./styles";

const logout = require("../../assets/log-out.png");

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container insets={insets}>
      <Content>
        <Title>Olá, Isaac</Title>
        <IconButton icon={logout} />
      </Content>
    </Container>
  );
};

export { Header };
