import React from 'react'
import { Alert, StyleSheet, Text, Button} from 'react-native'
import Center from "../components/Center"
import { useTheme } from "@react-navigation/native";

const SettingsScreen = () => {

    const { colors } = useTheme()

    return (
        <Center>
            <Text style={{colr: colors.text}}>SettingsScreen</Text>
            <Button title="Click Me" onPress={()=>{Alert.alert("SettingsScreen Clicked")}}/>
        </Center>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
