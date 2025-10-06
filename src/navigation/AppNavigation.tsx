import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StartPage} from '../screens/StartPage';
import {Questions} from '../screens/Questions';
import {Results} from '../screens/Results';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartPage} options={{ title: 'Welcome' }} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Results" component={Results} /> 
     
    </Stack.Navigator>
  );
}
