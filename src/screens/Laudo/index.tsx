import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Wrapper, MetricsPacient, Buttons } from "./styles";

import { Input } from "../../components/Input";
import { ButtonSmall } from "../../components/ButtonSmall";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Api from "../../services/api";
import useRecord from "../../hooks/useRecord";
import { Actions as ReportActions } from "../../reducers/report";

const Laudo = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue, getValues } = useForm();

  useRecord({ setValue });

  const onSubmit = (data: any) =>
    dispatch(ReportActions.ui.requestRegisterReport(data));

  const onBlurCNES = () => {
    const cnes = getValues("cnes");
    Api.getEstablishmentName({ cnes })
      .then((response: any) => {
        setValue("establishmentName", response?.data.nomeEstabelecimento);
      })
      .catch(() => {
        setValue("establishmentName", "");
      });
  };

  const onBlurCid = () => {
    const cid = getValues("cid");
    Api.getDiagnosis({ cid })
      .then((response: any) => {
        setValue("diagnosis", response?.data.descricao);
      })
      .catch(() => {
        setValue("diagnosis", "");
      });
  };

  return (
    <Wrapper
      contentContainerStyle={{
        paddingBottom: insets.bottom + 70,
        paddingTop: 50,
        width: "85%",
        alignSelf: "center",
      }}
    >
      <Controller
        name="cnes"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder="Código do CNES"
            autoCompleteType="cc-number"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onBlur={onBlurCNES}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="establishmentName"
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
        name="name"
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
        name="momName"
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
          name="weight"
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
              style={{ width: "48%" }}
            />
          )}
        />
        <Controller
          name="height"
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
        name="cid"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder="CID-10"
            autoCompleteType="name"
            autoCapitalize="none"
            keyboardType="numeric"
            autoCorrect={false}
            value={value}
            onBlur={onBlurCid}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="diagnosis"
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
            style={{
              height: "15%",
              textAlignVertical: "center",
              padding: "5%",
              justifyContent: "flex-start",
            }}
          />
        )}
      />
      <Text>
        Paciente realizou tratamento prévio ou se está em tratamento da doença
      </Text>
      <Buttons>
        <ButtonSmall onPress={handleSubmit(onSubmit)} />
      </Buttons>
    </Wrapper>
  );
};

export default Laudo;
