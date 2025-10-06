import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getQuestions } from "../../api";
import { RootStackParamList } from "../navigation/RootStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


type CategoriesNavProp = NativeStackNavigationProp<RootStackParamList, 'Categories'>;

export const Categories = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: any) => state.categories);
  const navigation = useNavigation<CategoriesNavProp>();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const route = useRoute<any>();
  const { difficulty, surname, name } = route.params;

  useEffect(() => {
    dispatch(getCategories() as any);
  }, []);

  const handleSelect = (categoryId: number) => {

    setSelectedCategory(categoryId);
    console.log("Butona basıldı");
    console.log("Seçilen Kategori: " , categoryId);
    dispatch(getQuestions({ categoryId, difficulty }) as any);
    navigation.navigate("StartQuiz", { categoryId, difficulty , surname, name});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Kategori Seçin</Text>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#cf5729" />
            <Text style={{ marginTop: 10, fontSize: 16, color: "#cf5729" }}>Yükleniyor...</Text>
          </View>
        ) : (
          <View style={styles.categoriesContainer}>
            {data.length > 0 ? (
              data.map((cat: any) => (
                <TouchableOpacity
                  key={cat.id}
                  style={[
                    styles.button,
                    selectedCategory === cat.id && { borderWidth: 2.5, borderRadius: 10 },
                  ]}
                  onPress={() => handleSelect(cat.id)}
                >
                  <Text style={styles.text}>{cat.name}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.emptyText}>Kategori bulunamadı.</Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  container: {
    flex: 1,
    paddingTop: 20, 
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#cf5729",
    flex: 1,
    left: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  button: {
    backgroundColor: "#ffffff", 
    margin: 10,
    borderRadius: 16,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 7,
    elevation: 9,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#d57a34",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#7f8c8d",
    marginTop: 50,
  },
});