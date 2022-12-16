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



        {/* <StyledView className='h-screen'>  */}
        <CalendarList
        horizontal={true}
        pastScrollRange={12}
        futureScrollRange={12}
        hideExtraDays={true}
        staticHeader={true}
        calendarHeight={350}
        onDayPress={(day) => {alert('selected day' + day.dateString)}}
        />
        {/* </StyledView> */}

        
    </StyledView>
  )
}

export default CalendarScreen