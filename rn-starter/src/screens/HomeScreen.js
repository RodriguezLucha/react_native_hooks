import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>DRANK</Text>
      <Button onPress={() => navigation.navigate("List")} title="List" />
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Components"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="ImageScreen"
      />
      <Button
        onPress={() => navigation.navigate("DrinksScreen")}
        title="DrinksScreen"
      />
    </View>
  );
};

//https://dog.ceo/api/breeds/image/random

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "green",
    textAlign: "center"
  }
});

export default HomeScreen;
