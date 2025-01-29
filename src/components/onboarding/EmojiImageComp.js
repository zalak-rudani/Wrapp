import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const EmojiImageComp = ({source, backgroundColor, customStyle}) => {
  return (
    <View style={[styles.round, backgroundColor, customStyle]}>
      <Image style={styles.image} source={source} />
    </View>
  );
};

export default EmojiImageComp;

const styles = StyleSheet.create({
  round: {
    height: 262,
    width: 262,
    backgroundColor: '#FCE6E9',
    marginTop: 91,
    borderRadius: 131,
    alignSelf: 'center',
  },

  image: {
    width: 118,
    height: 113,
    alignSelf: 'center',
    marginTop: 71,
    // shadowOpacity:50,
    // shadowColor:'red'
  },
});
