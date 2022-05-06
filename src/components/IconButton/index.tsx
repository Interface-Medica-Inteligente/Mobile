import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { Button } from "./styles";

type Props = TouchableOpacityProps & {
  icon: ImageSourcePropType;
};

const IconButton = ({ icon, ...rest }: Props) => {
  return (
    <Button {...rest}>
      <Image source={icon} />
    </Button>
  );
};

export { IconButton };
