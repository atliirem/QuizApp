import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {Button} from "../component/Button";
import Fonts from "../style/fonts";
import {Logo} from "../component/Logo";

export const StartQuiz = () => {
  const route = useRoute<any>();
  const { categoryId, difficulty, name, surname } = route.params;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>
        Yarışmaya hazır mısın, {name}?{"\n"}Başlamak için dokun!
      </Text>

      <Button
        bg="#e69830"
        label="Start"
        onPress={() =>
          navigation.navigate("Questions", {
            categoryId,
            difficulty,
            name,
            surname,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
   title: {
    fontSize: 24,
    fontFamily: Fonts.primary,
    textAlign: "center",
    color: "#2c2c2c",
    fontWeight: "700",
    letterSpacing: 0.5,
    marginBottom: 22,
    top: -25,
  
   
    
  },
   
  
 
});
