import styled from "styled-components/native";

export const TextInput = styled.TextInput<{
  isFocused: boolean;
  hasError: boolean;
}>`
  padding: 0px 20px;
  align-items: center;
  height: 60px;
  margin: 10px 0px;
  border-width: 1px;
  border-color: ${({ isFocused, hasError }) => {
    if (hasError) {
      return "red";
    }
    if (isFocused) {
      return "rgba(0, 206, 200, 1)";
    }
    return "rgba(0, 206, 200, 0.3)";
  }};
  border-radius: 10px;
  color: #000;
`;
