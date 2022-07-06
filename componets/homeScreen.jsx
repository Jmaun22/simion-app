import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";



const HomeScreen = () => (
  <View style={styles.container}>

    <ImageBackground source={require('../assets/match.jpg')} resizeMode="cover" style={styles.image}> 
 <Text style={styles.text}>Matcher</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default HomeScreen;
