import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import CardSobre from "@/components/__tests__/sobre/card";

const ViewBoxesWithColorAndText = () => {
  const onPress = () => {
    Alert.alert("Button pressed");
    
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Que tal conhecer mais?
          </Text>
          <View>
          <CardSobre />
  
          </View>

          <View style={styles.image_container}>
            <Image
              source={require("../../assets/images/home_image.png")}
              style={styles.image}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: "#9DB1F3",
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
    color: "white",
    marginTop: 170,
  },
  button_register: {
    alignItems: "center",
    backgroundColor: "#ffC000",
    padding: 10,
    marginHorizontal: 50,
    marginBottom: 10,
  },
  button_login: {
    alignItems: "center",
    backgroundColor: "#87a224",
    padding: 10,
    marginHorizontal: 50,
  },
  image_container: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
});

export default ViewBoxesWithColorAndText;
