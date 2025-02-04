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

const Cal = ({selectedDate, onDayPress}) => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        borderRadius: 13,
        margin: 16,
        justifyContent: 'center',
      }}
      theme={{
        backgroundColor: colors.offWhite,
        calendarBackground: colors.offWhite,
        textSectionTitleColor: colors.gray,
        selectedDayBackgroundColor: colors.primary,
        selectedDayTextColor: colors.offWhite,
        todayTextColor: colors.blue,
        dayTextColor: colors.darkGray,
        textDisabledColor: colors.pink,
      }}
      onDayPress={day => {
        setSelected(day.dateString);
        selectedDate(day.dateString);
        onDayPress();
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

export default Cal;
