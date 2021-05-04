import React from 'react';
import {Text, View, SectionList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Appointment, SectionTitle} from '../components';
import {Ionicons} from '@expo/vector-icons';
import {GreyText, Button} from '../components';

function PatientScreen () {
  return (
    <Container>
      <PatientFullName>
        Марина Алмазова
      </PatientFullName>
      <GreyText> +380-456-34-12</GreyText>
      <Button>Формула зубов</Button>
    </Container>
  );
}

const PatientFullName = styled.Text`
font-weight:bold;
font-size: 24px;
line-height: 30px;
margin-bottom: 5px;
`;

const Container = styled.View`
padding: 25px;
background:#fff
`;

export default PatientScreen;
