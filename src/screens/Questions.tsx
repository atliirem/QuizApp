import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import {SimpleCountdown} from "../component/SimpleCountdown";
import {JokerButton} from "../component/joker";
import {cleanText} from "../component/cleanText";

type QuestionsNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "Questions"
>;

export const Questions = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Questions">>();
  const { categoryId, difficulty, name } = route.params;

  const { data, loading } = useSelector((state: any) => state.questions);
  const dispatch = useDispatch();
  const navigation = useNavigation<QuestionsNavProp>();

  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [jokerActive, setJokerActive] = useState(false);

  useEffect(() => {
    dispatch(getQuestions({ categoryId, difficulty }) as any);
  }, [categoryId, difficulty]);

  useEffect(() => {
    if (data && data.length > 0) {
      const allAnswers = [
        ...data[currentIndex].incorrect_answers,
        data[currentIndex].correct_answer,
      ];
      setAnswers(allAnswers.sort(() => Math.random() - 0.5));
      setSelectedAnswer(null);
      setJokerActive(false);
    }
  }, [data, currentIndex]);

  useEffect(() => {
    console.log("currentIndex:", currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    console.log("score:", score);
  }, [score]);

  if (loading) {
    return <Text style={styles.emptyText}>Sorular yükleniyor...</Text>;
  }

  if (!data || data.length === 0) {
    return <Text style={styles.emptyText}>Hiç soru bulunamadı</Text>;
  }

  const question = data[currentIndex];

const currentAnswers = jokerActive
  ? [question.correct_answer,
     question.incorrect_answers[
       Math.floor(Math.random() * question.incorrect_answers.length)
     ]
    ].sort(() => Math.random() - 0.5)
  : answers;


 const handleNext = () => {
  let updatedScore = score;

  if (selectedAnswer === question.correct_answer) {
    updatedScore = score + 1;
    setScore(updatedScore);
  }

  if (currentIndex < data.length - 1) {
    setCurrentIndex((prev) => prev + 1);
  } else {
    navigation.navigate("Results", { score: updatedScore, name });
  }
};

  return (
    <View style={styles.container}>
      <SimpleCountdown
        key={currentIndex}
        onTimeUp={handleNext}
        initialSeconds={20}
        resetTrigger={currentIndex}
      />

      <View style={styles.card}>
        <Text style={styles.progress}>
          {`${currentIndex + 1} / ${data.length}`}
        </Text>
        <Text style={styles.question}>{cleanText(question.question)}</Text>
      </View>

      <View style={styles.jokersRow}>
        <JokerButton label="50:50" onActivate={() => setJokerActive(true)} />
        <JokerButton
          label="📞"
          onActivate={() => navigation.navigate("PhoneJoker")}
        />
      </View>

      <View style={styles.answersContainer}>
        {currentAnswers.map((ans, i) => {
          let color = "#e69830";
          if (selectedAnswer) {
            if (ans === question.correct_answer) color = "#27ae60"; 
            else if (ans === selectedAnswer) color = "#d35400"; 
            else color = "#bdc3c7"; 
          }
          return (
            <TouchableOpacity
              key={i}
              style={[styles.answerBtn, { backgroundColor: color }]}
              onPress={() => setSelectedAnswer(ans)}
              disabled={!!selectedAnswer}
            >
              <Text style={styles.answerText}>{cleanText(ans)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {selectedAnswer && (
        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentIndex < data.length - 1 ? "Next" : "Finish"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f9",
    paddingTop: 40,
  },
  progress: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#e69830",
    borderRadius: 20,
    marginBottom: 10,
    elevation: 4,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  question: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  answersContainer: {
    marginTop: 10,
  },
  jokersRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  answerBtn: {
    padding: 14,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 6,
    borderRadius: 10,
    width: 350,
    height: 52,
  },
  answerText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
  nextBtn: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#e69830",
    borderRadius: 10,
    alignSelf: "center",
    elevation: 3,
  },
  nextText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#7f8c8d",
  },
});
