import React from "react";
import React from "react";
import { Image, View } from "react-native";

function Card(title, subTitle, image) {
  // in {}
  return (
    <View>
      <Image source={require({ image })}></Image>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {},
});
