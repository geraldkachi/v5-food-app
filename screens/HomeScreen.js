import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme()

  return (
    <View style={styles.container}>
        <StatusBar barStyle={ theme.dark ? ('light-content') : ('dark-content') } />
      <Text style={{ color: colors.text }}>HomeScreen</Text>
      <Button
        title="Go to DetailScreen"
        onPress={() => navigation.navigate("DetailScreen")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
