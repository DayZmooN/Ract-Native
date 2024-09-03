import React, { useState } from 'react';
import { ScrollView, TextInput, Button, Text, View, FlatList, StyleSheet } from 'react-native';
export default function ListNames() {
  const [names, setNames] = useState(['karim', 'florian']);
  const [inputText, setInputText] = useState('');

  function addText() {
    if (inputText.trim().length === 0) {
      return;
    }
    setNames([...names, inputText]);
    setInputText('');
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Enter a name"
        />
        <Button title="Add" onPress={addText} />
        {names.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
        ))}
      </ScrollView>
{/* //autre manier de faire a flatList */}
      <FlatList 
  data={names} 
  renderItem={({ item }) => <Text>{item}</Text>} 
  keyExtractor={(item, index) => index.toString()}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});
