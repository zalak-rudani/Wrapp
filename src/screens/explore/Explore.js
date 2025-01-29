import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';
import EmojiImageComp from '../../components/onboarding/EmojiImageComp';
import {colors} from '../../helpers/ColorConstant';

const Explore = props => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.main}>
        <EmojiImageComp source={constantImages.oneGogglesEmoji} />

        <Text style={styles.headText}>Explore locally</Text>
        <Text style={styles.paragraph}>
          {'Wrapp is currently only available \n in Italy and Spain.'}
        </Text>
      </View>

      <ButtonComp
        text={'Explore'}
        customStyle={{marginBottom: 52}}
        onPress={() => props.navigation.navigate('Onboarding')}
      />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headText: {
    fontSize: 32,
    fontWeight: '700',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 56,
  },

  paragraph: {
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 12,
  },
});
