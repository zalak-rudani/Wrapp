import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Oops from '../screens/oops/Oops';
import Work from '../screens/auth/Work';
import SignUp from '../screens/auth/SignUp';
import MainInfo from '../screens/auth/MainInfo';
import Explore from '../screens/explore/Explore';
import Onboarding from '../screens/onboarding/Onboarding';
import SignUpWithEmail from '../screens/auth/SignUpWithEmail';

import Async from '../../AsyncStorage';
import Login from '../../Login';
import LogOut from '../../LogOut';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={'Oops'} component={Oops} />
        <Stack.Screen name={'Explore'} component={Explore} />
        <Stack.Screen name={'Onboarding'} component={Onboarding} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'SignUpWithEmail'} component={SignUpWithEmail} />
        <Stack.Screen name={'MainInfo'} component={MainInfo} />
        <Stack.Screen name={'Work'} component={Work} /> */}
        {/* <Stack.Screen name={'Async'} component={Async} /> */}
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'LogOut'} component={LogOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
