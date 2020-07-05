import React from 'react';
import { Image } from 'react-native';

import bytsImg from '../../assets/byts.png';

import Header from '../../components/Header';

import {
  Container,
  CouponList,
  CouponItem,
  BytsContainer,
  CouponValue,
  CouponText,
} from './styles';

const Coupon: React.FC = () => {
  return (
    <Container>
      <Header title="Meus Cupons" />
      <CouponList>
        <BytsContainer>
          <Image source={bytsImg} />
          <CouponValue>1000 byts</CouponValue>
        </BytsContainer>
        <CouponItem>
          <CouponText>10% de desconto na compra de smartwatch</CouponText>
        </CouponItem>
      </CouponList>
    </Container>
  );
};

export default Coupon;
