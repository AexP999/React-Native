import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styled from 'styled-components/native'

function UserDetailsComponent({route, navigation}) {
  const {params: {data}} = route;
  useEffect(() => {
    navigation.setOptions({title: data.name})

  }, [])
  return (
    <DetailsView>
      <Text>name: {data.name}</Text>
      <Text>username: {data.username}</Text>
      <Text>email: {data.email}</Text>
    </DetailsView>
  );
}

const DetailsView = styled.View`
padding-top:50px;
`

export default UserDetailsComponent;