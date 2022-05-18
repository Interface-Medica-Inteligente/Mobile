import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, Indicator, Text } from "./styles";

type Props = TouchableOpacityProps & {
  secondary?: boolean;
  text?: string;
  loading?: boolean;
};

const ButtonLarge = ({ secondary, text, loading, ...rest }: Props) => {
  if (loading) {
    return (
      <Button disabled={loading} {...rest} loading={loading}>
        <Indicator />
      </Button>
    );
  }

  return (
    <Button {...rest} secondary={secondary}>
      <Text>{text}</Text>
    </Button>
  );
};

export { ButtonLarge };
