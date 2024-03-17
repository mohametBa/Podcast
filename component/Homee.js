import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function Homee({ navigation }) {
  const handleGoToAudioplayer = () => {
    navigation.navigate('Audioplayer');
  };

  const handleGoToPodcast = () => {
    navigation.navigate('Podcast');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to my Podcast</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToAudioplayer}>
        <Text style={styles.buttonText}>Home Made Podcast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGoToPodcast}>
        <Text style={styles.buttonText}>Spotify Podcast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222831",
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
  },
});

export default Homee;
