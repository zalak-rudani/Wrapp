import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import {colors} from '../../helpers/ColorConstant';
import {strings} from '../../helpers/StringConstant';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';
import EmojiImageComp from '../../components/onboarding/EmojiImageComp';

const Oops = props => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.main}>
        <EmojiImageComp source={constantImages.lady} />
        <Text style={styles.headText}>{strings.head.oops}</Text>
        <Text style={styles.paragraph}>
          <Text>{strings.paragraph.oops}</Text>
          <Text style={{color: colors.primary}}>
            {strings.paragraph.oopsEmail}
          </Text>
          <Text>{strings.paragraph.oops2}</Text>
        </Text>
      </View>
      <ButtonComp
        text={strings.button.tryAgain}
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
