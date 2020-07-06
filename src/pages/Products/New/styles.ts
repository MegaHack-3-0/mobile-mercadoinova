import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #e7e6e5;
`;

export const Form = styled.View`
  margin-top: 10px;
`;

export const Category = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const CategoryLabel = styled.Text`
  padding: 10px;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #000;
`;

export const CategoryInput = styled.TextInput`
  width: 163px;
  height: 44px;
  border-radius: 5px;
  background: #e7e6e5;
  border: 1px solid #d2d2d2;
`;

export const Buttons = styled.View`
  justify-content: space-between;
  margin-top: 40px;
  flex-direction: row;
`;

export const NFButton = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
  width: 166px;
  height: 38px;
  background: transparent;
  background: #357473;
  border-radius: 15px;
`;
export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  text-align: center;
`;
