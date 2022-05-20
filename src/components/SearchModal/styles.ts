import styled from "styled-components/native";

export const Container = styled.View`
  padding: 40px;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
`;

export const RecipeContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-width: 1px;
  border-color: #828282;
  border-radius: 10px;
`;

export const RecipeTitle = styled.Text`
  color: #828282;
`;
