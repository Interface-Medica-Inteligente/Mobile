import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00cec8;
  padding-top: 20%;
`;

export const DimissisKeyboard = styled.Pressable`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 15%;
  margin-bottom: 20%;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: #00cec8;
`;

export const Logo = styled.View``;

export const Authentication = styled.ScrollView`
  width: 100%;
  margin-top: 15%;
  padding: 0% 8%;
  flex: 1;
  align-self: center;
  background-color: #fff;
  border-top-left-radius: 53px;
`;

interface AuthInputProps {
  invalid?: boolean;
}

export const AuthInput = styled.TextInput<AuthInputProps>`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  background: #f2f3f7;
  border-radius: 45px;
  color: #a1a4b2;
  border: ${(props: AuthInputProps) =>
    props.invalid ? "2px solid orange" : "0.15px solid #a1a4b2"};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-left: 20px;
`;

export const Error = styled.Text`
  align-self: flex-start;
  margin-left: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #ff6a51;
`;

export const ForgotPassword = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #a1a4b2;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  height: 18%;
  max-height: 70px;
  background-color: #4ecf72;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 21.5%;
  height: 63px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButtonText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #00cec8;
  margin-left: 3px;
`;

export const OtherAuthentications = styled.View`
  bottom: 10px;
  align-items: center;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #4ecf72;
`;

export const ExternalAuthentications = styled.View`
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
`;

interface BrandIcon {
  background?: string;
}

export const OtherAuthentication = styled.TouchableOpacity<BrandIcon>`
  width: 47px;
  height: 47px;
  border-radius: ${47 / 2}px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  background: ${(props: BrandIcon) =>
    props.background ? props.background : "white"};
  margin-left: 20px;
  margin-right: 20px;
`;

export const BrandLogo = styled.Image``;
