import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../helpers/ColorConstant';
import React from 'react';

const ModalComp = ({data, onPress}) => {
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>;
        }}
      />
    </View>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  button: {
    width: 311,
    height: 64,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
  },

  text: {
    fontSize: 15,
    fontWeight: '700',
  },
});
