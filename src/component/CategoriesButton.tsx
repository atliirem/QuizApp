import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../api";
import {
    StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";



export const CategoriesButton = () => {
    const { loading, data } = useSelector((state: any) => state.categories);
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [selectedCategories, setSelectedCategories] = useState<string | null>(null);


    useEffect(() => {
        dispatch(getCategories() as any);
    }, []);

    const handleSelect=(id: number)=>{
        setSelectedCategories(id as any);
        console.log("seçilen kategori id: ", id);
    };
    return (
        <View style={{ backgroundColor: '#FDCF39', top: 10 }}>
          

            {loading && <Text>Yükleniyor...</Text>}

             {data.length > 0 &&
        data.map((cat: any) => (
          <TouchableOpacity
          key={cat.id} style={[styles.button, selectedCategories=== cat.id && {backgroundColor: '#FFD700'} ]} onPress={()=> handleSelect(cat.id)}>
            <Text style={styles.text}>{cat.name}</Text>

          </TouchableOpacity>
        ))} 

        </View>
    );
};



const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        backgroundColor: '#ffffffff',
        margin: 12,
        borderRadius: 6,
        width: 300,
        height: 52,
        justifyContent: 'center',




    },
    text: {
        fontSize: 25,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    
});
