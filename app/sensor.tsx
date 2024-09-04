import { SafeAreaView, Text, StyleSheet, View, Image, Button } from "react-native";
import { DeviceMotion } from 'expo-sensors';
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function Sensors() {
  const [rotation, setRotation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const sub = DeviceMotion.addListener(data => setRotation({ ...data.rotation }));
    
    return () => sub.remove();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (result.assets && result.assets[0]) {
      setImage(result.assets[0].uri);
    }
  };

  const xPosition = Number(100 + (rotation.gamma || 0) * 100) || 100;
  const yPosition = Number(300 + (rotation.beta || 0) * 150) || 300;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>alpha: {rotation.alpha * 100}, beta: {rotation.beta * 100}, gamma: {rotation.gamma * 150}</Text>
      <Button title="Pick an Image" onPress={pickImage} />

      {image && (
        <Image 
          source={{ uri: image }} 
          style={{ ...styles.square, left: xPosition, top: yPosition }} 
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: 'red',
  },
});
