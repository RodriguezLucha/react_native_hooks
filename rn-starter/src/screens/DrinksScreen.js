import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Animated
} from "react-native";
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

  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000
    }).start();
  }, []);

  const getItem = drink => {
    return (
      <View
        key={drink.idDrink}
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              padding: 15
            }}
            source={{ uri: drink.strDrinkThumb }}
          />
        </View>
        <Animated.View
          style={{
            opacity: fadeAnim
          }}
        >
          <Text>{drink.strDrink}</Text>
        </Animated.View>
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
