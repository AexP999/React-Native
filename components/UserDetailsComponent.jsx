import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styled from 'styled-components/native'

function UserDetailsComponent({route, navigation}) {
  const {params: {data}} = route;
  useEffect(() => {
    navigation.setOptions({title: data.name})

  }, [])
  return (
    <View>
      <Text>name: {data.name}</Text>
      <Text>username: {data.username}</Text>
      <Text>email: {data.email}</Text>
    </View>
  );
}

export default UserDetailsComponent;