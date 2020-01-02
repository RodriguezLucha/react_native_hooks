import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const pets = [
    { name: "pet1", age: 1 },
    { name: "pet2", age: 3 },
    { name: "pet3", age: 3 },
    { name: "pet4", age: 2 },
    { name: "pet5", age: 6 },
    { name: "pet6", age: 9 },
    { name: "pet7", age: 10 }
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
