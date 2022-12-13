import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import {CalendarList} from 'react-native-calendars';
import CardCalendar from '../components/CardCalendar';


const StyledView = styled(View)
const StyledText = styled(Text)

const CalendarScreen = () => {
  return (
    <StyledView className='container'>
        <StyledView className='p-4'>
        <StyledText className='text-xl font-bold text-gray-900'>Calendar</StyledText>

        </StyledView>

      <StyledView className='p-4'> 
        <CardCalendar />
      </StyledView>

        <CalendarList 

        />
        
    </StyledView>
  )
}

export default CalendarScreen