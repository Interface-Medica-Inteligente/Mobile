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
  MetricsPacient,
  Buttons
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";
import { Select } from "../../components/Select";

type laudoScreenProp = StackNavigationProp<
  RootStackParamList,
  "Laudo"
>;

const Laudo = () => {
  const navigation = useNavigation<laudoScreenProp>();

  const { control, handleSubmit } = useForm();

  return (
    <Wrapper>
      <DimissisKeyboard>
        <Authentication>
          <Controller
            name="codigoCNES"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Código do CNES"
                autoCompleteType="cc-number"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="nomedaUSS"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome da unidade de saúde solicitante"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="nomePaciente"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome do paciente"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="nomedamae"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome da mãe do(a) paciente"
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
            name="peso"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Peso (Kg)"
                autoCompleteType="cc-number"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                style={{ width: "48%"}}
              />
            )}
          />
          <Controller
            name="altura"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Altura (cm)"
                autoCompleteType="cc-number"
                autoCapitalize="none"
                keyboardType="numeric"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                style={{ width: "48%" }}
              />
            )}
          />
          </MetricsPacient>
          <Controller
            name="cid10"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="CID-10"
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
            name="diagnostico"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Diagnóstico"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            name="anamnese"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Anamnese"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                multiline={true}
                numberOfLines={5}
                style={{ height: '15%', textAlignVertical: 'top', padding: '5%', justifyContent: 'flex-start' }}
              />
            )}
          />
          <Text>Paciente realizou tratamento prévio ou se está em
                tratamento da doença
          </Text>
          <Buttons>
            <ButtonSmall />
          </Buttons>
        </Authentication>
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default Laudo;
