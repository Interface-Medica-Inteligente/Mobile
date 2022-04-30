import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  padding: 0px 20px;
  align-items: center;
  height: 60px;
  margin: 10px 0px;
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 10px;
  color: #000;
`;
