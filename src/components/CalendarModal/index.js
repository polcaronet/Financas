import React, { useState} from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

import { 
  Container, 
  ButtonFilterText,
  ButtonFilter,
  ModalContent

} from './styles';

export default function CalendarModal({ setVisible, handleFilter }) {
  const [dateNow, setDateNow] = useState(new Date())
  const [markedDates, setMarkedDates] = useState({});

 function handleOnDayPress(date){
  
  setDateNow(new Date(date.dateString))

  let markedDay = {};
  
  markedDay[date.dateString] = {
    selected: true,
    selectedColor: '#0C5BDD',
    textColor: '#FFF'
  }
  setMarkedDates(markedDay)
}

function handleFilterDate(){
   handleFilter(dateNow);
   setVisible();
}

 return (
   <Container>

   <TouchableWithoutFeedback onPress={setVisible}>
    <View style={{ flex: 1 }}></View>
   </TouchableWithoutFeedback>

   <ModalContent>
     <Calendar
      onDayPress={handleOnDayPress}
      markedDates={markedDates}
      enableSwiperMonths={true}
      theme={{
        todayTextColor: '#FFF',
        todayBackgroundColor: '#3B3DBF',
        selectedDayBackgroundColor: '#00ADF5',
        selectedDayTextColor: '#FFF'
      }}
     />
    <ButtonFilter onPress={handleFilterDate}>
     <ButtonFilterText>Filtrar</ButtonFilterText>
    </ButtonFilter>

   </ModalContent>
   </Container>
  );
}