import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import PostDrawer from './PostDrawer';
import styled from 'styled-components/native'


export default function PostsComponent() {



  return (
    <PostView>
      <PostText>
        Posts Component
      </PostText>

    </PostView>
  );
}

const PostView = styled.View`

padding-top:50px;
`;
const PostText = styled.Text`
color:rgb(234, 0, 255);
font-size:30px;
font-weight:bold;

`;