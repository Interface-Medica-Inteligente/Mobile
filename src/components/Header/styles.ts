import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View<{ insets: EdgeInsets }>`
  padding-top: ${({ insets }) => insets.top}px;
  background-color: #00cec8;
  border-bottom-right-radius: 40px;
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px 40px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
`;
