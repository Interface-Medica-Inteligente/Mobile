import styled from "styled-components/native";

interface ContainerProps {
  keyboardVisible?: boolean;
}

export const Container = styled.ScrollView<ContainerProps>`
  background-color: #00cec8;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const DimissisKeyboard = styled.Pressable`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.KeyboardAvoidingView`
  background-color: #00cec8;
  height: 100%;
`;

export const Header = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 20%;
  margin-bottom: 15px;
  width: 140px;
  height: 59.9px;
  align-self: center;
`;

export const RegisterAccount = styled.View`
  width: 100%;
  padding: 0 7.5%;
  flex: 1;
  align-self: center;
  margin-top: 10%;
  background-color: white;
  border-top-left-radius: 53px;
`;

interface AuthInputProps {
  invalid?: boolean;
}

export const AuthInput = styled.TextInput<AuthInputProps>`
  margin-top: 10px;
  width: 100%;
  height: 63px;
  background: #f2f3f7;
  border: ${(props) =>
    props.invalid ? "2px solid orange" : "0.15px solid #a1a4b2"};
  border-radius: 45px;
  color: #a1a4b2;
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
  align-self: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #a1a4b2;
`;

export const RegisterButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  height: 63px;
  background-color: #4ecf72;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const RegisterButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: 63px;
  align-items: center;
  justify-content: center;
`;

export const SignInButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #4ecf72;
`;
export const CreateAccountButton = styled.TouchableOpacity`
  width: 100%;
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

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #4ecf72;
`;

export const Title = styled.Text`
  margin-top: 15%;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  color: white;
`;
