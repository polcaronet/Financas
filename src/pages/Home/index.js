import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HistoryList from '../../components/HistoryList';
import { MaterialIcons } from '@expo/vector-icons';
import BalanceItem from '../../components/BalanceItem';
import CalendarModal from '../../components/CalendarModal';
import { useIsFocused } from '@react-navigation/native';
import api from '../../services/api';
import { format } from 'date-fns';

import { 
    Background, 
    ListBalance, 
    Area,
    Title,
    List

} from './styles';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovements(){
  
     let date = new Date(dateMovements)
     let onlydate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
     let dateFormated = format(onlydate, 'dd/MM/yyyy');

     console.log(dateFormated);
     

      const receives = await api.get('/receives', {
        params:{
          date: dateFormated
        }
      });

      try {
        const balance = await api.get('/balance', {
          params: { 
            date: dateFormated 
          }
        });

        if(isActive){
          setMovements(receives.data);
          setListBalance(balance.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getMovements();

    return () => { isActive = false };

  }, [isFocused, dateMovements]);

  async function handleDelete(id){
    try{
      await api.delete('/receives/delete', {
        params:{
          item_id: id
        }
      })

      setDateMovements(new Date())
    }catch(err){
      console.log(err);
    }
  }

 function filterDateMovements(dateSeLected){
   setDateMovements(dateSeLected);
 }

  return (
    <Background 
      style={{ 
        paddingLeft: 3.8, 
        paddingRight: 3.8 
    }}>
      <Header title="Minhas movimentações"/>

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={({ item }) => ( <BalanceItem data={item} /> )}
      />
      <Area>
       <TouchableOpacity onPress={() => setModalVisible(true)}>
        <MaterialIcons name="event" color="#121212" size={30}/>
       </TouchableOpacity>
       <Title>Ultimas movimentações</Title>
      </Area>
       <List
         data={movements}
         keyExtractor={ item => item.id }
         renderItem={({ item }) => <HistoryList data={item} deleteItem={handleDelete}/>}
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: 20 }}
       />

       <Modal visible={modalVisible} animationType="fade" transparent={true}>
       <CalendarModal
         setVisible={() => setModalVisible(false)}
         handleFilter={filterDateMovements}
       />
       </Modal>

    </Background>
  );
}