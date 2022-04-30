import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 70.594436310395317%;
  height: 9.44%;
  align-self: center;
  padding: 10px;
  margin: 20px 0px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  color: #FFF;
  border-radius: 73px;
`;

export const Text = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
`;