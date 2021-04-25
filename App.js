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
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [changeText, setchangeText] = useState("");
  const [notes, setNotes] = useState([]);
  const onChangeText = (value) => setchangeText(value);
  const addNoteHandler = () =>
    setNotes([...notes, { key: Math.random().toString(), value: changeText }]);
  const removeNoteHandler = (id) => {
    return setNotes(notes.filter((value) => value.key != id));
  }
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
      <FlatList
        keyExtractor={(item) => item.key}
        data={notes}
        renderItem={(value) => (
          <TouchableOpacity onLongPress={removeNoteHandler.bind(this, value.item.key)}>
            <View
              style={{
                borderColor: "#8D8C8C",
                borderWidth: 1,
                padding: 5,
                marginVertical: 5,
                backgroundColor: "white",
                placeholderTextColor: "#2E7BFF",
              }}
            >
              <Text>{value.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.notesView}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },
  childView: {
    fontSize: 22,
    fontFamily: "serif",
    textShadowColor: "blue",
    color: "#2E7BFF",
  },
  subChildView: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  notesView: {
    padding: 10,
    margin: 10,
    backgroundColor: "#E6E4E4",
    marginBottom: 30,
  },
});
