import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
const StyledText = styled(Text)
const StyledView = styled(View)
const CardHome = () => {
  return (



    <StyledView className='rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xs'>

      <StyledView className='block rounded-xl bg-white p-6 sm:p-8'>
      <StyledText className='text-xl font-bold text-gray-900'>Design on figma</StyledText>
          <StyledView className='mt-16 sm:pr-8'>
          <StyledText className='text-xl font-bold text-gray-900'>Here i put work hours</StyledText>
          <StyledText className='mt-2 text-sm text-gray-500'>pay estimated</StyledText>
          </StyledView>
      </StyledView>

    </StyledView>


  )
}

export default CardHome