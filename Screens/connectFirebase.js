import { View, Text } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { Button, TextInput } from "react-native-paper";
import { useState, useEffect } from "react";

const ConnectFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCpjPJCT-bO49GkuQq982fVp3Ju0sm5prM",
    authDomain: "native-9ba01.firebaseapp.com",
    projectId: "native-9ba01",
    storageBucket: "native-9ba01.appspot.com",
    messagingSenderId: "140174126073",
    appId: "1:140174126073:web:f79e36a08b365da9572b28",
    measurementId: "G-6W3KPL713D",
  };

  initializeApp(firebaseConfig);

  const storeHighScore = (userId, score) => {
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);
    set(reference, {
      highscore: score,
    });
  };

  const setupHighscoreListener = (userId) => {
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);
    onValue(reference, (snapshot) => {
      const highscore = snapshot.val().highscore;
      console.log("New high score: " + highscore);
    });
  };

  const [score, setScore] = useState(0);
  useEffect(() => {
    // setupHighscoreListener("123");
  }, []);

  return (
    <View>
      <Text>Connect To Firebase</Text>
      <TextInput
        label="Enter Score"
        placeholder="score"
        mode="outlined"
        onChangeText={(sc) => setScore(sc)}
      />
      <TextInput label="Empty" placeholder="Empty input" />
      <Button
        onPress={(e) => {
          console.log("dsd");
          storeHighScore("123", score);
        }}
        defaultValue={score}
      >
        Store High Score
      </Button>
    </View>
  );
};

export default ConnectFirebase;
