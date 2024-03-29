import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
} from "react-native";

import AppText from "./AppText";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import colors from "../config/colors";

function ListItem({ image, title, subTitle, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
          <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={image} resizeMode="contain" />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </SafeAreaView>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.mediumGrey,
  },
  title: {
    fontWeight: "500",
  },
});
