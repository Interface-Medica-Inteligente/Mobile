import React, { useState, useContext } from "react";
import { ActivityIndicator, Alert, Keyboard, Vibration } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../stacks/MainStack";

import {
  Wrapper,
  DimissisKeyboard,
  RegisterAccount,
  AuthInput,
  CreateAccountButton,
  CreateAccountButtonText,
  Text,
  Title,
} from "./styles";

import { Input } from "../../components/Input";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";

type registerScreenProp = StackNavigationProp<RootStackParamList, "SignUp">;

const SignUp = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<registerScreenProp>();

  const validData = () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (name.length < 3) {
      Vibration.vibrate();
      setNameError("Nome inválido");
      return false;
    }
    if (
      !email.match(
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
    if (password !== confirmPassword) {
      Vibration.vibrate();
      setConfirmPasswordError("Senhas não conferem");
      return false;
    }
    return true;
  };

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <Title>Login</Title>
      <DimissisKeyboard onPress={Keyboard.dismiss}>
        <RegisterAccount>
          <Controller
            name="nome"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome"
                autoCompleteType="name"
                autoCapitalize="none"
                keyboardType="default"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                style={{ marginTop: "30%" }}
              />
            )}
          />
          <Controller
            name="cpf"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="CPF"
                autoCompleteType="cc-number"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="crm"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="CRM"
                autoCompleteType="cc-number"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
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
                style={{ marginBottom: "8%" }}
              />
            )}
          />
          <ButtonLarge
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
            text="Cadastrar"
          ></ButtonLarge>
          <CreateAccountButton onPress={() => navigation.navigate("SignIn")}>
            <Text>Já tem conta?</Text>
            <CreateAccountButtonText>Login</CreateAccountButtonText>
          </CreateAccountButton>
        </RegisterAccount>
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default SignUp;
