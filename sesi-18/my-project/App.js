import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png'
        }} />
      <Text style={styles.txt}>Open up App.js to start working on your app!</Text>
      <Button
        title="Click Me"
        color="blue"
      />
      <StatusBar style="auto" />
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
  txt: {
    fontSize: 20
  },
  img: {
    height: 100,
    width: 100
  }
});