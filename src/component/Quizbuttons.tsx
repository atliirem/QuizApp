import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../style/fonts";

export const QuizButtons = ({ name }: { name: string; }) => {
  const navigation = useNavigation<any>();

  const handleSelectDifficulty = (difficulty: string) => {
    navigation.navigate("Categories", { difficulty, name });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.easy]} onPress={() => handleSelectDifficulty("easy")}>
        <Text style={styles.text}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.medium]} onPress={() => handleSelectDifficulty("medium")}>
        <Text style={styles.text}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.hard]} onPress={() => handleSelectDifficulty("hard")}>
        <Text style={styles.text}>Hard</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#F3F3F3" },
  button: {  margin: 12, borderRadius: 21, width: 270, height: 52, justifyContent: "center", alignItems: "center" },
  easy: { backgroundColor: "#f1b341",  },
  medium: { backgroundColor: "#d57a34" },
  hard: { backgroundColor: "#c8592d" },
  text: { fontSize: 28, color: "#ffffffff" , fontWeight: '500'},
});
