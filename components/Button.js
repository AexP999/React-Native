import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function Button({children, color}) {
  return (
    <ButtonWrapper color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
}
Button.defaultProps = {
  color: '#2A86ff',
};

const ButtonWrapper = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items:center;
background:${props => props.color};
border-radius:30px;
height:45px;
`;

const ButtonText = styled.Text`
color:#fff;
font-size:20px
`;
