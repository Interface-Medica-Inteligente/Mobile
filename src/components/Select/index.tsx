import React, { useEffect, useMemo, useState } from "react";
import { Text } from "react-native";
import {
  Icon,
  ItemContainer,
  ItemTitle,
  ModalContainer,
  SelectContainer,
  SelectedText,
} from "./styles";

const chevronDown = require("../../assets/chevron-down.png");
const chevronUp = require("../../assets/chevron-up.png");

const Select = ({ data = [], value, onChange }) => {
  const [opened, setOpened] = useState(false);

  const handleOpenClose = () => {
    setOpened(!opened);
  };

  const currentKey = data.find((item) => item.key === value);

  return (
    <>
      <SelectContainer onPress={handleOpenClose} selected={!!value || opened}>
        <SelectedText selected={!!value}>
          {currentKey ? currentKey.label : "Select"}
        </SelectedText>
        <Icon source={opened ? chevronDown : chevronUp} />
      </SelectContainer>
      {opened && (
        <ModalContainer>
          {data.map((item) => {
            const onPress = () => {
              onChange(item.key);
              setOpened(false);
            };

            return (
              <ItemContainer key={item.key} onPress={onPress}>
                <ItemTitle>{item.label}</ItemTitle>
              </ItemContainer>
            );
          })}
        </ModalContainer>
      )}
    </>
  );
};

export { Select };
