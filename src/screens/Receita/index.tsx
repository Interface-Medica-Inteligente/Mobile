import React from "react"
import { View, Text, ImageSourcePropType } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../stacks/MainStack"

import {   
    Wrapper,
    Authentication,
    DimissisKeyboard,
    PaginationButton,
    LoginButtonText
  } from "./styles"
import { Input } from "../../components/Input"
import { ButtonSmall } from "../../components/ButtonSmall"
import { ButtonLarge } from "../../components/ButtonLarge"
import { Controller, useForm } from "react-hook-form"

type receitaScreenProp = StackNavigationProp<RootStackParamList, "Receita">

const Receita = () => {
  const navigation = useNavigation<receitaScreenProp>()

  const { control, handleSubmit } = useForm()

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
          <Text style={{fontWeight: '800', marginTop: '4%'}}>Prescrição</Text>
          <Controller
            name="medicamento"
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
          <Controller
            name="quantidade"
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
              style={{width: '40%'}}
              />
              )}
          />
          <Controller
            name="uso"
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
              style={{width: '40%'}}
              />
              )}
              />
          <Controller
            name="descricao"
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
          <ButtonLarge text="Gerar PDF">
              <LoginButtonText>Gerar PDF</LoginButtonText>
          </ButtonLarge>
          <ButtonLarge text="Buscar Receita" cor={true}>
          </ButtonLarge>
          <ButtonSmall/>
        </Authentication>
      </DimissisKeyboard>
    </Wrapper>
  )
}

export default Receita
