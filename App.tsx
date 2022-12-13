import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Settings from './src/screens/Settings';
import Home from './src/screens/Home';
import { styled } from 'nativewind';
import BottomTab from './src/components/BottomTab';

const StyledText = styled(Text)
const StyledView = styled(View)

export default function App() {

  return (
// @ts-ignore

<NavigationContainer>  
  <Header Home={Home} Settings={Settings}/>
</NavigationContainer>
  

  );
}
