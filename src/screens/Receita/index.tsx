import React from "react";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../stacks/MainStack";

import {
  Wrapper,
  Authentication,
  DimissisKeyboard,
  LoginButtonText,
  MetricsAplications,
  Buttons,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ButtonLarge } from "../../components/ButtonLarge";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Actions as RecipeActions } from "../../reducers/recipe";
import useRecord from "../../hooks/useRecord";
import useRecipe from "../../hooks/useRecipe";

const Receita = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = (data: any) => {
    dispatch(RecipeActions.ui.requestRegisterRecipe(data));
  };

  useRecord({ setValue });
  useRecipe({ setValue });

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
          <Text style={{ fontWeight: "800", marginTop: "4%" }}>Prescrição</Text>
          <Controller
            name="medicines"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Medicamento"
                autoCompleteType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <MetricsAplications>
            <Controller
              name="quantity"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Quantidade"
                  autoCompleteType="name"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                  style={{ width: "48%" }}
                />
              )}
            />
            <Controller
              name="use"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Uso"
                  autoCompleteType="name"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                  style={{ width: "48%" }}
                />
              )}
            />
          </MetricsAplications>
          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="descrição"
                autoCompleteType="tel"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <ButtonLarge text="Gerar PDF" />
          <Buttons>
            <ButtonLarge text="Buscar Receita" secondary />
            <ButtonSmall onPress={handleSubmit(onSubmit)} />
          </Buttons>
        </Authentication>
      </DimissisKeyboard>
    </Wrapper>
  );
};

export default Receita;
