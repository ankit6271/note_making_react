import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [changeText, setchangeText] = useState('');
  const [notes,setNotes] =useState([]);
  const onChangeText = (value) => (
    setchangeText(value)
  )
  const addNoteHandler =() =>(
    setNotes([...notes,changeText])
  )
  return (
    <View style={styles.container}>
      <View >
        <Text>Note Making App</Text>
      </View>
      <View >
        <TextInput placeholder="Enter a Note" onChangeText={onChangeText}></TextInput>
        <Button onPress={addNoteHandler} title="Add Note" ></Button>
      </View>
      <View>
        <Text>{notes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chidView:{

  }
});
