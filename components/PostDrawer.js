import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import PostsComponent from './PostsComponent';
import TemplateComponent from './TemplateComponent';

export default function PostDrawer () {
  const Drawer = createDrawerNavigator ();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={PostsComponent} />
      <Drawer.Screen name="Notifications" component={TemplateComponent} />
    </Drawer.Navigator>
  );
}
