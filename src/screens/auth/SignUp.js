import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../helpers/ColorConstant';
import constantImages from '../constants/constantImages';
import ButtonComp from '../../components/common/ButtonComp';

const SignUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.main}>
      <Image
        style={{...styles.main, marginBottom: 69}}
        source={constantImages.groupImage}
      />
      <ButtonComp
        text={'Sign Up'}
        customStyle={styles.signButton}
        onPress={() => setModalVisible(true)}
      />

      <ButtonComp
        text={'Create your profile'}
        customStyle={styles.createButton}
      />
      <TouchableOpacity>
        <Text style={styles.policyText}> Terms & Privacy Policy </Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.bigText}>Sign up with</Text>
            <ButtonComp
              miniImageStyle={styles.miniImage}
              source={constantImages.email}
              text={'Email'}
              customStyle={styles.signUpWithButton}
            />

            <ButtonComp
              miniImageStyle={{...styles.miniImage, height: 22, width: 22}}
              source={constantImages.gmail}
              text={'Gmail'}
              customStyle={styles.signUpWithButton}
            />
            <ButtonComp
              miniImageStyle={{...styles.miniImage, height: 25, width: 22}}
              source={constantImages.apple}
              text={'Sign Up with Apple'}
              customStyle={{
                ...styles.signUpWithButton,
                backgroundColor: colors.black,
              }}
              textStyle={{
                color: 'white',
              }}
            />
          </View>
        </Pressable>
      </Modal>
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
    // marginTop: 58,
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
    // marginTop:84
    marginBottom: 24,
  },

  modalView: {
    height: 390,
    width: 389,
    marginTop: 460,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  centeredView: {
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
