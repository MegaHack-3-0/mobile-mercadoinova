import styled from 'styled-components/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #e7e6e5;
`;

export const Profile = styled.View`
  flex: 1;
`;

export const Avatar = styled.Image`
  margin-top: 10px;
  width: 136px;
  height: 136px;
  background: transparent;
  align-self: center;
  border-radius: 68px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
  color: #000;
`;

export const ProgressContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const ProgressText = styled.Text`
  position: absolute;
  font-family: 'Poppins-Medium';
  font-size: 18px;
  text-align: center;
  align-self: center;
`;

export const StarsContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const BytsContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
`;

export const Byts = styled.Text`
  margin-left: 10px;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  align-self: center;
  text-transform: uppercase;
  color: #000;
`;

export const ButtonContainer = styled.View`
  margin-top: 55px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  height: 49px;
  border-radius: 15px;
  background: #d1cfca;
  box-shadow: 0px 3px 6px rgba(90, 71, 71, 0.45);
  justify-content: center;
  margin-bottom: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  align-self: center;
  color: #000;
`;
