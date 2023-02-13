import React from "react";
import { SafeAreaView, StyleSheet, Image, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ image, title, subTitle }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </SafeAreaView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
