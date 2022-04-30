import React, { useState, useEffect, useContext, createRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  TextInput,
  Text,
  Vibration,
} from "react-native";
import { RootStackParamList } from "../../stacks/MainStack";

import {
  Wrapper,
  Authentication,
  AuthInput,
  LoginButton,
  CreateAccountButton,
  DimissisKeyboard,
  LoginButtonText,
  CreateAccountButtonText,
  ForgotPassword,
  ForgotPasswordText,
  Error,
  Title,
  Logo
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";
<<<<<<< HEAD
import LogoType from "../../components/LogoType";
 
=======
import { Select } from "../../components/Select";

>>>>>>> 372286b07ea1dc17db8016e0bb01f4a7aad4650e
type loginScreenProp = StackNavigationProp<RootStackParamList, "SignIn">;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailInput = createRef<TextInput>();
  const passwordInput = createRef<TextInput>();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<loginScreenProp>();

  const validData = (): boolean => {
    setEmailError("");
    setPasswordError("");
    setSignInError("");

    if (
      !email
        .trim()
        .match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
    ) {
      Vibration.vibrate();
      setEmailError("Email inválido");
      return false;
    }
    if (password.length < 6) {
      Vibration.vibrate();
      setPasswordError("Senha muito curta");
      return false;
    }
    return true;
  };

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <DimissisKeyboard onPress={Keyboard.dismiss}>
      <LogoType />
        <Authentication>
        <Title>Login</Title>
          <Controller
            name="genre"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                data={[
                  { key: "item_1", label: "Item 1" },
                  { key: "item_2", label: "Item 2" },
                  { key: "item_3", label: "Item 3" },
                  { key: "item_4", label: "Item 4" },
                ]}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="E-mail"
                autoCompleteType="email"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                secureTextEntry
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="password"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
          </ForgotPassword>
          <ButtonLarge onPress={handleSubmit(onSubmit)} disabled={loading} text="Entrar">
            <LoginButtonText>Entrar</LoginButtonText>
          </ButtonLarge>
          <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
            <Text>Não tem conta?</Text>
            <CreateAccountButtonText>Cadastre-se</CreateAccountButtonText>
          </CreateAccountButton>
        </Authentication>
        {/* <OtherAuthentications>
          <Text>Acessar com</Text>
          <ExternalAuthentications>
            <OtherAuthentication>
              <BrandLogo source={GoogleIcon} />
            </OtherAuthentication>
            <OtherAuthentication background="#7583C9">
              <BrandLogo source={FacebookIcon} />
            </OtherAuthentication>
          </ExternalAuthentications>
        </OtherAuthentications> */}
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default SignIn;
