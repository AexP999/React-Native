import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUsers, getUser} from '../src/api/API';
import styled from 'styled-components/native'

function UserComponent(props) {
  const {item} = props

  return (
    <View>
      <userNameST >name: {item.name}</userNameST>
      <Text>email: {item.email}</Text>
    </View>
  );
}

const userNameST = styled.Text`
  font-size:50px;
  border:1px solid black;
  color:red;
  margin:20px;
  padding:20px
  `


export default UserComponent;