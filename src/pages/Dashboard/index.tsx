import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

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

interface API {
  name: string;
  experience: number;
  stars: number;
  byts: number;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<API>({} as API);
  const navigation = useNavigation();

  useEffect(() => {
    async function getUserApi(): Promise<void> {
      const response = await api.get('/users');
      const userAPI: API = response.data;
      setUser(userAPI);

      console.log('response', response.data);
    }
    getUserApi();
  }, []);

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
        <Name>{user.name}</Name>
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
        </StarsContainer>
        <BytsContainer>
          <Image source={bytsImg} />
          <Byts>{user.byts}</Byts>
        </BytsContainer>
      </Profile>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Products')}>
          <ButtonText>Meus Produtos</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Benefits')}>
          <ButtonText>Meus Benefícios</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Coupon')}>
          <ButtonText>Comprar Cupons</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Achievements')}>
          <ButtonText>Minhas Conquistas</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Dashboard;
