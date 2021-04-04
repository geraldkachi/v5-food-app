import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button,Alert } from 'react-native'
// import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/MaterialIcons"
import * as Animatable from "react-native-animatable"
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "@react-navigation/native";


const SplashScreen = ({navigation}) => {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
           <Animatable.View style={styles.header}>
               <Animatable.Image
               animation='bounceIn' duration="1500"
                source={require("../assets/splash.png")} style={styles.logo}  resizeMode="stretch" 
                />
           </Animatable.View>
           <Animatable.View animation="fadeInUpBig"
            style={[styles.footer, {backgroundColor: colors.background}]}>
               <Text style={[styles.title, {color: colors.text}]}>Stay connected with everyone!</Text>
               <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn,styles.ban]} onPress={()=> navigation.navigate("SignInScreen")}>
                        <View style={{flexDirection:"row",justifyContent:"space-between", textAlign:"center"}}>
                            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <Icon name="navigate-next" color="#fff" size={20} />
                            </LinearGradient>
                        </View>  
                    </TouchableOpacity>
                </View>
           </Animatable.View>
        </View>
    )
}

export default SplashScreen
const{height} = Dimensions.get("screen")
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    buttonCenter:{
        paddingTop:1
    },
    ban:{
        backgroundColor:"#01ab9d",
        color:"#fff",
       
    },
    container:{
        flex:1,
        backgroundColor:"#009387"
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width: height_logo,
        height: height_logo,
        borderRadius: 50
    },  
    title:{
      color:"#05375a",
      fontSize:30,
      fontWeight:"bold",
    }, 
    textbutton:{
        color:"white",
        marginTop: 5,
    },
    text:{
        color:"grey",
        marginTop: 5,
    },
    button:{
        alignItems:"flex-end",
        marginTop:30
    },
    signIn:{
        width:150,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row",
    },
    textSign:{
        color:"white",
        fontWeight:"bold"
    },
})


{/* <LinearGradient colors={["#08d4c4","#01ab9d"]} style={styles.signIn}>
    <Text style={style.text}>Get Started</Text>
    <Icon name="naviagte-next" color="#fff" size={20}/>
</LinearGradient> */}