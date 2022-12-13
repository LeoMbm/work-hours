import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
const StyledText = styled(Text)
const StyledView = styled(View)
const Home = () => {
  return (
    <View>
      <StyledText className='text-red-600'>Home</StyledText>
    </View>
  )
}

export default Home