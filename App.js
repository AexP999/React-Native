import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, FlatList} from 'react-native';
import UsersComponent from './components/UsersComponent';
import PostsComponent from './components/PostsComponent';
import PostDrawer from './components/PostDrawer';
import UserDetailsComponent from './components/UserDetailsComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabNavigator = createBottomTabNavigator ();

export default function App () {
  return (
    <NavigationContainer>

      <BottomTabNavigator.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#aa3423',
          labelStyle: {
            fontSize: 28,
            flex: 1,
          },
          activeTintColor: 'white',
          inactiveTintColor: 'blue',
          inactiveBackgroundColor: 'lightblue',
        }}
      >
        <BottomTabNavigator.Screen name={'users'} component={UsersComponent} />
        <BottomTabNavigator.Screen name={'posts'} component={PostDrawer} />

      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
