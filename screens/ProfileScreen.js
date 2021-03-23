import React from 'react'
import { Alert,StyleSheet, Text, View,Button } from 'react-native'
import Center from "../components/Center"
import { useTheme } from "@react-navigation/native";

const ProfileScreen = () => {

    const { colors } = useTheme()
    return (
        <Center>
            <Text style={{color: colors.text}}>Profile</Text>
            <Button title="Click Me Profile" onPress={()=> Alert.alert("Button Clicked")} />
        </Center>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
