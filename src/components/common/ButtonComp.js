import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../helpers/ColorConstant';

const ButtonComp = ({
  text,
  onPress,
  customStyle,
  source,
  miniImageStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <Image style={miniImageStyle} source={source} />
      <Text style={[styles.buttonText, textStyle]}> {text} </Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    height: 64,
    width: 171,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.primary,
  },

  buttonText: {
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    // color: 'red',
  },
});
