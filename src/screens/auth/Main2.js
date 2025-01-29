import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../helpers/ColorConstant';
import {TextInput} from 'react-native-paper';
import ButtonComp from '../../components/common/ButtonComp';
import FillLine from '../../components/common/FillLine';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Modal} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

const Main2 = () => {
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [insta, setInsta] = useState('');
  const [selectedData, setSelectedData] = useState('');

  const deleteConformation = item =>
    Alert.alert('Deleting Image', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'Yes',
        onPress: () => {
          const filterData = images.filter(val => val !== item);
          console.log('===========', item);

          setImages(filterData);
        },
      },
    ]);

  const selectAsMain = () => {
    const main = images.filter(val => val !== selectedData);
    console.log('------------', selectedData);
    // console.log(main);
    setImages([selectedData, ...main]);
    setSelectedData('');
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorCode);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;

        if (selectedData) {
          const replace = images.map(val => {
            if (val === selectedData) {
              console.log('-=-=-=-****', val);
              return imageUri;
            } else {
              return val;
            }
          });
          console.log(',,,,,,,,,,,,,,,,', imageUri);

          setImages(replace);
        } else {
          setImages([...images, imageUri]);
        }
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorCode);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        if (selectedData) {
          const replace = images.map(val => {
            if (val === selectedData) {
              console.log('-=-=-=-****', val);
              return imageUri;
            } else {
              return val;
            }
          });
          console.log(',,,,,,,,,,,,,,,,', imageUri);

          setImages(replace);
        } else {
          setImages([...images, imageUri]);
        }
      }
    });
  };

  return (
    <View style={styles.main}>
      <FillLine filling={{width: 136}} />
      <Text style={styles.bigText}>Enter main info</Text>
      <Text style={{...styles.bigText, fontSize: 21, marginBottom: 12}}>
        Add photo
      </Text>

      <ScrollView horizontal style={{flex: 1, flexDirection: 'row', gap: 10}}>
        <FlatList
          data={images}
          horizontal
          contentContainerStyle={{gap: 8, marginLeft: 32}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setModal2Visible(true);
                  setModalVisible(false);
                  console.log('********************', item);
                  setSelectedData(item);
                }}>
                <Image
                  style={[
                    {
                      height: 124,
                      width: 124,
                      borderRadius: 12,
                    },
                    index == 0 && {borderWidth: 2, marginRight: 8},
                  ]}
                  source={{
                    uri: item,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
        {images.length < 5 ? (
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.plusArea}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>

      {/* <ScrollView>
        <TextInput
          style={styles.textInput}
          label={'First name *'}
          onChangeText={text => setFName(text)}></TextInput>
        <TextInput
          style={styles.textInput}
          label={'Last name *'}
          onChangeText={text => setLName(text)}></TextInput>
        <TextInput
          style={styles.textInput}
          label={'Gender *'}
          onChangeText={text => setGender(text)}></TextInput>
        <TextInput
          style={styles.textInput}
          label={'Date of Birth *'}
          onChangeText={text => setDob(text)}></TextInput>
        <TextInput
          style={styles.textInput}
          label={'Location *'}
          onChangeText={text => setLocation(text)}></TextInput>
        <TextInput
          style={styles.textInput}
          label={'Instagram'}
          onChangeText={text => setInsta(text)}></TextInput>
      </ScrollView> */}
      <ButtonComp text={'Continue'} customStyle={styles.Button} />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <ButtonComp
              onPress={() => {
                handleCameraLaunch();
                setModalVisible(false);
              }}
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
              onPress={() => {
                openImagePicker();
                setModalVisible(false);
              }}
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

      <Modal animationType="slide" transparent={true} visible={modal2Visible}>
        <Pressable onPress={() => setModal2Visible(false)}>
          <View style={{...styles.modalView, height: 380}}>
            <ButtonComp
              onPress={() => selectAsMain()}
              customStyle={{
                ...styles.Button,
                marginTop: 32,
                marginBottom: 16,
                backgroundColor: colors.white,
                borderWidth: 1,
              }}
              text={'Select as main'}
            />
            <ButtonComp
              onPress={() => {
                setModalVisible(true);
                setModal2Visible(false);
              }}
              customStyle={{
                ...styles.Button,
                backgroundColor: colors.white,
                borderWidth: 1,
                marginBottom: 16,
              }}
              text={'Replace'}
            />

            <ButtonComp
              onPress={item => {
                deleteConformation(selectedData);
                setModal2Visible(false);
              }}
              customStyle={{
                ...styles.Button,
                backgroundColor: colors.white,
                borderWidth: 1,
              }}
              text={'Delete'}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Main2;

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
    // marginBottom: 40,
    marginLeft: 32,
    marginRight: 32,
    paddingBottom: 6,
    borderBottomWidth: 1,
    flex: 1,
    backgroundColor: colors.white,
  },

  Button: {
    width: 311,
    height: 64,
    // marginTop: 40,
    marginBottom: 24,
  },
  box: {
    height: 124,
    width: 124,
    borderWidth: 1,
    marginLeft: 16,
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

  plusArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  photos: {
    height: 124,
    width: 124,
    borderRadius: 12,
  },

  plus: {
    fontSize: 30,
    fontWeight: '300',
    color: colors.primary,
  },

  centeredView: {
    flex: 1,
    backgroundColor: '#00000090',
  },

  modalView: {
    height: 208,
    width: 389,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 604,
  },

  button: {
    width: 311,
  },
});
