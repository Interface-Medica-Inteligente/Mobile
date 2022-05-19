import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 15% 0px;
`;

export const DimissisKeyboard = styled.Pressable`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const Authentication = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    width: "85%",
    paddingTop: 50,
    paddingBottom: 100,
  },
})``;

export const PaginationButton = styled.TouchableOpacity`
  width: 311px;
  height: 63px;
  color: #fff;
  border-radius: 5px;
  background-color: #4ecf72;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
`;

export const MetricsPacient = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
