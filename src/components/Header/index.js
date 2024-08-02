import React from 'react';
import { Container, Title, ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
 const navigation = useNavigation();

 return (
   <Container>
    <ButtonMenu onPress={() => navigation.openDrawer()}>
     <Feather name="menu" size={35} color="#121212"/>
    </ButtonMenu>
    {title && (
      <Title>
        {title}
      </Title>
    )}
   </Container>
  );
}