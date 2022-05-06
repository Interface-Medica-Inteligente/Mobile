import styled from "styled-components/native";

export const Container = styled.View`
  z-index: 99;
`;

export const SelectContainer = styled.TouchableOpacity<{ selected: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0px 20px;
  height: 60px;
  border-width: 1px;
  border-color: ${({ selected }) =>
    selected ? "#00CEC8" : "rgba(0, 206, 200, 0.2)"};
  border-radius: 10px;
`;

export const SelectedText = styled.Text<{ selected: boolean }>`
  height: 16px;
  color: ${({ selected }) => (!selected ? "#828282" : "#000")};
`;

export const ModalContainer = styled.View`
  position: absolute;
  padding: 12px;
  background-color: #fff;
  border-width: 1px;
  border-color: #00cec8;
  border-radius: 10px;
  top: 70px;
  width: 100%;
`;

export const ItemContainer = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 20px;
  background-color: ${({ selected }) =>
    selected ? "rgba(0, 206, 200, 0.1)" : "transparent"};
  border-radius: 10px;
`;

export const ItemTitle = styled.Text``;

export const Icon = styled.Image``;
