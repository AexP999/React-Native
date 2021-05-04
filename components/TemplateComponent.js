import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

export default function TemplateComponent () {
  return (
    <TemplateView>
      <TemplateText>
        Template Component
      </TemplateText>
    </TemplateView>
  );
}

const TemplateView = styled.View`

padding-top:50px;
`;
const TemplateText = styled.Text`
color:blue;
font-size:30px;
font-weight:bold;

`;
