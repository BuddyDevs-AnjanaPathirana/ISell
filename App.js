import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    // <SafeAreaView style={styles.cardPage}>
    //   <Card
    //     title="Red jacket for sale!"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </SafeAreaView>
    // <ListingDetailsScreen
    //   title="Red jacket for sale!"
    //   subTitle="$100"
    //   image={require("./app/assets/jacket.jpg")}
    // />
    // <ViewImageScreen></ViewImageScreen>
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  cardPage: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f4f4f4",
  },
});
