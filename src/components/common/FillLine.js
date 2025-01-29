import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../helpers/ColorConstant';
import constantImages from '../../screens/constants/constantImages';

const FillLine = ({filling}) => {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity>
        <Image style={styles.vector} source={constantImages.vector} />
      </TouchableOpacity>
      <View style={styles.outer}>
        <View style={[styles.inner, filling]}> </View>
      </View>
    </SafeAreaView>
  );
};

export default FillLine;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },

  outer: {
    height: 24,
    width: 279,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'lightgrey',
  },

  inner: {
    height: 18,
    width: 68,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 2,
    marginVertical: 2,
  },

  vector: {
    width: 8,
    height: 15,
    marginLeft: 32,
    marginRight: 24,
  },
});
