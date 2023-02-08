import React from "react";
import { StyleSheet, Image, SafeAreaView, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    color: "red",
    width: 50,
    height: 50,
    position: "absolute",
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  deleteIcon: {
    color: "green",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
