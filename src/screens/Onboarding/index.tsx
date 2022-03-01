import React, { useState, useRef, LegacyRef } from 'react'
import { View, Text, ImageSourcePropType } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'stacks/MainStack'
import { Container, PaginationButton, SafeArea } from './styles'

type ScreensProps = StackNavigationProp<RootStackParamList, 'Onboarding'>

const Onboarding = () => {
  const [index, setIndex] = useState(0)
  const navigation = useNavigation<ScreensProps>()

  return (
    <SafeArea>
      <Container>
        <View>
          <PaginationButton>
            <Text>
              Home
            </Text>
          </PaginationButton>
        </View>
      </Container>
    </SafeArea>
  )
}

export default Onboarding
