import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import ExampleScreen from './modules/example/ExampleScreen';
import AnimationScreen from './modules/animation/AnimationScreen';

import SplashScreen from './modules/splash/SplashScreen';
import HomeScreen from './modules/home/HomeScreen';
import RegisterScreen from './modules/register/RegisterScreen';
import LoginScreen from './modules/login/LoginScreen';
import UserScreen from './modules/users/UserScreen';

import MenuScreen from './modules/rxsense/menu/MenuScreen';
import PharmaciesScreen from './modules/rxsense/pharmacies/PharmaciesScreen';

import Search from './modules/rxsense/search';
import Details from './modules/rxsense/details';
import Coupon from './modules/rxsense/coupon';

import Test from './modules/test';

const Routes = () => (
    <Router>
        <Stack key="root">
          <Scene key="test" component={Test} title="AWS Mobile Hub - StreamingR10"/>

          <Scene key="seacrh" component={Search} title="Search Drugs"/>
          <Scene key="details" component={Details} title="Details Drug"/>
          <Scene key="coupon" component={Coupon} title="Get Coupon"/>

          <Scene key="example" component={ExampleScreen} hideNavBar/>
          <Scene key="menu" component={MenuScreen} hideNavBar/>
          <Scene key="pharmacies" component={PharmaciesScreen} title="Pharmacies" />
          <Scene key="animation" component={AnimationScreen} hideNavBar/>
          <Scene key="user" component={UserScreen} title="Usuários"/>
          <Scene key="splash" component={SplashScreen} hideNavBar/>
          <Scene key="register" component={RegisterScreen} hideNavBar/>
          <Scene key="login" component={LoginScreen} hideNavBar/>
          <Scene key="home" component={HomeScreen} hideNavBar/>
        </Stack>
    </Router>
);

export default Routes;
