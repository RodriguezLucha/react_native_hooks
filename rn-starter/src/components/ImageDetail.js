import React from "react";
import { Text, View, Image } from "react-native";

const ImageDetail = ({ title, score, imageSource }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>score: {score}</Text>
    </View>
  );
};

export default ImageDetail;
