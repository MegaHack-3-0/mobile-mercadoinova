import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../../services/api';

import Header from '../../../components/Header';

import {
  Container,
  Form,
  Category,
  CategoryLabel,
  CategoryInput,
  Buttons,
  NFButton,
  ButtonText,
} from './styles';

const NewProduct: React.FC = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [factoryWarranty, setFactoryWarranty] = useState('');
  const [sellerWarranty, setSellerWarranty] = useState('');

  const data = {
    category,
    brand,
    model,
    purchaseDate,
    purchasePrice,
    factoryWarranty,
    sellerWarranty,
  };

  async function handleCreateNewProduct(): Promise<void> {
    const response = await api.post('/products', data);

    if (response.status === 200) {
      Alert.alert(
        'Produto cadastrado',
        'Seu produto foi cadastrado com sucesso!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );

      setTimeout(() => {
        navigation.navigate('Dashboard');
      }, 1000);
    } else {
      Alert.alert(
        'Falha no cadatro',
        'Seu produto não foi cadastrado, tente novamente mais tarde!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  }

  return (
    <Container>
      <Header title="Cadastro de Produto" />
      <Form>
        <Category>
          <CategoryLabel>Categoria</CategoryLabel>
          <CategoryInput
            placeholder="ex: Smartphone"
            onChangeText={(text) => setCategory(text)}
            defaultValue={category}
          />
        </Category>
        <Category>
          <CategoryLabel>Marca</CategoryLabel>
          <CategoryInput
            placeholder="ex: Apple"
            onChangeText={(text) => setBrand(text)}
            defaultValue={brand}
          />
        </Category>
        <Category>
          <CategoryLabel>Modelo</CategoryLabel>
          <CategoryInput
            placeholder="ex: Iphone 9"
            onChangeText={(text) => setModel(text)}
            defaultValue={model}
          />
        </Category>
        <Category>
          <CategoryLabel>Data de compra</CategoryLabel>
          <CategoryInput
            placeholder="ex: 10/10/2020"
            onChangeText={(text) => setPurchaseDate(text)}
            defaultValue={purchaseDate}
          />
        </Category>
        <Category>
          <CategoryLabel>Valor Pago</CategoryLabel>
          <CategoryInput
            placeholder="ex: 4.500,00"
            onChangeText={(text) => setPurchasePrice(text)}
            defaultValue={purchasePrice}
          />
        </Category>
        <Category>
          <CategoryLabel>Garantia do fabricante</CategoryLabel>
          <CategoryInput
            placeholder="ex: 365"
            onChangeText={(text) => setFactoryWarranty(text)}
            defaultValue={factoryWarranty}
          />
        </Category>
        <Category>
          <CategoryLabel>Garantia da loja</CategoryLabel>
          <CategoryInput
            placeholder="ex: 90"
            onChangeText={(text) => setSellerWarranty(text)}
            defaultValue={sellerWarranty}
          />
        </Category>
        <Buttons>
          <NFButton>
            <ButtonText>NFe</ButtonText>
          </NFButton>
          <NFButton onPress={handleCreateNewProduct}>
            <ButtonText>Cadastrar</ButtonText>
          </NFButton>
        </Buttons>
      </Form>
    </Container>
  );
};

export default NewProduct;
