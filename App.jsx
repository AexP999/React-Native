import React from 'react';
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styled from 'styled-components/native'
import PostsComponent from './components/Postscomponent'
import PostDetailedComponent from './components/PostDetailedComponent'

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name={'Posts'} component={PostsComponent} />
        <Stack.Screen name={'PostDetail'} component={PostDetailedComponent} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Container = styled.View`
flex:1;
justify-content: center;
text-align:center
`
const KukuText = styled.Text`
font-size:30px;
color: blue
`


export default App;