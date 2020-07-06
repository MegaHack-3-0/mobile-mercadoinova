import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { differenceInCalendarDays } from 'date-fns';
import api from '../../services/api';

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

const sellButtonAlert = (): void =>
  Alert.alert(
    'Vender produto',
    'Seu anúncio foi criado, acesse o Mercado Libre, revise e publique seu anúncio',
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false },
  );

interface ProductAPI {
  category: string;
  model: string;
  purchaseDate: number;
  factoryWarranty: number;
  purchasePrice: number;
  avaregaSellingPrice: number;
  purchaseDateAsString: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductAPI[]>([]);

  function dateConverter(): void {
    products.map;
  }

  useEffect(() => {
    async function getProductList(): Promise<void> {
      const response = await api.get('/products');

      const productList: ProductAPI[] = response.data;

      console.log(productList);
      setProducts(response.data);
    }
    getProductList();
  }, []);

  return (
    <Container>
      <Header title="Meus Produtos" page="Products" />
      <ProductList
        data={products}
        renderItem={({ item }: { item: ProductAPI }) => (
          <Product>
            <ProductImage
              source={item.category === 'Smartphone' ? smartphone : laptop}
            />
            <Title>{item.model}</Title>
            <ProductInfo>
              <Info>
                <InfoLabel>garantia do fabricante</InfoLabel>
                <InfoValue>Restam {item.factoryWarranty} dias</InfoValue>
              </Info>
              <Info>
                <InfoLabel>Valor pago na compra</InfoLabel>
                <InfoValue>R$ {item.purchasePrice}</InfoValue>
              </Info>
              <Info>
                <InfoLabel>Valor médio de venda</InfoLabel>
                <InfoValue>R$ {item.avaregaSellingPrice}</InfoValue>
              </Info>
            </ProductInfo>
            <SellButton onPress={sellButtonAlert}>
              <SellButtonText>Vender</SellButtonText>
            </SellButton>
          </Product>
        )}
        keyExtractor={(item) => `${item.purchaseDate}`}
      />
    </Container>
  );
};

export default Products;
