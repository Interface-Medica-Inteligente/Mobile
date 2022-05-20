import React, { useState, useContext } from "react";
import { ActivityIndicator, Alert, Keyboard, Vibration } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Actions as DoctorActions } from "../../reducers/doctor";
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
import doctorSelector from "../../selectors/doctorSelector";
import { RegisterData } from "../../entities";
import { Select } from "../../components/Select";

type registerScreenProp = StackNavigationProp<RootStackParamList, "SignUp">;

const SignUp = () => {
  const fetching = useSelector(doctorSelector.isFetching);
  const dispatch = useDispatch();
  const navigation = useNavigation<registerScreenProp>();

  const { control, handleSubmit } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    dispatch(DoctorActions.ui.requestRegister(data));
  };

  return (
    <Wrapper>
      <Title>Cadastro</Title>
      <DimissisKeyboard onPress={Keyboard.dismiss}>
        <RegisterAccount>
          <Controller
            name="name"
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
            name="genre"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Select
                data={[
                  { key: "M", label: "Masculino" },
                  { key: "F", label: "Feminino" },
                ]}
                value={value}
                onChange={onChange}
                placeholder="Sexo"
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
            loading={fetching}
            text="Cadastrar"
          />
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
