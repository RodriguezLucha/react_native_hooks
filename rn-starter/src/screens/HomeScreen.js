import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("List")}
        title="List"
      />
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Components"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="ImageScreen"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
