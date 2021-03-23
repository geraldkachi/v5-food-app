import React from 'react'
import { Alert, StyleSheet, Text, View, Button,StatusBar, Platform,TextInput, TouchableOpacity, Dimensions} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import * as Animatable from "react-native-animatable"

import { AuthContext } from "../components/Context"
import Users from '../usermodal/UserModal'
import { useTheme } from "@react-navigation/native";


const SignInScreen = ({navigation}) => {

    const { colors } = useTheme()

    const { signIn } = React.useContext(AuthContext)
    
    // EMAIL LOGIC
    const [data, setData] = React.useState({
        email: "",
        username: '',
        password:"",
        check_textInputChange: false,
        secureTextEntry: true,

        isValidUser: true,
        isValidPassword: true,
    })

    const TextInputChange = (val) => { 
        if(val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                email: val,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }
    // PASSWORD LOGIC
    const handlePassword = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data, 
                password: val,
                isValidPassword: true
               })
            } else {     
            setData({
                ...data, 
                password: val,
                isValidPassword: false
                })
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    // ERROR MESSAGE
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }
    const handleValidPassword = () => {

    }

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item => {
            return userName == item.username,item.email && password == item.password;
        })

        if (data.username.length,data.email.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password cannot be empty.', [
                {text: 'Yes Okay', onPress : () => console.log('pressed okay') },
                {text: 'No Okay', onPress : () => console.log('pressed okay') }
            ])
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect', [
                {text: 'Yes Okay', onPress : () => console.log('pressed okay') },
                {text: 'No Okay', onPress : () => console.log('pressed okay') }
            ])
            return;
        }

        signIn(foundUser)
    }

    return (
        <View style={styles.container}> 
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig"
             style={[styles.footer, { backgroundColor: colors.background}]}>
                <Text style={[styles.text_footer], {color: colors.text}}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" 
                    color={ colors.text}
                    // color="#05375a"
                     size={20} 
                     />
                    <TextInput placeholder="Email or Username" style={[styles.textInput, {color: colors.text}]} onChangeText={(val)=> TextInputChange(val)} onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}  />
                   {data.check_textInputChange ?  
                  <Animatable.View
                    animation="bounceIn">
                       <Feather name="check-circle" color="green" size={20} /> 
                  </Animatable.View>
                   : null }
                </View>
                    {data.isValidUser ? (null) : (
                   <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                   </Animatable.View>
                    )}

                {/* Password */}
                <Text style={[styles.text_footer, {marginTop: 35, color: colors.text}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" 
                    color={colors.text} 
                    // color="#05375a" 
                    size={20} 
                    />
                    <TextInput style={[styles.textInput , { color: colors.text}]} placeholder="Password" secureTextEntry={data.secureTextEntry ? true : false} autoCapitalize="none" onChangeText={(val)=> handlePassword(val)} onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}  />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <Feather name="eye-off" color="grey" size={20} /> 
                        :
                        <Feather name="eye" color="grey" size={20} /> 
                        }
                    </TouchableOpacity>
                </View>
                     {data.isValidPassword ? (null) : (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                   </Animatable.View>
                     )}   

                    {/* SIGN IN */}
                    <TouchableOpacity onPress={()=> {}}>
                        <Text style={{ color: "#009387" , marginTop:15}}>Forget Password</Text>
                    </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn, {backgroundColor:"#009387"}]} onPress={()=> {loginHandle(data.username, data.password)}}>
                            <Text style={[styles.textSign,{color:"#fff"}]}>SIgn In</Text>
                    </TouchableOpacity>
                    {/* SIGN UP */}
                    <TouchableOpacity style={[styles.signIn,{borderColor:"#009387", borderWidth:1,marginTop:15}]} onPress={()=> navigation.navigate("SignUpScreen")}>
                        <View style={{flexDirection:"row",justifyContent:"space-between", textAlign:"center"}}>
                            <Text style={[styles.textSign,{color:"#009387"}]}>SIgn Up</Text>
                        </View>  
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            {/* <Button title="Click SignInScreen" onPress={()=> navigation.navigate("")} /> */}
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#009387",
    },
    header:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,
        paddingBottom:50 
    },
    footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:"#fff",
        fontWeight:"bold",
        fontSize: 30,
    },
    text_footer:{
        color:"#05375a",
        fontSize:18,
    },
    action: {
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor:"#f2f2f2",
        paddingBottom: 5
    },
    textInput:{
        flex:1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingleft: 10,
        color:"#05375a",
        marginLeft: 10,
        border:0
    },
    button:{
       alignItems:"center",        
       marginTop: 50,         
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    },
    errorMsg: {
        color:'red'
    }
})
