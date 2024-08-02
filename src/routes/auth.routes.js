import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUP from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

/* Rotas de autenticação */

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUP}
        options={{
          headerStyle:{
            backgroundColor: '#3B3DBF',
            borderBottomWidth: 1,
            borderBottomColor: '#00B94A'
          },
          headerTintColor: '#FFF',
          headerTitle: 'Voltar',
          headerBackTitleVisible: false,
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;