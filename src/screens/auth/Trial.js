import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import constantImages from '../constants/constantImages';
import {Modal} from 'react-native-paper';
import ModalComp from '../../components/common/ModalComp';

const Trail = () => {
  const array = ['male', 'female', 'other'];
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 100}}> Heloooo</Text>
      <TextInput
        style={styles.textInput}
        placeholder="First name *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Last name *"></TextInput>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput style={styles.textInput} placeholder="Gender *"></TextInput>
        <TouchableOpacity>
          <Image
            style={{height: 14, width: 19}}
            source={constantImages.vector}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Date of birth *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Location *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Instagram"></TextInput>

      <Modal>
        <Pressable>
          <ModalComp data={array} />
        </Pressable>
      </Modal>
    </View>
  );
};

export default Trail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,
    paddingBottom: 6,
    // borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
