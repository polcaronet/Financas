import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { DancingScript_400Regular, DancingScript_500Medium, DancingScript_600SemiBold, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
     Poppins_500Medium,
     Poppins_600SemiBold,
     Roboto_500Medium,
     Roboto_700Bold,
     Montserrat_500Medium,
     Montserrat_600SemiBold,
     DancingScript_400Regular,
     DancingScript_500Medium,
     DancingScript_600SemiBold,
     DancingScript_700Bold
  });

     if(!fontsLoaded){
       return null;
     }

  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content"/>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

