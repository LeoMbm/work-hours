import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import Check from '../components/check/Check'


const StyledView = styled(View)
const StyledText = styled(Text)
const styledTouchableOpacity = styled(TouchableOpacity)
const CheckScreen = () => {
  return (
    <StyledView className='p-4 h-1/2'>
      <StyledText className='text-xl font-bold text-gray-900'>Check In / Out</StyledText>
      {/* <Check /> */}
    </StyledView>
  )
}

export default CheckScreen