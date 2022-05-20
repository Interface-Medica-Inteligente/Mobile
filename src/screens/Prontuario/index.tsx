import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../stacks/MainStack";

import {
  Wrapper,
  Authentication,
  DimissisKeyboard,
  MetricsPacient,
  Buttons,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";
import { Select } from "../../components/Select";
import useRecord from "../../hooks/useRecord";
import { useDispatch } from "react-redux";
import { Actions as RecordActions } from "../../reducers/record";
import { Actions as DialogActions } from "../../reducers/dialog";
import { RecordData } from "../../entities";

type prontuarioScreenProp = StackNavigationProp<
  RootStackParamList,
  "Prontuario"
>;

const Prontuario = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, setValue } = useForm<RecordData>();

  const onSubmit = (data: RecordData) => {
    dispatch(RecordActions.ui.requestRegisterRecord(data));
  };

  useRecord({ setValue });

  return (
    <Wrapper>
      <DimissisKeyboard>
        <Authentication>
          <Controller
            name="name"
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
            name="birthDate"
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
              name="height"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Altura"
                  autoCompleteType="name"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  autoCorrect={false}
                  value={String(value || "")}
                  onChangeText={onChange}
                  style={{ width: "45%", marginRight: "10%" }}
                />
              )}
            />
            <Controller
              name="weight"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Peso"
                  autoCompleteType="name"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  autoCorrect={false}
                  value={String(value || "")}
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
            name="momName"
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
            name="dadName"
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
            <ButtonLarge
              text="Buscar Prontuário"
              secondary
              style={{ marginRight: "8%" }}
              onPress={() => dispatch(DialogActions.ui.openDialog("RECORD"))}
            />
            <ButtonSmall onPress={handleSubmit(onSubmit)} />
          </Buttons>
        </Authentication>
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default Prontuario;
