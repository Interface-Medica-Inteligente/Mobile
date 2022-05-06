import React, { useState } from "react";
import { LayoutAnimation } from "react-native";
import {
  Container,
  Icon,
  ItemContainer,
  ItemTitle,
  ModalContainer,
  SelectContainer,
  SelectedText,
} from "./styles";

const chevronDown = require("../../assets/chevron-down.png");
const chevronUp = require("../../assets/chevron-up.png");

type Item = { key: string; label: any };
interface Props {
  data: Item[];
  value: Item;
  placeholder?: string;
  onChange: (item: Item) => void;
}

const Select = ({ data = [], value, onChange, placeholder }: Props) => {
  const [opened, setOpened] = useState(false);

  const handleOpenClose = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpened(!opened);
  };

  const currentKey = data.find((item) => item.key === value?.key);

  return (
    <Container>
      <SelectContainer onPress={handleOpenClose} selected={!!value || opened}>
        <SelectedText selected={!!value}>
          {currentKey ? currentKey.label : placeholder || "Select"}
        </SelectedText>
        <Icon source={!opened ? chevronDown : chevronUp} />
      </SelectContainer>
      {opened && (
        <ModalContainer>
          {data.map((item) => {
            const onPress = () => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              onChange(item);
              setOpened(false);
            };

            return (
              <ItemContainer
                key={item.key}
                onPress={onPress}
                disabled={item.key === value?.key}
                selected={item.key === value?.key}
              >
                <ItemTitle>{item.label}</ItemTitle>
              </ItemContainer>
            );
          })}
        </ModalContainer>
      )}
    </Container>
  );
};

export { Select };
