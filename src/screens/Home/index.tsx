import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../stacks/MainStack";

import { Container, Scroller, Text } from "./styles";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <Scroller>
      <Container>
        <Text>Inicio</Text>
      </Container>
    </Scroller>
  );
};

export default Home;
