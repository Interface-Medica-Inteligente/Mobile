import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{
  secondary?: boolean;
  loading?: boolean;
}>`
  width: 70%;
  height: 52px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 20px 0px;
  background-color: ${({ secondary, loading }) => {
    if (loading) {
      return "transparent";
    }
    if (secondary) {
      return "#142585";
    }
    return "#00CEC8";
  }};
  border-radius: 26px;
  color: #fff;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;

export const Indicator = styled.ActivityIndicator``;
