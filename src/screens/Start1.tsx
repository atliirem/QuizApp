import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../style/fonts";
import { Logo } from "../component/Logo";
import { Button } from "../component/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export const Start1 = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.topSection}>
              <Logo />
              <View style={styles.headerContainer}>
                <Text style={styles.header}>Hoşgeldin!</Text>
                <Text style={styles.header2}>Yarışmaya Hazır mısın?</Text>
              </View>
            </View>

            <View style={styles.bottomSection}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Yarışmacının Adı</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Adınızı girin"
                  placeholderTextColor="#aaa"
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  label="Başla"
                  bg="#e69830"
                  color="white"
                  onPress={() => navigation.navigate("Start", { name })}
                />

                <Button
                  label="Geçmiş Oyunlar"
                  bg="#d4d4d4"
                  color="#333"
                  onPress={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "History" }],
                    })
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topSection: {
    alignItems: "center",
    width: "100%",
  },
  headerContainer: {
    marginTop: -50,
    alignItems: "center",
    gap: 4,

  },
  header: {
    fontSize: 36,
    fontFamily: Fonts.bold,
    textAlign: "center",
    color: "#2c2c2c",
    fontWeight: "700",
    letterSpacing: 0.5,



  },
  header2: {
    fontSize: 24,
    fontFamily: Fonts.primary,
    textAlign: "center",
    color: "#666",
    fontWeight: "400",
  },
  bottomSection: {
    width: "100%",
    gap: 24,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontFamily: Fonts.primary,
    marginBottom: 10,
    color: "#444",
    fontWeight: "500",
    textAlign: 'center',
    alignSelf: 'center'

  },
  input: {
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
    width: "98%",
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.primary,
    backgroundColor: "#fff",
    color: "#2c2c2c",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    width: "100%",
    alignSelf: 'center',
    alignItems: 'center',
  
   
  },

});