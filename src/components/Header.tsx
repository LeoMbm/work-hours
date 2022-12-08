import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();


const Header = ({Home, Settings}) => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  )
}

export default Header