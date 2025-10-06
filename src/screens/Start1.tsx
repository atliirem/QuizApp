import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView ,Platform, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../style/fonts";
import {Logo} from "../component/Logo";
import {Button} from "../component/Button";

export const Start1 = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation<any>();
  console.log("name", name)

  return (
    <KeyboardAvoidingView  style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
       <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
    <View style={styles.container}>
     <Logo/>
       
      {/* <Image
        style={styles.image}
        source={require("../../assets/image/image2.png")}
        resizeMode="contain"
      /> */}
       <Text style={styles.header}>Hoşgeldin!</Text>
       <Text style={styles.header2}>Yarışmaya Hazır mısın?</Text>

      <Text style={styles.label}>Yarışmacının adı</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Yarışmacının Adı"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={[
          styles.button,
          !name.trim() && { backgroundColor: "#e69830" },
        ]}
        onPress={() => navigation.navigate("Start", { name })}
        disabled={!name.trim()}
      >
        <Text style={styles.buttonText}>Başla</Text>
        <Button
        label="Geçmiş Oyunlar"
        bg="#e69830"
        onPress={() => navigation.navigate("History")}
      />

      </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f3f0",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    bottom: 2

  },
  image: {
    width: "200%",
    height: 400,
    marginBottom: 20,
    bottom:210,
    
  },
  header: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    marginBottom: 28,
    textAlign: "center",
    bottom: 100,
    color: 'rgba(0, 0, 0, 1)ff',
    fontWeight: '600',
    left: 15,
  },
    header2: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    marginBottom: 24,
    textAlign: "center",
    bottom: 120,
    fontWeight: '500',
    color: 'black'
    

  },
  label: {
    fontSize: 22,
    marginBottom: 8,
    fontWeight: '400',
    
 
    bottom:90,
    
    
  
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: "100%",
    fontSize: 16,
    fontFamily: Fonts.primary,
    backgroundColor: "#fff",
    bottom:90,
  },
  button: {
    backgroundColor: "#e69830",
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: "center",
    bottom: 85,
    borderRadius: 21, width: 270, height: 52, 
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight:'600',
  },
});
