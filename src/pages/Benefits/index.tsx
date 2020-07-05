import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Header from '../../components/Header';

import { Container, BenefitsContainer, Benefit, BenefitText } from './styles';

const Benefits: React.FC = () => {
  return (
    <Container>
      <Header title="Meus Benefícios" />
      <BenefitsContainer>
        <Benefit>
          <IconCommunity
            name="truck"
            size={30}
            color="#357473"
            style={{ alignSelf: 'center' }}
          />
          <BenefitText>Frete Grátis</BenefitText>
        </Benefit>
        <Benefit>
          <Fontisto
            name="shopping-sale"
            size={30}
            color="#357473"
            style={{ alignSelf: 'center' }}
          />
          <BenefitText>10% de desconto</BenefitText>
        </Benefit>
      </BenefitsContainer>
    </Container>
  );
};

export default Benefits;
