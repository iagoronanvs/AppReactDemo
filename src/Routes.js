import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import SplashScreen from './modules/splash/SplashScreen';
import HomeScreen from './modules/home/HomeScreen';

const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="splash" component={SplashScreen} hideNavBar/>
            <Scene key="home" component={HomeScreen} hideNavBar/>
        </Stack>
    </Router>
);

export default Routes;