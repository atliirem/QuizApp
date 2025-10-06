// src/navigation/RootStack.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StartPage} from "../screens/StartPage";
import {Questions} from "../screens/Questions";
import {Results} from "../screens/Results";

import {StartQuiz} from "../screens/StartQuiz";
import {Categories} from "../screens/Categories";
import {StartNamePage} from "../screens/StartNamePage";
import {History} from "../screens/History";
import {Start1} from "../screens/Start1";
import {PhoneJoker} from "../component/phonejoker";

  export type RootStackParamList = {
  StartNamePage: undefined;
  Start: { name: string;  };
  Categories: { difficulty: string; name: string; surname: string };
  StartQuiz: { categoryId: number; difficulty: string; name: string; surname: string };
  Questions: { categoryId: number; difficulty: string; name: string; surname: string };
  Results: { score: number; name: string;};
  History: undefined;
  Start1: undefined;
  PhoneJoker: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Start1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="StartNamePage"
        component={StartNamePage}
        options={{ title: "Welcome" }}
      />
       <Stack.Screen
        name="History"
        component={History}
        options={{ title: "History" }}
      /> 

      <Stack.Screen
        name="Start"
        component={StartPage}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Questions"
        component={Questions}
        options={{ title: "Questions" }}
      />
      <Stack.Screen name="Results" component={Results} />
  
    
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="StartQuiz" component={StartQuiz}/>
      <Stack.Screen name="Start1" component={Start1}/>
      <Stack.Screen name="PhoneJoker" component={PhoneJoker}/>
    </Stack.Navigator>
  );
}
 