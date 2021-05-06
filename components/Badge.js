import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const getColor = ({active, color}) => {
  const colors = {
    green: {
      background: 'rgba(132,210,105,0.21)',
      color: '#61BB42',
    },
    active: {
      background: '#2A86FF',
      color: '#fff',
    },
    default: {
      background: '#4294ff',
      color: '#4294ff',
    },
  };
  let result;

  if (active) {
    result = colors.active;
  } else if (color && colors[color]) {
    result = colors[color];
  } else {
    result = colors.default;
  }
  return result;
};

export default styled.Text`
background :${props => getColor (props).background};
color :${props => getColor (props).color};
border-radius:18px;
font-size:14px;
font-weight:bold;
width: 70px;
height: 32px;
text-align: center;
align-items: center;
line-height: 28px;
`;
