import React from 'react'
import { Alert, StyleSheet, Text,Button} from 'react-native'
import Center from "../components/Center"

const BookmarkScreen = () => {
    return (
        <Center>
            <Text>BookmarkScreen</Text>
            <Button title="Click Me" onPress={()=>{Alert.alert("Bookmark Clicked")}}/>
        </Center>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({})
