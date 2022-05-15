import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding-top: 15%;
`

export const DimissisKeyboard = styled.Pressable`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Authentication = styled.ScrollView`
  width: 85%;
  margin-top: 15%;
  flex: 1;
  align-self: center;
`

export const PaginationButton = styled.TouchableOpacity`
  width: 311px;
  height: 63px;
  color: #fff;
  border-radius: 5px;
  background-color: #4ecf72;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
`

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