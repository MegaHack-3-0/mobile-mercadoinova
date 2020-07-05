import React from 'react';
import { Image } from 'react-native';

import smartphone from '../../assets/smartphone.png';
import laptop from '../../assets/laptop.png';

import Header from '../../components/Header';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  Title,
  ProductInfo,
  Info,
  InfoLabel,
  InfoValue,
  SellButton,
  SellButtonText,
} from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <Header title="Meus Produtos" page="Products" />
      <ProductList>
        <Product>
          <ProductImage source={smartphone} />
          <Title>Iphone 8</Title>
          <ProductInfo>
            <Info>
              <InfoLabel>garantia do fabricante</InfoLabel>
              <InfoValue>Restan 150 dias</InfoValue>
            </Info>
            <Info>
              <InfoLabel>Valor pago na compra</InfoLabel>
              <InfoValue>R$ 3.500,00</InfoValue>
            </Info>
            <Info>
              <InfoLabel>Valor médio de venda</InfoLabel>
              <InfoValue>R$ 2.500,00</InfoValue>
            </Info>
          </ProductInfo>
          <SellButton>
            <SellButtonText>Vender</SellButtonText>
          </SellButton>
        </Product>
        <Product>
          <ProductImage source={laptop} />
          <Title>laptop Dell</Title>
          <ProductInfo>
            <Info>
              <InfoLabel>garantia do fabricante</InfoLabel>
              <InfoValue>Restan 100 dias</InfoValue>
            </Info>
            <Info>
              <InfoLabel>Valor pago na compra</InfoLabel>
              <InfoValue>R$ 2.500,00</InfoValue>
            </Info>
            <Info>
              <InfoLabel>Valor médio de venda</InfoLabel>
              <InfoValue>R$ 2.000,00</InfoValue>
            </Info>
          </ProductInfo>
          <SellButton>
            <SellButtonText>Vender</SellButtonText>
          </SellButton>
        </Product>
      </ProductList>
    </Container>
  );
};

export default Products;
