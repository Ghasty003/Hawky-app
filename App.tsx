import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-native-paper";

import Login from './src/screens/Login';
import { StackParam } from './src/utils/types';


const Stack = createNativeStackNavigator<StackParam>();

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}
