import React, {useState} from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

type Props = {
  onActivate: () => void;
  label?: string;
}

export const JokerButton = (props: Props) => {
  const [isUsed, setIsUsed] = useState(false);

  const pressHandler = () => {
    if(!isUsed){
      props.onActivate();
      setIsUsed(true);
    }
  }

  return (
    <TouchableOpacity 
      onPress={pressHandler} 
      style={[styles.btn, isUsed ? styles.btnUsed : null]}
      disabled={isUsed}
    >
      <Text style={[styles.txt, isUsed ? styles.txtUsed : null]}>
        {isUsed ? "Kullanıldı" : (props.label || "Joker")}
      </Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#e69830",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  btnUsed: {
    backgroundColor: "#bdc3c7",
  },
  txt: {
    color: "white",
    fontSize: 20
  },
  txtUsed: {
    color: "black"
  }
});
