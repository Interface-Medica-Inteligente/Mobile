import React, { useState, useContext } from 'react'
import { ActivityIndicator, Alert, Keyboard, Vibration } from 'react-native'

import {
  Wrapper,
  DimissisKeyboard,
  RegisterAccount,
  AuthInput,
  RegisterButton,
  RegisterButtonText,
  Error,
  Container,
} from './styles'

const SignUp = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  const validData = () => {
    setNameError('')
    setEmailError('')
    setPasswordError('')
    setConfirmPasswordError('')

    if (name.length < 3) {
      Vibration.vibrate()
      setNameError('Nome inválido')
      return false
    }
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      Vibration.vibrate()
      setEmailError('Email inválido')
      return false
    }
    if (password.length < 6) {
      Vibration.vibrate()
      setPasswordError('Senha muito curta')
      return false
    }
    if (password !== confirmPassword) {
      Vibration.vibrate()
      setConfirmPasswordError('Senhas não conferem')
      return false
    }
    return true
  }


  return (
    <Container>
      <Wrapper>
        <DimissisKeyboard onPress={Keyboard.dismiss}>
          <RegisterAccount>
            <AuthInput
              invalid={nameError !== ''}
              placeholder="Nome"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Error>{nameError}</Error>
            <AuthInput
              invalid={emailError !== ''}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Error>{emailError}</Error>
            <AuthInput
              invalid={passwordError !== ''}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Error>{passwordError}</Error>
            <AuthInput
              invalid={confirmPasswordError !== ''}
              placeholder="Confirmar senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <Error>{confirmPasswordError}</Error>
            <RegisterButton onPress={() => {}} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" size="large" />
              ) : (
                <RegisterButtonText>Vamos lá</RegisterButtonText>
              )}
            </RegisterButton>
          </RegisterAccount>
        </DimissisKeyboard>
      </Wrapper>
    </Container>
  )
}

export default SignUp
