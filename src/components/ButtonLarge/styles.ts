import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 52px;
  align-self: center;
  padding: 6px;
  margin: 20px 0px;
  background-color:${({ secondary }) => {
    if (secondary) {
      return  "#142585";
    }
    return "#00CEC8";
  }};
  border-radius: 26px;
  color: #fff;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;
