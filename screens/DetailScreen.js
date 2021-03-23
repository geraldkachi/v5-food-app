import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useTheme } from "@react-navigation/native";

const DetailScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={{color: colors.text}}>DetailScreen</Text>
            <Button title="Go to HomeScreen" onPress={()=> {navigation.navigate("Home")}} />
            <Button title="Go to Back to Previous Screen" onPress={()=> {navigation.goBack()}} />
            <Button title="Go to ProfileScreen" onPress={()=> {navigation.navigate("ProfileScreen")}} />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container :{
        flex:1, 
        justifyContent:"center",
        alignItems:"center"
    }
})
