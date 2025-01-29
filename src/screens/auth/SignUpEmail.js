import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../helpers/ColorConstant';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComp from '../../components/common/ButtonComp';
import FillLine from '../../components/common/FillLine';
import constantImages from '../constants/constantImages';

const SignUpEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  return (
    <SafeAreaView style={styles.main}>
      {/* <FillLine /> */}
      <Text style={styles.bigText}>Sign up with email</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}></TextInput>

      <View style={styles.textInput}>
        <TextInput
          style={{flex: 1}}
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!passwordVisible);
          }}>
          <Image
            style={styles.image}
            source={
              passwordVisible ? constantImages.hide : constantImages.unhide
            }></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.textInput}>
        <TextInput
          style={{flex: 1}}
          secureTextEntry={!confirmPasswordVisible}
          placeholder="Confirm Password"
          value={confirmPass}
          onChangeText={text => setConfirmPass(text)}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setConfirmPasswordVisible(!confirmPasswordVisible);
          }}>
          <Image
            style={styles.image}
            source={
              confirmPasswordVisible
                ? constantImages.hide
                : constantImages.unhide
            }></Image>
        </TouchableOpacity>
      </View>

      <ButtonComp text={'Continue'} customStyle={styles.Button}></ButtonComp>
    </SafeAreaView>
  );
};

export default SignUpEmail;

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
    marginTop: 32,
  },

  textInput: {
    marginBottom: 40,
    marginLeft: 32,
    marginRight: 32,
    paddingBottom: 6,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: colors.white,
  },
  Button: {
    width: 311,
    height: 64,
    // marginTop:84
    marginBottom: 24,
  },

  image: {
    width: 19,
    height: 14,
  },
});

{
  /* <View style = {{...styles.buttonContainer,flexDirection:'row',justifyContent:'space-between'}}> */
}
//           <TextInput
//             style={{ fontSize:20,}}
//             placeholder='Enter user password'
//             //secureTextEntry={true}
//             secureTextEntry={!passwordVisible}
//             onChangeText={(text)=>setPassword(text)}
//             value={password}
//           />

//           <TouchableOpacity

//               onPress={() => setPasswordVisible(!passwordVisible)}
//               >
//                 <Text >{passwordVisible ? '🐵' : '🙈'} </Text>
//           </TouchableOpacity>
//       </View>

{
  /* <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}></TextInput> */
}
{
  /* <View style={styles.textInput}> */
}
{
  /* <TextInput
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        /> */
}

{
  /* <TextInput label="Email" style={styles.textInput} value={email} /> */
}

{
  /* <TextInput
        label="Password"
        style={styles.textInput}
        secureTextEntry
        // right={<TextInput.Icon icon="eye" />}
        value={password}
      /> */
}

{
  /* <View style={styles.textInput}>
        <TextInput
          label="Password"
          style={{backgroundColor: colors.white}}
          secureTextEntry
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!passwordVisible);
          }}>
          <Image
            style={styles.image}
            source={
              passwordVisible ? constantImages.hide : constantImages.unhide
            }></Image>
        </TouchableOpacity>
      </View> */
}
