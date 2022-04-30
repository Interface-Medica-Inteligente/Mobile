import React, { useEffect, useState } from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "./styles";

type Props = TextInputProps & { error?: boolean };

const Input = ({ error, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [borderColor, setBorderColor] = useState("rgba(0, 206, 200, 0.3)");

  useEffect(() => {
    if (error) {
      setBorderColor("red");
      return;
    }
    if (isFocused) {
      setBorderColor("rgba(0, 206, 200, 1)");
      return;
    }
    setBorderColor("rgba(0, 206, 200, 0.3)");
  }, [error, isFocused]);

  return (
    <TextInput
      {...rest}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      borderColor={borderColor}
    />
  );
};

export { Input };
