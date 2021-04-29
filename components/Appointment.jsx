import React from 'react';
import styled from 'styled-components/native';
import {Text, View, SectionList, Button} from 'react-native';
import {HomeScreen, PatientScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Appointment = ({user, diagnosis, active, time, navigation: {navigate}}) => {

  return (

    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar
        }}
      />
      <View style={{flex: 1}}>
        <Button title="Go to Details"
          onPress={() => {navigate('PatientCart')}} />
        <GrayText>{diagnosis}</GrayText>
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

const GrayText = styled.Text`
font-size:16px;
color:#8b979f
`;

const FullName = styled.Text`
font-size:16px;
`;

const GroupItem = styled.TouchableOpacity`
flex-direction: row;
align-items:center;  
padding:20px;
border-bottom-width: 1px;
border-bottom-color: #f3f3f3;
`;

const Avatar = styled.Image`
border-radius: 50px;
width:40px;
height:40px;
margin-right:15px;
`;



export default Appointment;