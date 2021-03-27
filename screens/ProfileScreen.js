import React from 'react'
import { Alert,StyleSheet, Text, View,Button } from 'react-native'
import Center from "../components/Center"
import { useTheme } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {

    const { colors } = useTheme()
    return (
        <Center>
            <Text style={{color: colors.text}}>Profile</Text>
            <Button title="Click Me Profile" onPress={()=> Alert.alert("Button Clicked")} />
            <Button title="Click Me To go To ProfileStackScreen" onPress={()=> navigation.navigate('ProfileStackScreen')} />
        </Center>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
