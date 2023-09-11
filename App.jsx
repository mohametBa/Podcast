import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import Audioplayer from './component/Audioplayer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Audioplayer/>
    </View>  
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#222831'
  }
});

