import React, { useEffect, useState } from "react";
import { TextInputProps } from "react-native";
import { ButtonProps } from "react-native-elements";
import { Button, Text } from "./styles";

type Props = ButtonProps & { secondary?: boolean; text?: string };

const ButtonLarge = ({ secondary, text, ...rest }: Props) => {

  return (
    <Button {...rest} secondary={secondary}>
      <Text>{text}</Text>
    </Button>
  );
};

export { ButtonLarge };
