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
  let icon = '';

  switch (title) {
    case 'Minha Conta':
      buttonName = 'Editar';
      nextPage = 'Dashboard';
      icon = 'notifications';
      break;

    case 'Meus Produtos':
      buttonName = 'Cadastrar Produto';
      nextPage = 'NewProduct';
      icon = 'menu';
      break;

    case 'Meus Benefícios':
      icon = 'menu';
      break;

    case 'Meus Cupons':
      icon = 'menu';
      break;

    case 'Minhas Conquistas':
      icon = 'menu';
      break;

    case 'Cadastro de Produto':
      icon = 'arrow-back';
      break;

    default:
      break;
  }

  return (
    <Container>
      {title === 'Minha Conta' ? (
        <ButtonNotifications>
          <Icon name={icon} size={30} />
        </ButtonNotifications>
      ) : (
        <ButtonNotifications onPress={() => navigation.goBack()}>
          <Icon name={icon} size={30} />
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
