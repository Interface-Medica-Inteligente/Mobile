import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "./styles";

type Props = TextInputProps & { error?: boolean };

const Input = ({ error, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      {...rest}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
      hasError={!!error}
      placeholderTextColor="#828282"
    />
  );
};

export { Input };
