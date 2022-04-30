import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  padding: 20px;
  margin: 10px 0px;
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 10px;
  color: #000;
`;
