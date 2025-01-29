import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Oops from '../screens/oops/Oops';
import Explore from '../screens/explore/Explore';
import Onboarding from '../screens/onboarding/Onboarding';
import SignUp from '../screens/auth/SignUp';
import SignUpEmail from '../screens/auth/SignUpEmail';
import fillLine from '../components/common/FillLine';
import MainInfo from '../screens/auth/MainInfo';
import SignUpWithEmail from '../screens/auth/SignUpWithEmail';
import Main2 from '../screens/auth/Main2';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Main2'} component={Main2} />
        {/* <Stack.Screen name={'Oops'} component={Oops} />
        <Stack.Screen name={'Explore'} component={Explore} />
        <Stack.Screen name={'Onboarding'} component={Onboarding} />
        <Stack.Screen name={'SignUp'} component={SignUp} /> */}
        {/* <Stack.Screen name={'SignUpWithEmail'} component={SignUpWithEmail} /> */}
        {/* <Stack.Screen name={'MainInfo'} component={MainInfo} /> */}
        {/* <Stack.Screen name={'fillLine'} component={fillLine} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
