import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

import bytsImg from '../../assets/byts.png';

import Header from '../../components/Header';

import {
  Container,
  Profile,
  Avatar,
  Name,
  ProgressContainer,
  ProgressText,
  StarsContainer,
  BytsContainer,
  Byts,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Minha Conta" page="Profile" />
      <Profile>
        <Avatar
          source={{
            uri:
              'https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art.png',
          }}
        />
        <Name>Ane Mendes</Name>
        <ProgressContainer>
          <Progress.Bar
            progress={0.3}
            width={204}
            style={{
              backgroundColor: '#D1CFCA',
            }}
            height={38}
            borderRadius={15}
            borderWidth={0}
            color="#fcd496"
          />
          <ProgressText>Nível 3</ProgressText>
        </ProgressContainer>

        <StarsContainer>
          <Icon name="star" size={30} color="#ffc107" />
          <Icon name="star" size={30} color="#ffc107" />
          <Icon name="star" size={30} color="#ffc107" />
          <Icon name="star" size={30} color="#ffc107" />
          <Icon name="star" size={30} color="#ffc107" />
        </StarsContainer>
        <BytsContainer>
          <Image source={bytsImg} />
          <Byts>3000 byts</Byts>
        </BytsContainer>
      </Profile>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Products')}>
          <ButtonText>Meus produtos</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Benefits')}>
          <ButtonText>Meus Benefícios</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Coupon')}>
          <ButtonText>Comprar cupons</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Achievements')}>
          <ButtonText>Ver Minhas conquistas</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Dashboard;
