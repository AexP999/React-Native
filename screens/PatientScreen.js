import React from 'react';
import {Text, View, SectionList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Appointment, SectionTitle} from '../components';
import {
  Foundation,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import {GreyText, Button, Badge} from '../components';

function PatientScreen () {
  // {route: {params: {user}}}
  return (
    <View style={{flex: 1}}>
      <PatientDetails>
        <PatientFullName>
          {/* {user.fullname} */}
        </PatientFullName>
        {/* <GreyText>{user.phone}</GreyText> */}

        <PatientButtons>
          <FormulaButtonView>
            <Button>Формула зубов</Button>
          </FormulaButtonView>
          <PhoneButtonView>
            <Button color="#84D269">
              <Foundation name="telephone" size={24} color="white" />
            </Button>
          </PhoneButtonView>
        </PatientButtons>
      </PatientDetails>

      <PatientAppointments>
        <Container>
          <AppointmentCard>

            <AppointmentCardRow>
              <MaterialCommunityIcons name="tooth" size={20} color="#A3a3a3" />
              <AppointmentCardLabel>
                Зуб: <Text style={{fontWeight: 600}}>12</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>

            <AppointmentCardRow>
              <FontAwesome5
                style={{marginEnd: 5}}
                name="notes-medical"
                size={20}
                color="#a3a3a3"
              />
              <AppointmentCardLabel>
                Диагноз: <Text style={{fontWeight: 600}}>пульпит</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow
              style={{marginTop: 15, justifyContent: 'space-between'}}
            >
              <Badge style={{width: 150}} active>11.10.2019 - 15:40</Badge>
              <Badge color="green">500 грн.</Badge>
            </AppointmentCardRow>

          </AppointmentCard>
        </Container>
      </PatientAppointments>

    </View>
  );
}

const AppointmentCardLabel = styled.Text`
font-style: 16px;
margin-left:10px
`;

const AppointmentCardRow = styled.View`
flex-direction:row;
margin:3px 0;
align-items:baseline
`;

const AppointmentCard = styled.View`
box-shadow:1px 2px 5px rgba(0,0,0,.2);
padding:20px 25px;
border-radius:10px;
background:white;
`;

const Container = styled.View`
flex:1;
padding: 25px;
background:#fff    
`;

const PatientAppointments = styled.View`
flex:1;
background:#f8fafd;
`;
const PatientDetails = styled (Container)`
flex:.3;

`;

const FormulaButtonView = styled.View`
flex:1;
`;

const PhoneButtonView = styled.View`
flex:.18;
margin-left:10px;
max-width:45px;

`;

const PatientButtons = styled.View`
flex: 1;
flex-direction:row;
margin-top:20px;
`;

const PatientFullName = styled.Text`
font-weight:bold;
font-size: 24px;
line-height: 30px;
margin-bottom: 5px;
`;

export default PatientScreen;
