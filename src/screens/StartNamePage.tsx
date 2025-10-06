// src/screens/StartNamePage.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";


type StartNameNavProp = NativeStackNavigationProp<RootStackParamList, "StartNamePage">;

export const StartNamePage: React.FC = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation<StartNameNavProp>();

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require("../../assets/image/image2.png")}
        resizeMode="contain"
      />
      
      <Text style={styles.label}>Adınızı girin</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="İsim"
      />

      <TouchableOpacity
        style={[styles.button, !name && { backgroundColor: "#3498db" }]}
        onPress={() => {
          if (name) {
            navigation.navigate("Start", { name });
          }
        }}
      >
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f5f5f5" },
  label: { fontSize: 18, marginBottom: 8, fontWeight: "600" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: "orange", padding: 14, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "600" },
  image: { width: "100%", height: "42%", marginBottom: 20 },
});
