import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Info, BottomContainer, Photo, DefaultContainer } from './styles/AnimationScreen';
import Styles from '../../util/Styles';
import pathImage from '../../assets/imgs/image.jpg';

export default function AnimationScreen() {
    
    let offset = 0;
    const translateY = new Animated.Value(0);
    
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY
                }
            }
        ],
        {
            useNativeDriver: true
        }
    );

    function onHandlerStateChange(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY <= -30) {
                opened = true;
            }else{
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? -230 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                offset = opened ? -230 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });

        }
    }

    return (
        <Container>
            <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange}>
                <BottomContainer style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [-230, 0],
                            outputRange: [-230, 0],
                            extrapolate: 'clamp'
                        })
                    }]
                }}>
                    <DefaultContainer>
                        <Icon name="keyboard-arrow-up" size={25} color={Styles.Colors.White} />
                    </DefaultContainer>
                    <Info>Arraste para cima</Info>
                    <DefaultContainer 
                        style={{
                            opacity: translateY.interpolate({
                                inputRange: [-230, 0],
                                outputRange: [1, 0]
                            })
                        }}
                    >
                        <Photo source={pathImage} />
                    </DefaultContainer>
                </BottomContainer>
            </PanGestureHandler>
        </Container>
    );
}