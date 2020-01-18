import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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

  return (
    <>
      <Text>{results.map(result => result.strDrink)}</Text>
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
    </>
  );
};

const styles = StyleSheet.create({});
