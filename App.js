import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, FlatList} from 'react-native';
import UsersComponent from './components/UsersComponent';
import PostComponent from './components/PostComponent';
import UserDetailsComponent from './components/UserDetailsComponent';

const Stack = createStackNavigator ();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Users'} component={UsersComponent} />
        <Stack.Screen name={'Posts'} component={PostComponent} />
        <Stack.Screen name={'UserDetails'} component={UserDetailsComponent} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

//     <Stack.Screen name={'PatientCart'} component={PatientScreen} />
