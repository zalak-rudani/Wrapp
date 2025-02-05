import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOut = () => {
  const removeData = async () => {
    await AsyncStorage.removeItem('email', 'pass');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32}}>Home Screen</Text>
      <Text>{logIn}</Text>
      <Button
        title="LOG OUT"
        onPress={() =>
          props.navigation.navigate('Login', {
            logIn: () => {
              removeData();
            },
          })
        }
      />
    </View>
  );
};

export default LogOut;

const styles = StyleSheet.create({});
