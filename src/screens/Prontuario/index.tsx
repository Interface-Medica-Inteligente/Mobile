import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../stacks/MainStack";

import {
  Wrapper,
  Authentication,
  DimissisKeyboard,
  PaginationButton,
  LoginButtonText,
  MetricsPacient,
  Buttons
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";
import { Select } from "../../components/Select";

type prontuarioScreenProp = StackNavigationProp<
  RootStackParamList,
  "Prontuario"
>;

const Prontuario = () => {
  const navigation = useNavigation<prontuarioScreenProp>();

  const { control, handleSubmit } = useForm();

  return (
    <Wrapper>
      <DimissisKeyboard>
        <Authentication>
          <Controller
            name="nomePaciente"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome do Paciente"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="dataNascimento"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Data de nascimento"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <MetricsPacient>
          <Controller
            name="altura"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Altura"
                autoCompleteType="name"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                style={{ width: "45%", marginRight: "10%" }}
              />
            )}
          />
          <Controller
            name="peso"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Peso"
                autoCompleteType="name"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                style={{ width: "45%" }}
              />
            )}
          />
          </MetricsPacient>
          <Controller
            name="cpf"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="CPF"
                autoCompleteType="name"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="sexo"
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
            name="nomeMae"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome da mãe"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="nomePai"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome do pai"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Buttons>
            <ButtonLarge text="Buscar Prontuário" secondary  style={{ marginRight: "8%" }}/>
            <ButtonSmall onPress={() => { navigation.navigate("Receita") }} />
          </Buttons>
        </Authentication>
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default Prontuario;
