import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';
import EmojiImageComp from '../../components/onboarding/EmojiImageComp';
import {colors} from '../../helpers/ColorConstant';
// import constantImages from '../constants/image';

const Oops = props => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.main}>
        <EmojiImageComp source={constantImages.lady} />

        <Text style={styles.headText}>Oops!</Text>
        <Text style={styles.paragraph}>
          <Text>
            {
              'You’ve encountered an issue. Try refreshing \n the page, and if this error persists, please \ncontact us at '
            }
          </Text>
          <Text style={{color: '#FAA8D1'}}>hello@wrapp.co</Text>
          <Text>{' and we’ll get\n back to you ASAP!'}</Text>
        </Text>
      </View>

      <ButtonComp
        text={'Try again'}
        onPress={() => props.navigation.navigate('Explore')}
        customStyle={{marginBottom: 52}}
      />
    </SafeAreaView>
  );
};

export default Oops;

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
