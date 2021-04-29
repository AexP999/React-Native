import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator ();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Расписание приема">
        <Stack.Screen name={'Расписание приема'} component={HomeScreen} />
        <Stack.Screen name={'PatientCart'} component={PatientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
