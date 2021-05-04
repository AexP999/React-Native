import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function Button({children}) {
  return <ButtonWrapper><ButtonText>{children}</ButtonText></ButtonWrapper>;
}

const ButtonWrapper = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items:center;
background:#2A86ff;
border-radius:30px;
height:45px;
`;

const ButtonText = styled.Text`
color:#fff;
font-size:20px
`;
