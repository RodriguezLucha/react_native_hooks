import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const pets = [
    { name: "pet 1", age: 1 },
    { name: "pet 2", age: 3 },
    { name: "pet 3", age: 3 },
    { name: "pet 4", age: 2 },
    { name: "pet 5", age: 6 },
    { name: "pet 6", age: 9 },
    { name: "pet 7", age: 10 }
  ];

  return (
    <FlatList
      keyExtractor={item => item.name}
      data={pets}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              Name: {item.name}, Age: {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 12
  }
});

export default ListScreen;
