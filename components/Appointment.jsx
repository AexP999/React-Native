import React from 'react';
import styled from 'styled-components/native';
import {Text, View, SectionList, Button} from 'react-native';
import GreyText from './GreyText'
import Badge from './Badge'

const Appointment = ({item, navigate}) => {
  const {user, diagnosis, active, time} = item;

  return (

    <GroupItem onPress={() => {navigate('PatientCart', item)}}>
      <Avatar
        source={{
          uri: user.avatar
        }}
      />
      <View style={{flex: 1}}>
        <FullName >{user.fullname}</FullName>

        <GreyText>{diagnosis}</GreyText>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  )
}

Appointment.defaultProps = {
  groupTitle: "Untitled",
  items: []
}



const FullName = styled.Text`
font-size:22px;
color:purple
`;

const GroupItem = styled.TouchableOpacity`
flex-direction: row;
align-items:center;  
padding:20px;
border-bottom-width: 1px;
border-bottom-color:#f3f3f3;
background-color:#fff
`;

const Avatar = styled.Image`
border-radius: 50px;
width:40px;
height:40px;
margin-right:15px;
`;



export default Appointment;