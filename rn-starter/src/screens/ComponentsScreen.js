import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  
  const theMessage = "jumps over the lazy dog!";

  return (
    <View>
      <Text style={styles.textStyle}>The quick brown fox</Text>
      <Text style={styles.secondTextStyle}>{theMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  secondTextStyle: {
    fontSize: 25,
    fontFamily: "Courier New"
  }
});

export default ComponentsScreen;
