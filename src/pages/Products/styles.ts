import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #e7e6e5;
`;

export const ProductList = styled(FlatList)``;

export const Product = styled.View`
  margin-top: 15px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  padding-top: 10px;
  width: 120px;
  height: 120px;
  border-radius: 15px;
  background: #982649;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: #000;
`;

export const ProductInfo = styled.View`
  margin-top: 10px;
`;

export const Info = styled.View`
  padding: 5px;
  margin-top: 5px;
  justify-content: space-between;
  flex-direction: row;
  width: 368px;
  height: 27px;
  border-radius: 9px;
  background: #d1cfca;
`;
export const InfoLabel = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  color: #000;
`;

export const InfoValue = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 12px;
  text-align: right;
  color: #000;
`;

export const SellButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-self: center;
  justify-content: center;
  width: 90px;
  height: 32px;
  border-radius: 16px;
  background: #357473;
`;

export const SellButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 11px;
  text-align: center;
  color: #fff;
`;
