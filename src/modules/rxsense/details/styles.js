import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 22px;
`;

export const Option = styled.View`
  margin-bottom: 20px;
`;

export const OptionInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  font-size: 18px;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: #111;
  font-weight: bold;
`;

export const Scroll = styled.ScrollView`
  margin-top: 20px;
`;

export const CouponButton = styled.TouchableOpacity`
  background: #111;
  padding: 10px;
`;

export const CouponLabel = styled.Text`
  font-size: 18px;
  color: #fff;
`;
