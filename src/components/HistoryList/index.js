import React from "react";

import { 
  Container, 
  TypeText,
  Type,
  IconView,
  ValueText

} from './styles';

import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Alert } from 'react-native';

export default function HistoryList({ data, deleteItem }){
  
  function handleDeleteItem(){
      Alert.alert(
        'Atenção',
        'Você tem certeza que deseja deletar esse registro?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => deleteItem(data.id)
          }
        ]
      )
  }

   return(
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
     <Container>

      <Type>
        <IconView type={data.type}>
         <Feather 
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
            size={20} 
            color="#FFF"
         />
         <TypeText>{data.type}</TypeText>
        </IconView>
      </Type>

      <ValueText>
        {data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </ValueText>
     </Container>
   </TouchableWithoutFeedback>
   )
}