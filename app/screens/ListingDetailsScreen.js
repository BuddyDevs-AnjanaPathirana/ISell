import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ title, subTitle, image }) {
  return (
    <SafeAreaView>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Roy Ben"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    padding: 5,
  },
  title: {
    fontWeight: "500",
    padding: 5,
  },
  userContainer: {
    marginVertical: 40,
  },
});
