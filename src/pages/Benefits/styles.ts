import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #e7e6e5;
`;

export const BenefitsContainer = styled.View`
  margin-top: 15px;
  background: #e7e6e5;
  align-content: space-between;
  justify-content: center;
`;

export const Benefit = styled.View`
  height: 70px;
  flex-direction: row;
  border: 1px solid #357473;
  border-radius: 15px;
  justify-content: center;
  align-content: center;
  margin-bottom: 10px;
  background: #e7e6e5;
`;

export const BenefitText = styled.Text`
  margin-left: 40px;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  align-self: center;
  color: #357473;
`;
