import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
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

export const ContainerSearch = styled.View`
  flex-direction: row;
  padding: 0 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #222;
`;

export const SearchInput = styled.TextInput`
  width: 80%;
  font-size: 22px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 20%;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.View`
  padding: 20px 20px;
  background: #2A292A;
`;

export const HeaderText = styled.Text`
  font-size: 22px;
  width: 80%;
  color: #fff;
`;

export const OptionInfo = styled.View`
  width: 80%;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #222;
  padding: 20px 20px;
`;

export const OptionText = styled.Text`
  font-size: 22px;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: 22px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  text-align: justify;
`;

export const Price = styled.Text`
  font-size: 22px;
  margin-left: 5px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Locate = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 15px 0px;
  margin-top: 20px;
  background: #222;
  border-radius: 3px;
`;

export const LocateText = styled.Text`
  font-size: 22px;
  color: #fff;
`;

