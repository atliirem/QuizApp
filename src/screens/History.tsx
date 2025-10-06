import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const History = () => {
  const [results, setResults] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadResults = async () => {
      const stored = await AsyncStorage.getItem("quizResults");
      if (stored) {
        setResults(JSON.parse(stored));
      }
    };
    loadResults();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>Skor: {item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Geçmiş Skorlar</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Start1' as never)}>
          <MaterialIcons name="arrow-forward-ios" size={28} color="#e69830" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#e69830'
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 3,
  },
  score: {
    fontSize: 16,
    color: "#e69830",
    fontWeight: 'bold'
  },
});