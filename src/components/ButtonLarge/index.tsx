import React, { useEffect, useState } from "react";
import { TextInputProps } from "react-native";
import { ButtonProps } from "react-native-elements";
import { Button, Text } from "./styles";

type Props = ButtonProps & { cor?: boolean, text?: string };

const ButtonLarge = ({ cor, text, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [bgColor, setBgColor] = useState("#00CEC8");
  const [textbutton, setTextButton] = useState(' ');

  useEffect(() => {
    if (cor) {
      setBgColor("#142585");
      return;
    }
    setBgColor("#00CEC8");

    if (text !== '') {
      setTextButton(text);
    }

  }, [cor, text]);

  return (
    <Button bgColor={bgColor}>
      <Text>{textbutton}</Text>
    </Button>
  );
};

export { ButtonLarge };
