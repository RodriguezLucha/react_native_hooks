import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => console.log("pressed.")}
        title="The button."
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
