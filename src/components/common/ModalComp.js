import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../helpers/ColorConstant';
import constantImages from '../../screens/constants/constantImages';

const ButtonLearn = ({data, visible, onPress, backArrow, backArrowOnPress}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      style={{
        flex: 1,
      }}>
      <Pressable
        onPress={onPress}
        style={{flex: 1, backgroundColor: '#00000090'}}></Pressable>

      <View style={{borderRadius: 16}}>
        <FlatList
          data={data}
          style={styles.flatListStyle}
          ListHeaderComponent={() => {
            if (backArrow) {
              return (
                <TouchableOpacity onPress={backArrowOnPress}>
                  <Image
                    source={constantImages.vector}
                    style={{
                      height: 15,
                      width: 8,
                      margin: 5,
                      marginTop: 32,
                      marginLeft: 32,
                      marginBottom: 24,
                      // transform: [{rotate: '0deg'}],
                    }}
                  />
                </TouchableOpacity>
              );
            }
          }}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button} onPress={item.onPress}>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
    // borderRadius: 50,
    paddingTop: 16,
    backgroundColor: 'white',
  },
});
