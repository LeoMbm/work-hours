import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import CardHome from '../components/CardHome';
const StyledText = styled(Text)
const StyledView = styled(View)
const StyledScrollView = styled(ScrollView)
const Home = () => {
  return (
    <StyledScrollView 
      showsVerticalScrollIndicator={false}>
    <StyledView className='flex-1 p-4'>


      <StyledText className='text-gray-800 font-bold text-base mb-2'>This Week</StyledText>
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />

   
    </StyledView>
    </StyledScrollView>
  )
}

export default Home