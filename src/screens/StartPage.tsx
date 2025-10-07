// 🟠 StartPage.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { QuizButtons } from "../component/Quizbuttons";
import Fonts from "../style/fonts";
import { Logo } from "../component/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

export const StartPage = () => {
  const route = useRoute<any>();
  const { name } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Logo />
          <Text style={styles.title}>
            Oynamak istediğiniz zorluk seviyesini seçin
          </Text>
        </View>

        <View style={styles.bottomSection}>
          <QuizButtons name={name} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f7f3f0",
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f3f0",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  topSection: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.primary,
    textAlign: "center",
    color: "#2c2c2c",
    fontWeight: "700",
    letterSpacing: 0.5,
    marginBottom: 22,
    top: -25,
  
   
    
  },
  bottomSection: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
});
