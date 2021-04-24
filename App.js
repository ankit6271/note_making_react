import { useDeviceOrientation } from "@react-native-community/hooks";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

export default function App() {
  const [changeText, setchangeText] = useState("");
  const [notes, setNotes] = useState([]);
  useDeviceOrientation();
  const onChangeText = (value) => setchangeText(value);
  const addNoteHandler = () => setNotes([...notes, changeText]);
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center", 
        }}
      >
        <Text style={styles.childView}>Note Making App</Text>
      </View>
      <View style={styles.subChildView}>
        <TextInput
          placeholder="Enter a Note"
          placeholderTextColor="#2E7BFF"
          onChangeText={onChangeText}
          style={{
            width: "70%",
            borderWidth: 1.0,
            borderColor: "#2E7BFF",
            padding: 5,
            marginRight: 5,
          }}
        ></TextInput>
        <Button
          onPress={addNoteHandler}
          style={{ marginLeft: 10 }}
          title="Add Note"
        ></Button>
      </View>
      <View style={styles.notesView}>
        {notes.map((value, index) => (
          <View
            key={index}
            style={{
              borderColor: "#8D8C8C",
              borderWidth: 1,
              padding: 5,
              marginVertical: 5,
              backgroundColor: "white",
              placeholderTextColor: "#2E7BFF",
            }}
          >
            <Text>{value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
  childView: {
    fontSize:22,
    fontFamily:"serif",
    textShadowColor:"blue",
    color:"#2E7BFF"
  },
  subChildView: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  notesView: {
    padding: 10,
    margin: 10,
    backgroundColor:"#E6E4E4",
    marginBottom:30
  },
});
