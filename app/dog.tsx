import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from 'react-native';
import DogCard from '@/components/DogCard';
import { Dog } from "@/entities";
import axios from "axios";

export default function DogList() {
  const [dogsList, setDogsList] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await axios.get<Dog[]>('/api/dogs');
      setDogsList(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch dogs.');
      console.error(error);
      setLoading(false);
    }
  };

  const removeDog = async (id: number) => {
    try {
      await axios.delete(`/api/dogs/${id}`);
      setDogsList(prevDogs => prevDogs.filter(dog => dog.id !== id));
    } catch (error) {
      setError('Failed to delete the dog.');
      console.error(error);
    }
  };

  const handleDelete = (id: number) => {
    removeDog(id);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dogsList}
        renderItem={({ item }) => (
          <DogCard dog={item} onDelete={handleDelete} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
