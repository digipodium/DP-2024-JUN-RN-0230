import React from "react";
import { View, Text } from "react-native";
// import { Card, ListItem, Button, Icon } from "react-native-elements";

const MyCard = () => {
  return (
    <View>
      <Text>Here is a view</Text>
    </View>
  );
};

const Register = () => {
  return (
    <View>
      <Text>Register Here</Text>
      <MyCard></MyCard>
    </View>
  );
};

export default Register;
