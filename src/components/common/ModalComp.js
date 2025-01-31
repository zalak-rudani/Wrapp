import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {colors} from '../../helpers/ColorConstant';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonLearn from './ButtonLearn';

const ModalComp = ({data, visible, onPress}) => {
  // const arr = ['hi', 'ji', 'hu', 'hello'];
  // const arr = [
  //   {
  //     title: 'hii',
  //     onPress: () => {
  //       console.log('=-=-=-=-=-hii');
  //     },
  //   },
  //   {
  //     title: 'huh',
  //     onPress: () => {
  //       console.log('===============huh');
  //     },
  //   },
  // ];
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Pressable onPress={onPress} style={styles.modalCentred}>
        <FlatList
          data={data}
          style={styles.flatListStyle}
          renderItem={({item}) => (
            <View style={styles.button}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      </Pressable>
    </Modal>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // backgroundColor: colors.white,
  },

  button: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    height: 64,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  text: {
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },

  modalCentred: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'flex-end',
  },

  flatListStyle: {
    flexGrow: 0,
    paddingTop: 16,
    backgroundColor: 'white',
    borderRadius: 16,
  },
});

{
  /* <ButtonLearn arr={arr} /> */
}
{
  /* <ButtonLearn arr={['hii', 'huh', 'sdf', 'sdf']} /> */
}

{
  /* <Modal visible={modalVisible} animationType="slide" transparent={true}>
  <Pressable
  onPress={() => setModalVisible(false)}
  style={styles.modalCentred}>
  <View style={styles.modalView}>
  <FlatList
  data={arr}
  renderItem={({item}) => {
    <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>;
              }}
              />
              </View>
              </Pressable>
              </Modal> */
}

// modalView: {
//   backgroundColor: 'white',
//   // height: 500,
//   // flex: 1,
//   borderRadius: 20,
//   alignItems: 'center',
// },
{
  /* <View
  style={{
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  }}>
  <TouchableOpacity onPress={() => setModalVisible(true)}>
    <Text>PRESS</Text>
  </TouchableOpacity>
</View> */
}
