import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  Switch,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Alert,
  StatusBar,
} from "react-native";

const BaseText = ({ children }) => {
  return <Text style={{ fontWeight: "bold", fontSize: 20 }}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  scroll: {
    backgroundColor: "#f9b9c3",
  },
  title: {
    padding: 10,
    color: "red",
  },
});

const Home = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7C75D5" />
      <BaseText>My Base Text</BaseText>
      <ScrollView style={styles.scroll}>
        <Image
          style={{ width: windowWidth - 20, height: 200 }}
          source={{
            uri: "https://www.sigarch.org/wp-content/uploads/2020/04/AdobeStock_86833018-1080x675.jpeg",
          }}
        />
        <TextInput placeholder="Enter Your Name" />
        <Button title="Save Name" />
        <Switch title="AutoSave" />
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />

        <Text>Something</Text>
      </ScrollView>
      <FlatList
        data={DATA}
        renderItem={({ title }) => <Text style={styles.title}>{title}</Text>}
        keyExtractor={(item) => item.id}
      />
      <ActivityIndicator size="large" color="#00ff00" />
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button
        title="Go to Avoidable"
        onPress={() => navigation.navigate("avoid", { name: "Jane" })}
      />
      <Button
        title="Go to Firebase"
        onPress={() => navigation.navigate("firebase")}
      />
    </View>
  );
};

export default Home;
