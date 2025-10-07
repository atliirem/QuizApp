import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation, useRoute, CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button} from "../component/Button";

export const Results = () => {
  const route = useRoute();
  const { score, name, difficulty } = route.params as any;
  const navigation = useNavigation();


useEffect(() => {
  const saveResult = async () => {
    try {
      const newResult = { name, score, difficulty };
      const existing = await AsyncStorage.getItem("quizResults");
      const results = existing ? JSON.parse(existing) : [];

     
      const updatedResults = [newResult, ...results].slice(0, 5);

      await AsyncStorage.setItem("quizResults", JSON.stringify(updatedResults));
    } catch (err) {
      console.log("Error saving result", err);
    }
  };
  saveResult();
}, [name, score, difficulty]);

  const restartQuiz = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Start1" }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tebrikler {name}!</Text>

      <Image
        style={styles.image}
        source={require("../../assets/image/res.png")}
      />

      <Text style={styles.score}>Skorun: {score}/10</Text>

      
      <Button
        label="Yeniden Başla"
        bg="#e69830"
        onPress={restartQuiz}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 25, fontWeight: "bold", marginBottom: 10, top: -25 },
  score: { fontSize: 25, color: "black", top: 25, fontWeight: "500", marginBottom: 30, },
  image: {
    width: 407,
    height: 387,
  },
});
