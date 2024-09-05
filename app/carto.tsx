import React, { useEffect, useState } from 'react';
import MapView, { Marker, MapPressEvent } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

interface MarkerData {
  latitude: number;
  longitude: number;
  title: string;
}

export default function App() {
  const [markers, setMarkers] = useState<MarkerData[]>([
    { latitude: 45.76, longitude: 4.86, title: 'M2I' },
    { latitude: 40.76, longitude: -73.98, title: 'M2I NYC' }, // Example location
  ]);

  const [region, setRegion] = useState({
    latitude: 45.76,
    longitude: 4.86,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const addMarker = (latitude: number, longitude: number) => {
    setMarkers([
      ...markers,
      { latitude, longitude, title: `Marker ${markers.length + 1}` },
    ]);
  };

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Watch the position
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1 },
        (newLocation) => {
          setUserLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          });
        }
      );
    })();
  }, []);

  const handleMapLongPress = (event: MapPressEvent) => {
    const { coordinate } = event.nativeEvent;
    addMarker(coordinate.latitude, coordinate.longitude);
  };

  return (
    <View style={styles.container}>
      <MapView
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        style={styles.map}
        onLongPress={handleMapLongPress} // Add marker on long press
      >
        {userLocation && (
          <Marker
            coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
            title="You are here"
            pinColor="blue" // Set the marker color to blue
          />
        )}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            pinColor="red" // Set the marker color for other markers
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
