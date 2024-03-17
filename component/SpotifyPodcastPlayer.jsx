import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios'; // Importez la bibliothèque Axios

function SpotifyPodcastPlayer() {
  const [podcastData, setPodcastData] = useState(null);

  useEffect(() => {
    // Fonction pour effectuer la requête HTTP GET à l'API Spotify
    const fetchPodcastData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ', {
          headers: {
            Authorization: 'Bearer 7c261f427c3c4859b2000a09e96542cb', // Remplacez par votre jeton d'autorisation Spotify
          },
        });
        setPodcastData(response.data);
      } catch (error) {
        console.error('Error fetching podcast data:', error);
      }
    };

    // Appel de la fonction pour effectuer la requête au chargement du composant
    fetchPodcastData();
  }, []); // Utilisation d'un tableau vide pour s'assurer que cette fonction est appelée une seule fois

  if (!podcastData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Affichage des données du podcast récupérées
  return (
    <View style={styles.container}>
      <Image source={{ uri: podcastData.images[0].url }} style={styles.image} />
      <Text style={styles.title}>{podcastData.name}</Text>
      <Text style={styles.description}>{podcastData.description}</Text>
      {/* Ajoutez d'autres éléments d'interface utilisateur pour afficher les données du podcast */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
  },
});

export default SpotifyPodcastPlayer;
