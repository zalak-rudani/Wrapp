import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Alert,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {TextInput} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Cal from './Cal';
import {colors} from '../../helpers/ColorConstant';
import {strings} from '../../helpers/StringConstant';
import FillLine from '../../components/common/FillLine';
import ModalComp from '../../components/common/ModalComp';
import ButtonComp from '../../components/common/ButtonComp';

const MainInfo = props => {
  const [dob, setDob] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [insta, setInsta] = useState('');
  const [gender, setGender] = useState('');
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');
  const [selectedData, setSelectedData] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [photoModalVisible, setPhotoModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [photoEditModalVisible, setPhotoEditModalVisible] = useState(false);
  const [otherGenderModalVisible, setOtherGenderModalVisible] = useState(false);

  const choosePhotos = [
    {
      title: 'Take photo',
      onPress: () => {
        setPhotoModalVisible(false);
        setTimeout(() => {
          handleCameraLaunch();
        }, 400);
      },
    },
    {
      title: 'Select from gallery',
      onPress: () => {
        setPhotoModalVisible(false);
        setTimeout(() => {
          openImagePicker();
        }, 400);
      },
    },
  ];

  const photoEdit = [
    {
      title: 'Select as main',
      onPress: () => {
        selectAsMain();
        setPhotoEditModalVisible(false);
      },
    },
    {
      title: 'Replace',
      onPress: () => {
        setPhotoModalVisible(true);
        setPhotoEditModalVisible(false);
      },
    },
    {
      title: 'Delete',
      onPress: () => {
        deleteConformation(selectedData);
        setPhotoEditModalVisible(false);
      },
    },
  ];

  const genders = [
    {
      title: 'Male',
      onPress: () => {
        setGender('Male');
        setGenderModalVisible(false);
      },
    },
    {
      title: 'Female',
      onPress: () => {
        setGender('Female');
        setGenderModalVisible(false);
      },
    },
    {
      title: 'Other',
      onPress: () => {
        setGenderModalVisible(false);
        setGenderModalVisible(false);
        setOtherGenderModalVisible(true);
      },
    },
  ];
  const otherGender = [
    {
      title: 'Trans Man',
      onPress: () => {
        setGender('Trans Man');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Trans Woman',
      onPress: () => {
        setGender('Trans Woman');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Agender',
      onPress: () => {
        setGender('Agender');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Bigender',
      onPress: () => {
        setGender('Bigender');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Gender Fluid',
      onPress: () => {
        setGender('Gender Fluid');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Genderqueer',
      onPress: () => {
        setGender('Genderqueer');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Intersex',
      onPress: () => {
        setGender('Intersex');
        setOtherGenderModalVisible(false);
      },
    },
    {
      title: 'Third Gender',
      onPress: () => {
        setGender('Third Gender');
        setOtherGenderModalVisible(false);
      },
    },
  ];

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

          setImages(filterData);
        },
      },
    ]);

  const selectAsMain = () => {
    const main = images.filter(val => val !== selectedData);
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
              return imageUri;
            } else {
              return val;
            }
          });

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
              return imageUri;
            } else {
              return val;
            }
          });

          setImages(replace);
        } else {
          setImages([...images, imageUri]);
        }
      }
    });
  };

  return (
    <View style={styles.main}>
      <FillLine
        filling={{width: 136}}
        onPress={() => props.navigation.goBack()}
      />
      <Text style={styles.bigText}>{strings.head.mainInfo}</Text>
      <ScrollView style={{flex: 1}}>
        <Text style={{...styles.bigText, fontSize: 21, marginBottom: 12}}>
          {strings.subHead.mainInfo}
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
                    setPhotoEditModalVisible(true);
                    setPhotoModalVisible(false);
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
                onPress={() => setPhotoModalVisible(true)}
                style={styles.plusArea}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
          <TextInput
            style={styles.textInput}
            label={'First name *'}
            value={fName}
            theme={{colors: {primary: 'black'}}}
            onChangeText={text => setFName(text)}
          />
          <TextInput
            style={styles.textInput}
            theme={{colors: {primary: 'black'}}}
            label={'Last name *'}
            value={lName}
            onChangeText={text => setLName(text)}
          />
          <TextInput
            onPress={() => setGenderModalVisible(true)}
            style={styles.textInput}
            theme={{colors: {primary: 'black'}}}
            label={'Gender *'}
            value={gender}
            // underlineColor={'transparent'}
            // theme={{...theme, colors: {...colors, primary: 'transparent'}}}
            onChangeText={text => setGender(text)}
          />
          <TextInput
            onPress={() => setShowCalendar(true)}
            value={dob}
            theme={{colors: {primary: 'black'}}}
            style={styles.textInput}
            // editable={false}
            label="Date of Birth *"
          />
          <TextInput
            style={styles.textInput}
            theme={{colors: {primary: 'black'}}}
            outlineStyle={{borderColor: 'transparent'}}
            label={'Location *'}
            value={location}
            onPress={() =>
              props.navigation.navigate('Work', {
                onConfirm: location => {
                  setLocation(location);
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            theme={{colors: {primary: 'black'}}}
            underlineStyle={{color: 'red'}}
            // contentStyle={{padding: 10}}
            label={'Instagram'}
            value={insta}
            onChangeText={text => setInsta(text)}></TextInput>
        </KeyboardAvoidingView>
      </ScrollView>
      <ButtonComp
        // onPress={() =>}
        text={strings.button.continue}
        customStyle={styles.Button}
      />
      <ModalComp
        onPress={() => setPhotoModalVisible(false)}
        visible={photoModalVisible}
        data={choosePhotos}
      />
      <ModalComp
        onPress={() => setPhotoEditModalVisible(false)}
        visible={photoEditModalVisible}
        data={photoEdit}
      />
      <ModalComp
        onPress={() => setGenderModalVisible(false)}
        visible={genderModalVisible}
        data={genders}
      />

      <ModalComp
        onPress={() => setOtherGenderModalVisible(false)}
        visible={otherGenderModalVisible}
        data={otherGender}
        backArrow={true}
        backArrowOnPress={() => {
          setGenderModalVisible(true);
          setOtherGenderModalVisible(false);
        }}
      />

      <Modal
        animationType="slide"
        visible={showCalendar}
        transparent={true}
        style={{backgroundColor: 'red'}}>
        <Pressable
          onPress={() => setShowCalendar(false)}
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <Cal
            selectedDate={setDob}
            onDayPress={() => {
              setShowCalendar(false);
            }}
          />
        </Pressable>
      </Modal>
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
    backgroundColor: colors.white,
    marginBottom: 40,
    marginHorizontal: 32,
    borderBottomWidth: 1,
  },

  Button: {
    width: 311,
    height: 64,
    marginBottom: 24,
  },
  box: {
    height: 124,
    width: 124,
    borderWidth: 1,
    marginLeft: 16,
    marginBottom: 40,
    borderStyle: 'dashed',
    borderColor: colors.lightGray,
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
