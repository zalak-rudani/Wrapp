import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../helpers/ColorConstant';
import constantImages from '../constants/constantImages';
import {Button, TextInput} from 'react-native-paper';
import ButtonComp from '../../components/common/ButtonComp';

// create a component
const Work = props => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  console.log('**************', props.route.params);

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

// define your styles
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
    // justifyContent: 'flex-end',
    // marginBottom: 56,
  },
});

//make this component available to the app
export default Work;
