import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Profile,
  Avatar,
  Name,
  Level,
  Stars,
  Byts,
  ButtonContainer,
  Button,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <Name>Ane Mendes</Name>
        <Level>Nivel 3</Level>
        <Stars>5</Stars>
        <Byts>3000</Byts>
      </Profile>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </Container>
  );
};

export default Dashboard;
