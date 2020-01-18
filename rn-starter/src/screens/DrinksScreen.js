import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import useResults from "../hooks/useResults";

export default DrinksScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  // const filterResultsByPrice = price => {
  //   // price === '$' || '$$' || '$$$'
  //   return results.filter(result => {
  //     return result.price === price;
  //   });
  // };

  const getItem = drink => {
    return (
      <View key={drink.idDrink}>
        <Text>{drink.strDrink}</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: drink.strDrinkThumb }}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      {results.map(result => getItem(result))}
      {/* 
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
