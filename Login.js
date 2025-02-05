import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const setData = async () => {
    const user = {email: email, pass: pass};
    console.log('-=-=-', user);

    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const getData = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log('*-*-*-*', user);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32, margin: 20}}>Login</Text>
      <Text style={{fontSize: 15, margin: 20}}>Enter Email</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{borderWidth: 1, padding: 10}}
      />
      <Text style={{fontSize: 15, margin: 20}}>Enter Password</Text>
      <TextInput
        placeholder="Password"
        value={pass}
        onChangeText={text => setPass(text)}
        style={{borderWidth: 1, padding: 10}}
      />

      <Button
        title="LogIn"
        onPress={() => {
          setData(),
            getData(),
            props.route.params.logIn(email, pass),
            props.navigation.navigate('LogOut');
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
