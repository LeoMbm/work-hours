import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';



const StyledText = styled(Text)
const StyledView = styled(View)
const StyledTouchableOpacity = styled(TouchableOpacity)






const CardCalendar = () => {

  const date = new Date();
  const today = date.toDateString();

  
  return (
    <StyledView className='rounded-2xl p-1 shadow-xs'>

      <StyledTouchableOpacity 
        activeOpacity={0.3}
        className='block rounded-xl bg-white p-6 sm:p-8'
        >
            
      <StyledText className='text-xl font-bold text-gray-900'>{today}</StyledText>
          <StyledView className='mt-8 sm:pr-8'>
          <StyledText className='text-xl font-bold text-gray-900'>Here i put work hours</StyledText>
          <StyledText className='mt-2 text-sm text-gray-500'>pay estimated</StyledText>
          </StyledView>
      </StyledTouchableOpacity>

    </StyledView>
  )
}

export default CardCalendar