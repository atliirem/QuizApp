import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  bg?: string;
  color?: string;
  onPress?: () => void;
};

export const Button = ({ label, bg , color = "white", onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bg,  }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 button: {
 
    margin: 5,
    borderRadius: 21,
    width: 240,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 26,
    fontWeight: "600",
  },
});



