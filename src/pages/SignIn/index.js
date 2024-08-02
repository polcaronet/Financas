import React, { useState, useContext } from "react";
import { Platform, TouchableOpacity, ActivityIndicator } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={{ marginLeft: 10, position: 'absolute', left: 320, paddingTop: 10 }}>
            <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </AreaInput>
        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>
            Criar uma conta!
          </LinkText>
        </Link>
      </Container>
    </Background>
  )
}
