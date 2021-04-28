import React from 'react';
import {Text, View, SectionList} from 'react-native';
import styled from 'styled-components/native';
import {Appointment, SectionTitle} from './components';

export default function App () {
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
            avatar: 'http://avatarmaker.ru/img/11/1044/104363.jpg',
          },
        },

        {
          time: '16:30',
          diagnosis: 'кариес',
          user: {
            fullname: 'Маня Попеску',
            avatar: 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg',
          },
        },

        {
          time: '17:00',
          diagnosis: 'удаление 6 слева вверху',
          user: {
            fullname: 'Бари Алибасов',
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
            fullname: 'Джон Сильверов',
            avatar: 'http://avatarmaker.ru/img/11/1044/104363.jpg',
          },
        },

        {
          time: '12:30',
          diagnosis: 'кариес',
          user: {
            fullname: 'Маня Попеску',
            avatar: 'https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg',
          },
        },

        {
          time: '14:00',
          diagnosis: 'удаление 6 слева вверху',
          user: {
            fullname: 'Бари Алибасов',
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
            avatar: 'http://avatarmaker.ru/img/11/1044/104344.gif',
          },
        },

        {
          time: '10:00',
          diagnosis: 'кариес б',
          user: {
            fullname: 'Маня Попеску',
            avatar: 'http://avatarmaker.ru/img/11/1044/104352.gif',
          },
        },

        {
          time: '14:00',
          diagnosis: 'удаление 3 слева вверху',
          user: {
            fullname: 'Нинель Капистка',
            avatar: 'http://avatarmaker.ru/img/11/1044/104353.jpg',
          },
        },
      ],
    },
  ];

  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Appointment {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />

    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    margin-top:30px;
    /* padding-left:20px; */
    `;
