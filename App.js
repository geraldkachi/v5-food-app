import "react-native-gesture-handler";
import React, { useEffect, useState, useMemo, useReducer } from "react";
import { View, ActivityIndicator, 
    // AsyncStorage
    // AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from @react-native-community/async-storage instead of 'react-native'.
 } from "react-native";
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
 } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RoutesTab from "./navigation/RoutesTab";

import { DrawerContent } from "./navigation/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import ProfileScreen from "./screens/ProfileScreen";

import AsyncStorage from '@react-native-async-storage/async-storage'

// import {HomeStackScreen,DetailStackScreen } from "./navigation/RoutesTab"

import { AuthContext } from "./components/Context";

import RootStackScreen from "./navigation/RootStackScreen";

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
//   Provider,
} from "react-native-paper";

const Drawer = createDrawerNavigator()


// const position = pos == "right" ? "left" : "right";

const App = () => {

  const [isDarkTheme , setIsDarkTheme] = useState(false)

  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors, 
      background: '#fff',
      text: '#333333'
    },
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors, 
      background: '#333333',
      text: '#fff'
    },
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...state,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      default:
        return state;
    }
  };

  //  const [state, dispatch] = useReducer(loginReducer, initialLoginState, init)
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
      signIn: async(foundUser) => {

        const userToken = String(foundUser[0].userToken)
        const userName = foundUser[0].username
        // if (userName == "user" && password == "pass") {
          try {
            userToken = "geraldkachi";
            await AsyncStorage.setItem('userToken', userToken)
          } catch (e) {
              console.log(e);
          }
        // }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
        // setUserToken("kachi")
        // setIsLoading(false)
      },
      signOut: async() => {
          try {
              await AsyncStorage.removeItem('userToken')
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: "LOGOUT" });
        // setUserToken(null);
        // setIsLoading(false);
        
      },
      signUp: async() => {
        // setUserToken("kachi");
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme( isDarkTheme => !isDarkTheme)
      }
    }), []);

  useEffect(() => {
    setTimeout(async() => {
        let userToken;
        userToken = null
        try {
            userToken = await AsyncStorage.getItem('userToken')
          } catch (e) {
              console.log(e);
          } 
    //   setIsLoading(false);
    dispatch({ type: "REGISTER" , token: userToken })
    }, 1000);
  }, []);

  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {state.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={RoutesTab} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;

// const styles = StyleSheet.create({})

// <Drawer.Navigator initialRouteName="Home">
//     <Drawer.Screen name="Home" component={HomeScreen}/>
//     <Drawer.Screen name="Detail" component={DetailScreen} />
// </Drawer.Navigator>

//////////////////////////////////////////////

// const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()

//     const createHomeStack = ({navigation}) =>
//     <Stack.Navigator screenOptions={{
//         headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"}
//     }}>
//         <Stack.Screen name="Home" component={HomeScreen}
//         options={{ title:"HomeScreen",
//          headerLeft:()=> ( <Button title="Menu" onPress={()=> navigation.openDrawer() }/>)
//          }} />
//         <Stack.Screen name="Detail" component={DetailScreen} />
//     </Stack.Navigator>

// const App = () => {
//     return (
//         <NavigationContainer >
//             <Drawer.Navigator screenOptions={{
//                 headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"}
//             }}>
//                 <Drawer.Screen name="Home" component={createHomeStack}
//                 options={{ title:"OverView" }} />
//                 <Drawer.Screen name="Detail" component={DetailScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }
