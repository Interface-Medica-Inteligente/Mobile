import React from "react";
import { ViewStyle } from "react-native";
import { Circle, Container, Content, RadioContainer, Title } from "./styles";

type Item = { key: string; label: any };

interface Props {
  containerStyle: ViewStyle;
  data: Item[];
  value: Item | null;
  onChange: (item: Item) => void;
}

const RadioButton = ({ containerStyle, data = [], value, onChange }: Props) => {
  const renderRadio = (item: Item) => {
    const active = value?.key === item.key;
    const onPress = () => {
      onChange(item);
    };

    return (
      <Content disabled={active} onPress={onPress} key={item.key}>
        <Radio active={active} />
        <Title>{item.label}</Title>
      </Content>
    );
  };

  return <Container style={containerStyle}>{data.map(renderRadio)}</Container>;
};

const Radio = ({ active }: { active: boolean }) => {
  return (
    <RadioContainer>
      <Circle active={active} />
    </RadioContainer>
  );
};

export { RadioButton };
