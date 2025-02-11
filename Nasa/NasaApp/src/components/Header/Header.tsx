import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Es el encabezado de la aplicación que se muestra en la parte superior de la pantalla.
export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image style={styles.nasaLogo} source={require("../../assets/nasa.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },

  nasaLogo: {
    width: 60,
    height: 60,
  },
});