import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Async = () => {
  const [name, setName] = useState('');
  const [add, setAdd] = useState('');
  const [num, setNum] = useState('');

  const setData = async () => {
    const user = {name: name, add: add, num: num};
    {
      console.log('-=-=-=-', user);
    }
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    console.warn('*-*-*-*-*', name);
  };

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Address"
        style={styles.textInput}
        value={add}
        onChangeText={text => setAdd(text)}
      />
      <TextInput
        placeholder="Number"
        style={styles.textInput}
        value={num}
        onChangeText={text => setNum(text)}
      />

      <Button title="Set Data" onPress={() => setData()} />
      <Button title="Get Data" onPress={() => getData()} />
    </View>
  );
};

export default Async;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 100,
  },

  textInput: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
