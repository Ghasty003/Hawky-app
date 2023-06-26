import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-native-paper";

import Login from './src/screens/Login';
import { StackParam } from './src/utils/types';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Chats from './src/screens/Chats';


const Stack = createNativeStackNavigator<StackParam>();

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Chats' component={Chats} />
        </Stack.Navigator>
        {/* <StatusBar style="auto" /> */}
      </Provider>
    </NavigationContainer>
  );
}
