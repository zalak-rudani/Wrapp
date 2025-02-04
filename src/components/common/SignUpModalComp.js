import React from 'react';
import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';

import {colors} from '../../helpers/ColorConstant';
import {strings} from '../../helpers/StringConstant';
import ButtonComp from '../../components/common/ButtonComp';
import constantImages from '../../screens/constants/constantImages';

const SignUpModalComp = ({visible, backScreenOnPress, buttonOnPress}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Pressable onPress={backScreenOnPress} style={styles.modalArea}>
        <View style={styles.modalView}>
          <Text style={styles.bigText}>Sign up with</Text>
          <ButtonComp
            miniImageStyle={styles.miniImage}
            source={constantImages.email}
            text={strings.button.email}
            customStyle={styles.signUpWithButton}
            onPress={buttonOnPress}
          />

          <ButtonComp
            miniImageStyle={{...styles.miniImage, height: 22, width: 22}}
            source={constantImages.gmail}
            text={strings.button.gmail}
            customStyle={styles.signUpWithButton}
          />
          <ButtonComp
            miniImageStyle={{...styles.miniImage, height: 25, width: 22}}
            source={constantImages.apple}
            text={strings.button.apple}
            customStyle={{
              ...styles.signUpWithButton,
              backgroundColor: colors.black,
              // marginBottom: 32,
            }}
            textStyle={{
              color: 'white',
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default SignUpModalComp;

const styles = StyleSheet.create({
  modalView: {
    height: 390,
    width: 389,
    marginTop: 460,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  modalArea: {
    flex: 1,
    backgroundColor: '#00000090',
  },

  bigText: {
    fontWeight: '700',
    fontSize: 32,
    marginTop: 32,
    marginLeft: 32,
    marginBottom: 24,
  },

  signUpWithButton: {
    width: 311,
    height: 64,
    backgroundColor: colors.white,
    borderWidth: 1,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
  },

  miniImage: {
    width: 20,
    height: 16,
    marginRight: 16,
  },
});
