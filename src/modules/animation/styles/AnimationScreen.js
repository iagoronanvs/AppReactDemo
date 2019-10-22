import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components';

import Styles from '../../../util/Styles';

const dimensions = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: ${Styles.Colors.Primary};
    align-items: center;
`;

export const BottomContainer = styled(Animated.View)`
    align-items: center;
    position: absolute;
    top: ${dimensions.height * 0.88};
`;

export const Info = styled.Text`
    color: ${Styles.Colors.White};
    font-size: ${Styles.Size.default}px;
`;

export const DefaultContainer = styled(Animated.View)``;

export const Photo = styled.Image`
    width: ${dimensions.width * 0.9};
    height: 200px;
    margin-top: 20px;
`;