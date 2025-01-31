import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../helpers/ColorConstant';
import {Modal} from 'react-native-paper';

const ButtonLearn = ({data, visible, onPress}) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <Pressable onPress={onPress}>
        <FlatList
          data={data}
          style={styles.FlatList}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button} onPress={item.onPress}>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </Pressable>
    </Modal>
  );
};

export default ButtonLearn;

const styles = StyleSheet.create({
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
  flatListStyle: {
    flexGrow: 0,
    paddingTop: 16,
    backgroundColor: 'white',
    borderRadius: 16,
  },
});
