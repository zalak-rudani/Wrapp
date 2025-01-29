import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React from 'react';
import ButtonComp from './ButtonComp';

const ModalComp = () => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <ButtonComp
              onPress={onPress}
              customStyle={{
                ...styles.Button,
                marginTop: 32,
                marginBottom: 16,
                backgroundColor: colors.white,
                borderWidth: 1,
              }}
              text={'Take photo'}
            />
            <ButtonComp
              onPress={onPress}
              customStyle={{
                ...styles.Button,
                backgroundColor: colors.white,
                borderWidth: 1,
              }}
              text={'Choose from library'}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ModalComp;

const styles = StyleSheet.create({});
