import React  from 'react'
import { StyleSheet,View} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { 
    Avatar, 
    Title, 
    useTheme,
    Caption, 
    Paragraph, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch } from "react-native-paper"


import { AuthContext }  from "../components/Context"
    
    export const DrawerContent = (props) => {

        const paperTheme = useTheme()

        const { signOut, toggleTheme } = React.useContext(AuthContext)

        // const [isDarkTheme , setIsDarkTheme] = React.useState(false)   
        //  its now in the App.js app level state 

        // const toggleTheme = () => {
        //     setIsDarkTheme(!isDarkTheme)
        // }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View  style={styles.userInfoSection}>
                        <View style={{flexDirection:"row", marginTop:15}}> 
                           
                                <Avatar.Image source={require("../assets/images/geraldkachi.jpg")} size={50}/>
                        
                            <View style={{flexDirection:"column", marginLeft:15}}>
                                <Title style={styles.title}>Kachi FitGerald</Title>
                                <Caption style={styles.caption}>@geraldkachi</Caption>
                            </View>
                        </View>
                    
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color,size})=> (<Icon name="home-outline" color={color} size={size} />)}
                            label="Home"
                            onPress={()=> {props.navigation.navigate("Home")}} />
                            {/*  */}
                        <DrawerItem icon={({color,size})=> (<Icon name="account-outline" color={color} size={size} />)}
                            label="Profile"
                            onPress={()=> {props.navigation.navigate("ProfileScreen")}} />
                        <DrawerItem icon={({color,size})=> (<Icon name="bookmark-outline" color={color} size={size} />)}
                            label="Bookmarks"
                            onPress={()=> {props.navigation.navigate("BookmarkScreen")}} />
                        <DrawerItem icon={({color,size})=> (<Icon name="settings-outline" color={color} size={size} />)}
                            label="Settings"
                            onPress={()=> {props.navigation.navigate("SettingsScreen")}} />
                        <DrawerItem icon={({color,size})=> (<Icon name="account-check-outline" color={color} size={size} />)}
                            label="Support"
                            onPress={()=> {props.navigation.navigate("SupportScreen")}} />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                       <TouchableRipple onPress={()=> {toggleTheme()}}>
                           <View style={styles.perference}>
                                    <Text>Dark Theme</Text>
                               <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                               </View>
                           </View>
                       </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        {/*  */}
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem  
                icon={({color,size})=> (
                    <Icon name="exit-to-app" color={color} size={size} />
                )}
                label="Sign Out"
                onPress={()=> {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    DrawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title:{
        fontSize:14,
        marginTop:3,
        fontWeight:"bold",
    },
    caption:{
        fontSize:12,
        lineHeight:12,
    },
    row:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
    },
    section:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,
    },
    paragraph:{
        fontWeight: "bold",
        marginRight:3,
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1
    },
    perference:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12,
        paddingHorizontal: 16,
    },
})