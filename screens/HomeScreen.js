import React from 'react';
import {Text, View, SectionList} from 'react-native';
import styled from 'styled-components/native';
import {Appointment, SectionTitle} from '../components';
import {Ionicons} from '@expo/vector-icons';

const DATA = [
  {
    title: '14 сентября',
    data: [
      {
        time: '15:30',
        diagnosis: 'пульпит',
        active: true,
        user: {
          fullname: 'Джон Сильверов',
          phone: '+38 067 2321223',
          avatar: 'http://avatarmaker.ru/img/11/1044/104363.jpg',
        },
      },

      {
        time: '16:30',
        diagnosis: 'кариес',
        user: {
          fullname: 'Маня Попеску',
          phone: '+38 067 23783279',
          avatar: 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg',
        },
      },

      {
        time: '17:00',
        diagnosis: 'удаление 6 слева вверху',
        user: {
          fullname: 'Бари Алибасов',
          phone: '+38 095 8304893',
          avatar: 'http://avatarmaker.ru/img/11/1044/104357.jpg',
        },
      },
    ],
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '10:00',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Джек Смит',
          phone: '+38 045 8394802',
          avatar: 'http://avatarmaker.ru/img/11/1044/104363.jpg',
        },
      },

      {
        time: '12:30',
        diagnosis: 'кариес',
        user: {
          fullname: 'Маша Загорулько',
          phone: '+38 044 7364928',
          avatar: 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg',
        },
      },

      {
        time: '14:00',
        diagnosis: 'удаление 6 слева вверху',
        user: {
          fullname: 'Борис Журавлев',
          phone: '+38 073 5389923',
          avatar: 'http://avatarmaker.ru/img/11/1044/104357.jpg',
        },
      },
    ],
  },
  {
    title: '17 сентября',
    data: [
      {
        time: '9:00',
        diagnosis: 'удаление зубного камня',
        user: {
          fullname: 'Омельян Любищенко',
          phone: '+38 098 39376483',
          avatar: 'http://avatarmaker.ru/img/11/1041/104079.jpg',
        },
      },

      {
        time: '10:00',
        diagnosis: 'кариес б',
        user: {
          fullname: 'Людмила Нетудыхата',
          phone: '+38 068 2836749',
          avatar: 'http://avatarmaker.ru/img/11/1044/104350.jpg',
        },
      },

      {
        time: '14:00',
        diagnosis: 'удаление 3 слева вверху',
        user: {
          fullname: 'Нинель Капистка',
          phone: '+38 098 2937473',
          avatar: 'http://avatarmaker.ru/img/11/1044/104353.jpg',
        },
      },
    ],
  },
];

function HomeScreen({navigation}) {
  return (
    <Container>
      <SectionList
        style={{backgroundColor: 'white'}}
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <Appointment item={item} navigate={navigation.navigate} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>

    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
position: absolute;
right:25px;
bottom:25px;
align-items:center;
justify-content:center;
border-radius: 50px;
background: #2a86ff;
width: 64px;
height: 64px;

box-shadow:1px 3px 7px black;
`;

const Container = styled.View`
    flex: 1;
    /* margin-top:30px; */
    
    `;

export default HomeScreen;
