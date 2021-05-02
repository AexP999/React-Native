import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUsers, getUser} from '../src/api/API';
import styled from 'styled-components/native'

function UserComponent({item, nav}) {
  const {name, email} = item

  return (
    <BlockUser>
      <UserNameST onPress={() => {nav.navigate('UserDetails', {data: item})}} >name: {name}</UserNameST>
      <EmailST onPress={() => {nav.navigate('Posts')}}>email: {email}</EmailST>
    </BlockUser >
  );
}

const UserNameST = styled.Text`
  font-size:20px;
  color:red;
 
  `
const EmailST = styled.Text`
  font-size:20px;
  color:blue;

  `
const BlockUser = styled.View`
  font-size:20px;
  border:1px solid black;

  margin:5px 10px ;
  padding:10px
  `



export default UserComponent;