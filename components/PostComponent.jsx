import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native'
import {getPosts} from '../src/api/API'
import styled from 'styled-components/native'

function PostComponent({item, nav}) {
  const {id, title, body} = item

  return (
    <View>
      <PostText onPress={() => nav.navigate('PostDetail', {data: item})}>{id}. {title}</PostText>
    </View>
  );
}

const PostText = styled.Text`
color:blue;
font-size:20px;
border:solid 1px purple;
margin: 5px;
padding: 5px
`

export default PostComponent;