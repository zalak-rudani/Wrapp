import {
  FlatList,
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import constantImages from '../constants/constantImages';

const MainInfo = () => {
  const [images, setImages] = useState([]);

  const choosePhoto = () => {
    launchImageLibrary()
      .then(image => {
        setImages([...images, image.assets[0].uri]);
      })
      .catch(err => {
        console.log('===========', err);
      });
  };

  return (
    <View style={styles.main}>
      <FillLine filling={{width: 136}} />
      <Text style={styles.bigText}>Enter main info</Text>
      <Text style={{...styles.bigText, fontSize: 21, marginBottom: 12}}>
        Add photo
      </Text>

      {/* <FlatList
        data={images}
        horizontal
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <TouchableOpacity onPress={() => choosePhoto()}>
                <Image style={styles.plus} source={constantImages.plus} />
              </TouchableOpacity>
            </View>
          );
        }}
      /> */}
      {/* 
      <View style={styles.box}>
        <TouchableOpacity onPress={() => choosePhoto()}>
          <Image style={styles.plus} source={constantImages.plus} />
        </TouchableOpacity>
      </View> */}

      <View style={styles.box}>
        <FlatList
          data={images}
          style={styles.addPhoto}
          renderItem={({item}) => {
            return (
              <Image
                style={{
                  height: 120,
                  width: 130,
                }}
                source={{
                  uri: item,
                }}
              />
            );
          }}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="First name *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Last name *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Gender *"></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Date of Birth *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Location *"></TextInput>
      <TextInput style={styles.textInput} placeholder="Instagram"></TextInput>

      <ButtonComp
        text={'Continue'}
        customStyle={styles.Button}
        onPress={() => choosePhoto()}></ButtonComp>
    </View>
  );
};

export default MainInfo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  bigText: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 32,
    marginBottom: 16,
  },

  textInput: {
    marginBottom: 40,
    marginLeft: 32,
    marginRight: 32,
    paddingBottom: 6,
    borderBottomWidth: 1,
  },

  Button: {
    width: 311,
    height: 64,
    // marginTop:84
    marginBottom: 24,
  },
  box: {
    height: 124,
    width: 124,
    borderWidth: 1,
    marginLeft: 32,
    marginBottom: 40,
    borderStyle: 'dashed',
    borderColor: '#C4C4C4',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addPhoto: {
    flex: 1,
  },

  plus: {
    height: 16,
    width: 16,
  },
});
