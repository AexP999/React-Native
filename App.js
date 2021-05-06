import React from 'react';
import {HomeScreen, PatientScreen} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator ();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PatientCar">
        <Stack.Screen
          name={'Расписание приемa'}
          options={{
            title: 'Пациенты',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#2a86ff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name={'PatientCart'}
          options={{
            title: 'Карта пациента',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#2a86ff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            },
          }}
          component={PatientScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
