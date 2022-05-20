import React from "react";
import { Button, Image } from "./styles";

const chevronRight = require("../../assets/chevron-right.png");

const ButtonSmall = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <Image source={chevronRight} />
    </Button>
  );
};

export { ButtonSmall };
