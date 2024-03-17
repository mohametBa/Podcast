import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Audioplayer from './component/Audioplayer'; // Import your component here
import Homee from './component/Homee';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerMode:"none",

            }}>
        <Stack.Screen name="Audioplayer" component={Audioplayer} />
        <Stack.Screen name="Homee" component={Homee} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
