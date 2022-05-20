import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 10px;
  margin-right: 20px;
`;

export const RadioContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #828282;
  align-self: flex-start;
`;

export const Circle = styled.View<{ active: boolean }>`
  width: 12px;
  height: 12px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  background-color: #00cec8;
  border-radius: 6px;
`;
