import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';

import {colors} from '../../helpers/ColorConstant';
import {strings} from '../../helpers/StringConstant';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';
import EmojiImageComp from '../../components/onboarding/EmojiImageComp';

const Onboarding = props => {
  const [index, setIndex] = useState(0);

  const changeIndex = () => {
    if (index == 0) {
      setIndex(1);
    }
    if (index == 1) {
      setIndex(2);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      {index < 2 && (
        <TouchableOpacity
          style={styles.skip}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.skipText}>{strings.other.skip}</Text>
          <Image style={styles.arrow} source={constantImages.arrow} />
        </TouchableOpacity>
      )}

      <Swiper
        index={index}
        loop={false}
        onIndexChanged={setIndex}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        <View style={styles.main}>
          <View style={styles.main}>
            <EmojiImageComp source={constantImages.starEye} />

            <Text style={styles.headText}>{strings.head.onBoarding1}</Text>
            <Text style={styles.paragraph}>
              {strings.paragraph.onBoarding1}
            </Text>
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.main}>
            <EmojiImageComp
              source={constantImages.bdayFace}
              backgroundColor={{backgroundColor: colors.lightYellow}}
            />
            <Text style={styles.headText}>{strings.head.onBoarding2}</Text>
            <Text style={styles.paragraph}>
              {strings.paragraph.onBoarding2}
            </Text>
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.main}>
            <EmojiImageComp
              source={constantImages.heartFace}
              backgroundColor={{backgroundColor: colors.lightPurpule}}
              customStyle={{marginTop: 110}}
            />
            <Text style={styles.headText}>{strings.head.onBoarding3}</Text>
            <Text style={styles.paragraph}>
              {strings.paragraph.onBoarding3}
            </Text>
          </View>
        </View>
      </Swiper>

      {index < 2 ? (
        <ButtonComp
          text={strings.button.continue}
          onPress={() => changeIndex()}
          customStyle={{marginBottom: 52}}
        />
      ) : (
        <ButtonComp
          text={strings.button.explore}
          onPress={() => props.navigation.navigate('SignUp')}
          customStyle={{marginBottom: 52}}
        />
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

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

  skip: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 26,
    flexDirection: 'row',
  },

  arrow: {
    width: 15,
    height: 10,
  },

  skipText: {
    fontSize: 15,
    fontWeight: '700',
    marginRight: 10,
  },

  dot: {
    backgroundColor: 'lightgrey',
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    bottom: 200,
    zIndex: 99,
  },

  activeDot: {
    backgroundColor: colors.black,
    width: 17,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    bottom: 200,
  },
});
