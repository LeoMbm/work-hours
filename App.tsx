import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Settings from './src/screens/Settings';
import Home from './src/screens/Home';
import { styled } from 'nativewind';
import BottomTab from './src/components/BottomTab';
import CalendarScreen from './src/screens/CalendarScreen';
import CheckScreen from './src/screens/CheckScreen';

const StyledText = styled(Text)
const StyledView = styled(View)

export default function App() {

  return (
// @ts-ignore

<NavigationContainer>  
  <BottomTab HomeScreen={Home} CalendarScreen={CalendarScreen} CheckScreen={CheckScreen} SettingsScreen={Settings}/>
</NavigationContainer>
  

  );
}
