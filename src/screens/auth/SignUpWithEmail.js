import {
  Image,
  StyleSheet,
  Text,
  //TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../helpers/ColorConstant';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComp from '../../components/common/ButtonComp';
import FillLine from '../../components/common/FillLine';
import constantImages from '../constants/constantImages';
import {TextInput} from 'react-native-paper';

const SignUpWithEmail = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [passEr, setPassEr] = useState(false);
  const [confirmPassEr, setConfirmPassEr] = useState(false);
  const [emailEr, setEmailEr] = useState(false);

  const confirmPassValidation = val => {
    if (val.length === 0) {
      setConfirmPassEr('Confirm password must be enter');
    } else if (val !== password) {
      setConfirmPassEr('Passwords do NOT match');
    } else if (val === password) {
      setConfirmPassEr('');
    }
  };

  const passValidation = val => {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (val.length === 0) {
      setPassEr('password must be enter');
    } else if (reg.test(val) === false) {
      setPassEr(
        'password must contain eight characters including one or more uppercase letter and one number or special character. ',
      );
    } else if (reg.test(val) === true) {
      setPassEr('');
    }
  };

  const emailValidation = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailEr('Email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailEr('Enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailEr('');
    }
  };
  return (
    <View style={styles.main}>
      <FillLine onPress={() => props.navigation.goBack()} />
      <Text style={styles.bigText}>Sign up with email</Text>

      <View style={styles.viewBox}>
        <TextInput
          label={'Email'}
          style={styles.textInput}
          activeUnderlineColor="black"
          keyboardType="email-address"
          // selectionColor="red"
          // placeholder="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            emailValidation(text);
          }}
        />

        {emailEr ? <Text style={styles.error}>{emailEr}</Text> : null}
      </View>

      <View style={styles.viewBox}>
        <View style={styles.textInput}>
          <TextInput
            style={{flex: 1, backgroundColor: colors.white}}
            label={'Password'}
            activeUnderlineColor="black"
            //   underlineColor="black"
            //   placeholder="Password"
            //   dense={true}
            rippleColor="red"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={text => {
              setPassword(text);
              passValidation(text);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}>
            <Image
              style={styles.image}
              source={
                passwordVisible ? constantImages.unhide : constantImages.hide
              }></Image>
          </TouchableOpacity>
        </View>
        {passEr ? <Text style={styles.error}>{passEr}</Text> : null}
      </View>
      <View style={styles.viewBox}>
        <View style={styles.textInput}>
          <TextInput
            style={{flex: 1, backgroundColor: colors.white}}
            label={'Confirm Password'}
            activeUnderlineColor="black"
            secureTextEntry={!confirmPasswordVisible}
            //   placeholder="Confirm Password"
            onSubmitEditing={() => {
              if (confirmPass != password) {
                setPassEr(true);
              } else {
                setPassEr(false);
              }
            }}
            value={confirmPass}
            onChangeText={text => {
              setConfirmPass(text);
              confirmPassValidation(text);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setConfirmPasswordVisible(!confirmPasswordVisible);
            }}>
            <Image
              style={styles.image}
              source={
                confirmPasswordVisible
                  ? constantImages.unhide
                  : constantImages.hide
              }></Image>
          </TouchableOpacity>
        </View>
        {confirmPassEr ? (
          <Text style={styles.error}>{confirmPassEr}</Text>
        ) : null}
      </View>

      <ButtonComp
        text={'Continue'}
        customStyle={styles.Button}
        onPress={() => {
          if (emailEr || passEr || confirmPassEr) {
            if (emailEr) {
              setEmailEr(true);
            }
            if (passEr) {
              setPassEr(true);
            }
            if (confirmPassEr) {
              setConfirmPassEr(true);
            }
          } else {
            props.navigation.navigate('Main2');
          }
        }}
      />
    </View>
  );
};

export default SignUpWithEmail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  bigText: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 32,
    marginBottom: 38,
  },

  textInput: {
    marginLeft: 32,
    marginRight: 32,
    paddingBottom: 6,
    // borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },

  viewBox: {
    marginBottom: 40,
  },

  Button: {
    width: 311,
    height: 64,
    // marginTop:84
    marginBottom: 24,
  },

  image: {
    width: 20,
    height: 14,
  },

  error: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 32,
    marginTop: 2,
  },
});
// const validatePassword = input => {
//   let newSuggestions = [];
//   if (input.length < 8) {
//     newSuggestions.push('Password should be at least 8 characters long');
//   }
//   if (!/\d/.test(input)) {
//     newSuggestions.push('Add at least one number');
//   }

//   if (!/[A-Z]/.test(input) || !/[a-z]/.test(input)) {
//     newSuggestions.push('Include both upper and lower case letters');
//   }

//   if (!/[^A-Za-z0-9]/.test(input)) {
//     newSuggestions.push('Include at least one special character');
//   }

//   setSuggestions(newSuggestions);

//   if (newSuggestions.length === 0) {
//     setStrength('Very Strong');
//   } else if (newSuggestions.length <= 1) {
//     setStrength('Strong');
//   } else if (newSuggestions.length <= 2) {
//     setStrength('Moderate');
//   } else if (newSuggestions.length <= 3) {
//     setStrength('Weak');
//   } else {
//     setStrength('Too Weak');
//   }
// };
