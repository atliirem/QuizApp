// 🟡 Logo.tsx
import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/image/t.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
  },
  image: {
    width: 440,
    height: 360,
    top: -50,
  },
});
