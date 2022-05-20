import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "./styles";

type Props = TextInputProps & { error?: boolean };

const Input = ({ error, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = (e: any) => {
    setIsFocused(true);
    rest.onFocus && rest.onFocus(e);
  };

  const onBlur = (e: any) => {
    setIsFocused(false);
    rest.onBlur && rest.onBlur(e);
  };

  return (
    <TextInput
      {...rest}
      onFocus={onFocus}
      onBlur={onBlur}
      isFocused={isFocused}
      hasError={!!error}
      placeholderTextColor="#828282"
    />
  );
};

export { Input };
