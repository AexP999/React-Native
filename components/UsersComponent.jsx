import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUsers, getUser} from '../src/api/API';
import UserComponent from './UserComponent';
import styled from 'styled-components/native'

function UsersComponent() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let users = await getUsers();
      setUsers([...users]);
      console.log(users);
    }
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserComponent item={item} />}
        keyExtractor={item => '' + item.id} />

    </View>
  );
}

export default UsersComponent;