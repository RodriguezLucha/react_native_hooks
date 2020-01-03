import React from "react";
import { View, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="beach"
        score={9}
        imageSource={require("../../assets/beach.jpg")}
      ></ImageDetail>
      <ImageDetail
        title="forest"
        score={3}
        imageSource={require("../../assets/forest.jpg")}
      ></ImageDetail>
      <ImageDetail
        title="mountain"
        score={4}
        imageSource={require("../../assets/mountain.jpg")}
      ></ImageDetail>
    </View>
  );
};

export default ImageScreen;
