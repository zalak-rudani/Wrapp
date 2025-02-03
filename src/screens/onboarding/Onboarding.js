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
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';
import EmojiImageComp from '../../components/onboarding/EmojiImageComp';

const Onboarding = props => {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.main}>
      <Swiper
        index={index}
        loop={false}
        onIndexChanged={setIndex}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        <View style={styles.main}>
          <View style={styles.main}>
            <TouchableOpacity
              style={styles.skip}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.skipText}> Skip </Text>
              <Image style={styles.arrow} source={constantImages.arrow} />
            </TouchableOpacity>
            <EmojiImageComp source={constantImages.starEye} />

            <Text style={styles.headText}>Make new friends</Text>
            <Text style={styles.paragraph}>
              {
                'Wrapp helps you truly connect with cool \npeople in your area that share the same \ninterests as you'
              }
            </Text>
          </View>
          {/* 
          <ButtonComp
            text={'Continue'}
            onPress={() => setIndex(1)}
            customStyle={{marginBottom: 52}}
          /> */}
        </View>

        <View style={styles.main}>
          <View style={styles.main}>
            <TouchableOpacity
              style={styles.skip}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.skipText}> Skip </Text>
              <Image style={styles.arrow} source={constantImages.arrow} />
            </TouchableOpacity>
            <EmojiImageComp
              source={constantImages.bdayFace}
              backgroundColor={{backgroundColor: colors.lightYellow}}
            />

            <Text style={styles.headText}>Find new events</Text>
            <Text style={styles.paragraph}>
              {
                'Wrapp up your week with a fun event \nin your area or even create your own!'
              }
            </Text>
          </View>
          {/* 
          <ButtonComp
            text={'Continue'}
            onPress={() => setIndex(2)}
            customStyle={{marginBottom: 52}}
          /> */}
        </View>

        <View style={styles.main}>
          <View style={styles.main}>
            <EmojiImageComp
              source={constantImages.heartFace}
              backgroundColor={{backgroundColor: '#E9E6FC'}}
              customStyle={{marginTop: 110}}
            />

            <Text style={styles.headText}>Let's begin!</Text>
            <Text style={styles.paragraph}>
              {'Kick off your experience \nby exploring the app'}
            </Text>
          </View>
          {/* 
          <ButtonComp
            text={'Explore'}
            onPress={() => props.navigation.navigate('SignUp')}
            customStyle={{marginBottom: 52}}
          /> */}
        </View>
      </Swiper>
      <ButtonComp
        text={'Continue'}
        onPress={() => setIndex(1)}
        customStyle={{marginBottom: 52}}
      />
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
    bottom: 330,
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
    bottom: 330,
  },
});
