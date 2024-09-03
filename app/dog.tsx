import { useState } from "react";
import { View,FlatList,StyleSheet }  from 'react-native';
import DogCard from '@/components/DogCard';
import { Dog } from "@/entities";



export default function dog(){
    const [dogs, setDogs] = useState<Dog[]>([
        { id: 1, name: 'Fido', breed: 'Corgi', birthdate: '2023-01-03' },
        { id: 2, name: 'Bella', breed: 'Labrador', birthdate: '2022-06-15' },
        { id: 3, name: 'Rex', breed: 'German Shepherd', birthdate: '2021-09-08' },
      ]);
      
      return(
        <View style={styles.container}>
        <FlatList
          data={dogs}
          renderItem={({ item }) => <DogCard dog={item} />}
          keyExtractor={(item,index) => item.id?.toString() || index.toString()}
        />
      </View>
      )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
          justifyContent:'center',
        },
      });
