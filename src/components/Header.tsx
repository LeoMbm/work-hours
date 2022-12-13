import { View, Text, Button } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import { styled } from 'nativewind';

const Stack = createStackNavigator();
const StyledButton = styled(Button)

const Header = ({Home, Settings}) => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}         
    options={{
          headerRight: () => (
            <StyledButton
              onPress={() => alert('This is a button!')}
              title="Add"
              color="#c4c4c4"
            />
          ),
          headerLeft: () => (
            <StyledButton
              onPress={() => alert('This is a button!')}
              title="Add"
              color="#c4c4c4"
            />
          ),
        }} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  )
}

export default Header