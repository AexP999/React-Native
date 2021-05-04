import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PostsComponent from './PostsComponent';
import TemplateComponent from './TemplateComponent';

export default function PostDrawer () {
  const Drawer = createDrawerNavigator ();

  return (
    <Drawer.Navigator
      drawerType="back"
      openByDefault="left"
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Posts"
        options={{title: 'HZposts'}}
        component={PostsComponent}
      />
      <Drawer.Screen
        name="Template"
        options={{title: 'HZtemplate'}}
        component={TemplateComponent}
      />
    </Drawer.Navigator>
  );
}
