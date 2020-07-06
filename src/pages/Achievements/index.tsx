import React from 'react';
import { Text } from 'react-native';

import Header from '../../components/Header';

import { Container } from './styles';

const Achievements: React.FC = () => {
  return (
    <Container>
      <Header title="Minhas Conquistas" />
    </Container>
  );
};

export default Achievements;
