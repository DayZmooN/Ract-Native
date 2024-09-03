import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dog } from '../entities';

interface Props {
  dog: Dog;
}

export default function DogCard({ dog }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{dog.name}</Text>
      <Text style={styles.breed}>{dog.breed}</Text>
      <Text style={styles.birthdate}>Birthdate: {new Date(dog.birthdate).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    // width:300,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 16,
    color: '#555',
  },
  birthdate: {
    fontSize: 14,
    color: '#777',
  },
});
