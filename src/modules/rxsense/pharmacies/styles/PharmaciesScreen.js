import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  padding: 20px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Info = styled.View`
  margin-left: 10px;
  width: 80%;
`;

export const ItemText = styled.Text`
  font-size: 16px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Logo = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 70px;
  height: 70px;
`;

export const ContainerLoading = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const LoadingText = styled.Text`
  font-size: 20px;
`;
