import React from "react";
import { Button, Text } from "./styles";

const ButtonSmall = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <Text>{">"}</Text>
    </Button>
  );
};

export { ButtonSmall };
