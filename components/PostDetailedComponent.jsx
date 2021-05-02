import React, {useEffect} from 'react';
import {View, Text} from 'react-native'
import styled from 'styled-components/native'

function PostDetailedComponent({route, navigation}) {
  const {params: {data}} = route;

  useEffect(() => {
    navigation.setOptions({title: `id: ${data.id}`})

  }, [])

  return (
    <View>
      <Text>
        userID: {data.userId}.
      </Text>
      <BodyText>
        {data.title}
      </BodyText>
      <BodyText>
        {data.body}
      </BodyText>
    </View>
  );
}

const BodyText = styled.Text`
font-size:22px;
color:yellow;
background-color:#5d91c2;
border:solid 1px red;
margin: 5px;
padding:5px
`

export default PostDetailedComponent;