import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import  SplashScreen from "../screens/SplashScreen"
import  SignInScreen from "../screens/SignInScreen"
import  SignUpScreen from "../screens/SignUpScreen"

const RootStack = createStackNavigator ()

const RootStackScreen = () => (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </RootStack.Navigator>
    )
    
export default RootStackScreen