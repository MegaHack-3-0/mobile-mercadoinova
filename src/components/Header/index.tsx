import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ButtonNotifications,
  Title,
  Button,
  ButtonText,
} from './styles';

interface Props {
  title: string;
  page?: string;
}

const Header: React.FC<Props> = ({ title, page }) => {
  const navigation = useNavigation();
  let buttonName = '';
  let nextPage = '';

  switch (page) {
    case 'Profile':
      buttonName = 'Editar';
      nextPage = 'Dashboard';
      break;

    case 'Products':
      buttonName = 'Cadastrar Produto';
      nextPage = 'NewProduct';
      break;

    default:
      break;
  }

  return (
    <Container>
      {title === 'Minha Conta' ? (
        <ButtonNotifications>
          <Icon name="notifications" size={30} />
        </ButtonNotifications>
      ) : (
        <ButtonNotifications onPress={() => navigation.goBack()}>
          <Icon name="menu" size={30} />
        </ButtonNotifications>
      )}
      <Title>{title}</Title>
      <Button onPress={() => navigation.navigate(nextPage)}>
        <ButtonText>{buttonName}</ButtonText>
      </Button>
    </Container>
  );
};

export default Header;
