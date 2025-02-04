import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../../helpers/ColorConstant';
import {strings} from '../../helpers/StringConstant';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';
import SignUpModalComp from '../../components/common/SignUpModalComp';

const SignUp = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.main}>
      <Image
        style={{...styles.main, marginBottom: 69}}
        source={constantImages.groupImage}
      />
      <ButtonComp
        text={strings.button.signUp}
        customStyle={styles.signButton}
        onPress={() => setModalVisible(true)}
      />

      <ButtonComp
        text={strings.button.createProfile}
        customStyle={styles.createButton}
      />
      <TouchableOpacity>
        <Text style={styles.policyText}>{strings.paragraph.signUp}</Text>
      </TouchableOpacity>

      <SignUpModalComp
        visible={modalVisible}
        backScreenOnPress={() => setModalVisible(false)}
        buttonOnPress={() => {
          setModalVisible(false);
          props.navigation.navigate('SignUpWithEmail');
        }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  policyText: {
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    marginLeft: 111,
    marginRight: 111,
    marginBottom: 34,
  },

  createButton: {
    width: 279,
    height: 64,
    backgroundColor: colors.white,
    borderWidth: 1,
    marginBottom: 58,
  },

  signButton: {
    width: 279,
    height: 64,
    marginBottom: 24,
  },
});
