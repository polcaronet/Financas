import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { 
  Container, 
  Message, 
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText

} from './styles';

import Header from "../../components/Header";
import { AuthContext } from '../../contexts/auth';

export default function Profile(){
  const navigation = useNavigation(AuthContext);
  const { user, signOut } = useContext(AuthContext);

  return(
    <Container>
      <Header title="Meu perfil"/>
    <Message>
      Hey, Bem vindo de volta!
    </Message>
    <Name numberOfLines={1}>
      {user && user.name}
    </Name>
    <NewLink onPress={() => navigation.navigate('Registrar')}>
      <NewText>Fazer registro</NewText>
    </NewLink>
    <LogoutButton onPress={() => signOut()}>
      <LogoutText>Sair da conta</LogoutText>
    </LogoutButton>
    </Container>
  )
}