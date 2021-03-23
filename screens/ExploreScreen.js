import React from 'react'
import { Alert, StyleSheet, Text, View, Button } from 'react-native'
import Center from "../components/Center"
import { useTheme } from "@react-navigation/native";

const ExploreScreen = ({ navigation }) => {

    const { colors } = useTheme()
    return (
        <Center>
            <Text style={{color: colors.text}}>ExploreScreen</Text>
            <Button title="Click Me" onPress={()=> {
                Alert.alert("Button Clicked"),
                navigation.goBack()
            }} />
        </Center>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({})
