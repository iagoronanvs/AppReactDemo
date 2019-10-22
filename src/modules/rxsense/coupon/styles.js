import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #111;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background: #111;
  padding: 15px;
  margin-top: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Label = styled.Text`
  color: red;
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerCoupon = styled.View`
  border-width: 2px;
  border-style: dashed;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
`;

export const HeaderCoupon = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #111;
  padding-bottom: 10px;
`;

export const InfoPrice = styled.View`
  width: 30%;
`;

export const LabelPrice = styled.Text`
  font-size: 18px;
  color: green;
  font-weight: bold;
  text-align: right;
`;

export const DescriptionPrice = styled.Text`
  font-size: 12px;
  text-align: right;
`;

export const LabelString = styled.Text`
  font-size: 18px;
`;

export const LabelDesc = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const LabelCoupon = styled.Text`
  font-size: 18px;
  font-weight: bold;
  width: 70%;
`;

export const DataView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

