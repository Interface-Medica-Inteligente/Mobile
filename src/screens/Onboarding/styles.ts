import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  background-color: white;
`

export const Container = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
