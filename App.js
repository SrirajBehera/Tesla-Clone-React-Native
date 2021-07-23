import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import CarItem from './components/CarItems';
import CarsList from './components/CarsList';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={"Model S"}
        tagline={"Order Online for"}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/ModelS.jpeg')}
      /> */}
      <Header />
      <CarsList />
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
});
