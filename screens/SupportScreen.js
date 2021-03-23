// import { Button } from 'native-base'
import React from 'react'
import { Alert, StyleSheet, Text, Button} from 'react-native'
import Center from "../components/Center"
import { useTheme } from "@react-navigation/native";

const SupportScreen = () => {

    const { colors } = useTheme()

    return (
        <Center>
            <Text style={{color: colors.text}}>SupportScreen</Text>
            <Button title="Click Me" onPress={()=>{Alert.alert("SupportScreen Clicked")}}/>
        </Center>
    )
}

export default SupportScreen

const styles = StyleSheet.create({})
