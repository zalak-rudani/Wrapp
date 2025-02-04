import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {TextInput} from 'react-native-paper';

import {colors} from '../../helpers/ColorConstant';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';

const Work = props => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image source={constantImages.vector} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text}>Location</Text>
      </View>
      <View style={{marginTop: 50}}>
        <TextInput
          style={styles.textInput}
          label={'Country'}
          value={country}
          theme={{colors: {primary: 'black'}}}
          onChangeText={text => setCountry(text)}></TextInput>
        <TextInput
          style={styles.textInput}
          theme={{colors: {primary: 'black'}}}
          label={'City'}
          value={city}
          onChangeText={text => setCity(text)}></TextInput>
      </View>
      <View style={styles.buttonView}>
        <ButtonComp
          customStyle={styles.button}
          text={'Confrim'}
          onPress={() => {
            props.route.params.onConfirm(`${city}, ${country}`);
            props.navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  image: {
    width: 8,
    height: 15,
    marginLeft: 32,
  },

  textView: {
    marginTop: 36,
    marginLeft: 32,
  },

  text: {
    fontSize: 32,
    fontWeight: '700',
  },

  textInput: {
    backgroundColor: colors.white,
    marginBottom: 40,
    marginHorizontal: 32,
    borderBottomWidth: 1,
  },

  button: {
    width: 311,
  },

  buttonView: {
    flex: 1,
    top: 361,
  },
});

export default Work;
