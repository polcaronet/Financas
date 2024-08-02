import React, { useContext, useState } from "react";
import { Platform, TouchableOpacity, ActivityIndicator } from "react-native";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText

} from '../SignIn/styles';

import { AuthContext } from "../../contexts/auth";
import { Feather } from '@expo/vector-icons';

export default function SignUP(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  };
  
  const { signUp, loadingAuth } = useContext(AuthContext)

  function handleSignUp(){
   if(nome === '' || email === '' || password === ''){
     return;
   }

    signUp(email, password, nome);
  }

  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
      <AreaInput>
       <Input
          placeholder="Nome"
          value={nome}
          onChangeText={ (text) => setNome(text) }
       />
      </AreaInput>

      <AreaInput>
       <Input
          placeholder="Seu email"
          value={email}
          onChangeText={ (text) => setEmail(text) }
       />
      </AreaInput>

      <AreaInput>
       <Input
          placeholder="Sua senha"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          secureTextEntry={!showPassword}
       />
      <TouchableOpacity onPress={toggleShowPassword} 
        style={{ marginLeft: 10, position: 'absolute', left: 320, paddingTop: 10 }}>
       <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
      </TouchableOpacity>
      </AreaInput>

     <SubmitButton onPress={handleSignUp}>
       {
        loadingAuth ? (
          <ActivityIndicator size={20} color="#FFF"/>
        ) : (
          <SubmitText>Cadastrar</SubmitText>   
        )
       }
      
      </SubmitButton>

      </Container>
    </Background>
  )
}