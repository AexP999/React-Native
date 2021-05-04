import React from 'react';
import styled from 'styled-components/native';
import {Text, View, SectionList, Button} from 'react-native';
import GreyText from './GreyText'

const Appointment = ({user, diagnosis, active, time, navigate}) => {

  return (

    <GroupItem onPress={() => {navigate('PatientCart')}}>
      <Avatar
        source={{
          uri: user.avatar
        }}
      />
      <View style={{flex: 1}}>
        <FullName >{user.fullname}</FullName>

        <GreyText>{diagnosis}</GreyText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  )
}

Appointment.defaultProps = {
  groupTitle: "Untitled",
  items: []
}

const GroupDate = styled.Text`
background :${props => (props.active ? '#2A86FF' : '#e9f5ff')};
color :${props => (props.active ? '#fff' : '#4294ff')};
border-radius:18px;
font-size:14px;
font-weight:bold;
width: 70px;
height: 32px;
text-align: center;
align-items: center;
line-height: 28px;
`;


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