import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {colors} from '../../helpers/ColorConstant';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';

const Trial = ({selectedDate}) => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        borderRadius: 13,
        margin: 16,
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: colors.primary,
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee',
      }}
      onDayPress={day => {
        setSelected(day.dateString);
        selectedDate(day.dateString);
        console.log('Selected day=============', day);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: 'orange',
        },
      }}
    />
  );
};

export default Trial;

// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   Pressable,
// } from 'react-native';
// import React from 'react';
// import constantImages from '../constants/constantImages';
// import {Modal} from 'react-native-paper';
// import ModalComp from '../../components/common/ModalComp';

// const Trail = () => {
//   const array = ['male', 'female', 'other'];
//   return (
//     <View style={styles.main}>
//       <Text style={{fontSize: 100}}> Heloooo</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder="First name *"></TextInput>
//       <TextInput style={styles.textInput} placeholder="Last name *"></TextInput>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <TextInput style={styles.textInput} placeholder="Gender *"></TextInput>
//         <TouchableOpacity>
//           <Image
//             style={{height: 14, width: 19}}
//             source={constantImages.vector}
//           />
//         </TouchableOpacity>
//       </View>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Date of birth *"></TextInput>
//       <TextInput style={styles.textInput} placeholder="Location *"></TextInput>
//       <TextInput style={styles.textInput} placeholder="Instagram"></TextInput>

//       <Modal>
//         <Pressable>
//           <ModalComp data={array} />
//         </Pressable>
//       </Modal>
//     </View>
//   );
// };

// export default Trail;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   textInput: {
//     marginTop: 32,
//     marginLeft: 32,
//     marginRight: 32,
//     paddingBottom: 6,
//     // borderBottomWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });
