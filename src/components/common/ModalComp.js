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

const ModalComp = ({data, onPress}) => {
  const arr = ['hii', 'huh', 'yui'];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          flex: 1,
        }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>PRESS</Text>
        </TouchableOpacity>
      </View>

      {/* <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.modalCentred}>
          <View style={styles.modalView}>
            <FlatList
              data={arr}
              renderItem={({item}) => {
                <TouchableOpacity onPress={onPress} style={styles.button}>
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>;
              }}
            />
          </View>
        </Pressable>
      </Modal> */}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
      </Modal>
    </SafeAreaView>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  button: {
    width: 311,
    height: 64,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
  },

  text: {
    fontSize: 15,
    fontWeight: '700',
  },

  modalCentred: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'flex-end',
  },

  modalView: {
    width: 388,
    backgroundColor: 'white',
    height: 500,
    borderRadius: 20,
  },
});
