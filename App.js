import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, FlatList} from 'react-native';
import UsersComponent from './components/UsersComponent';

const Stack = createStackNavigator ();

export default function App () {
  return (
    <View>
      <UsersComponent />
    </View>
  );
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name={'Расписание приема'} component={HomeScreen} />
  //     <Stack.Screen name={'PatientCart'} component={PatientScreen} />
  //   </Stack.Navigator>
  // </NavigationContainer>
}
