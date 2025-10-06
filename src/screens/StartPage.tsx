import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import {QuizButtons} from "../component/Quizbuttons";
import Fonts from "../style/fonts";
import {Logo} from "../component/Logo";

export const StartPage = () => {
  const route = useRoute<any>();
  const { name, surname } = route.params;



  return (
    <View style={styles.container}>
      <Logo/>
      {/* <Image style={styles.image} source={require("../../assets/image/image2.png")} /> */}
      <Text style={styles.title}>Oynamak istediğiniz zorluk seviyesini seçin</Text>
      <QuizButtons name={name}  />
    </View>
  );
};



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F3F3", alignItems: "center", top: 130 },
  image: { width: "120%", height: "42%", alignSelf: "center" },
  title: { fontSize: 26, marginVertical: 20, color: "#000", fontWeight: "500", bottom:50, fontFamily: Fonts.primary, 
   textAlign: "center" },
});
