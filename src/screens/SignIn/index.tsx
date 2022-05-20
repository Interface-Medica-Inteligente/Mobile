import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { Actions as DoctorActions } from "../../reducers/doctor";
import { Keyboard, Text } from "react-native";
import { RootStackParamList } from "../../stacks/MainStack";

import {
  Wrapper,
  Authentication,
  CreateAccountButton,
  DimissisKeyboard,
  CreateAccountButtonText,
  Title,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";
import LogoType from "../../components/LogoType";
import doctorSelector from "../../selectors/doctorSelector";
import { LoginData } from "../../entities";

type loginScreenProp = StackNavigationProp<RootStackParamList, "SignIn">;

const SignIn = () => {
  const fetching = useSelector(doctorSelector.isFetching);
  const dispatch = useDispatch();

  const navigation = useNavigation<loginScreenProp>();

  const { control, handleSubmit } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    dispatch(DoctorActions.ui.requestLogin(data));
  };

  return (
    <Wrapper>
      <DimissisKeyboard onPress={Keyboard.dismiss}>
        <LogoType />
        <Authentication>
          <Title>Login</Title>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="E-mail"
                autoCompleteType="email"
                autoCapitalize="none"
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
          <ButtonLarge
            loading={fetching}
            onPress={handleSubmit(onSubmit)}
            text="Entrar"
          />
          <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
            <Text>Não tem conta?</Text>
            <CreateAccountButtonText>Cadastre-se</CreateAccountButtonText>
          </CreateAccountButton>
        </Authentication>
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default SignIn;
