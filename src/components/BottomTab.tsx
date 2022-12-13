import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTab = ({HomeScreen, SettingsScreen, CalendarScreen, CheckScreen}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="md-home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{
        tabBarLabel: 'Calendar',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Check" component={CheckScreen} options={{
        tabBarLabel: 'Check',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="stopwatch" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  )
}

export default BottomTab