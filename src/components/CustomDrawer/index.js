import React, { useContext } from "react";
import { View, Image } from "react-native"; 
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';
import { TextName, TextWelcome } from './styles';

export default function CustomDrawer(props){
  const { user } = useContext(AuthContext);
   return(
    <DrawerContentScrollView {...props}>
      <View 
      style={{ 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 25 
        }}
      >
       <Image
         source={require('../../assets/Logo.png')}
         style={{ width: 90, height: 90 }}
         resizeMode="contain"
       />
       <TextWelcome
        style={{ paddingHorizontal: 20 }}
       > 
        Bem-Vindo
      </TextWelcome>
       <TextName>
        {user && user.name}
       </TextName>
      </View>
      <DrawerItemList {...props} />
      
    </DrawerContentScrollView>
   )
}