import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
//import Sound from "react-native-sound"; // Importez le module react-native-sound
import songs from "../modal/data.js";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

function Audioplayer() {
  const scroll = useRef(new Animated.Value(0)).current;
  const [songsIndex, setSongIndex] = useState(0);
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate("Homee");
  };

  useEffect(() => {
    scroll.addListener((value) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
    return () => {
      scroll.removeAllListeners();
    };
  }, []);

  // const playSong = (songIndex) => {
  //   const sound = new Sound(songs[songIndex].audio, Sound.MAIN_BUNDLE, (error) => {
  //     if (error) {
  //       console.log("Erreur lors du chargement du fichier audio :", error);
  //       return;
  //     }
  //     sound.play((success) => {
  //       if (success) {
  //         console.log("Lecture du fichier audio terminée avec succès");
  //       } else {
  //         console.log("Échec de la lecture du fichier audio");
  //       }
  //     });
  //   });
  //   sound.release(); // Libérer la ressource audio après la lecture
  // };

  const handleNextSong = () => {
    if (songsIndex === songs.length - 1) {
      setSongIndex(0);
    } else {
      setSongIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleprevSong = () => {
    if (songsIndex === 0) {
      setSongIndex(songs.length - 1);
    } else {
      setSongIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSliderChange = (value) => {
    const newIndex = Math.round(value / width);
    setSongIndex(newIndex);
  };

  const renderSongs = ({ index, item }) => {
    if (!item) {
      return null;
    }
    return (
      <Animated.View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.PhotoWrapper}>
          <Image source={item.image} style={styles.ArtImg} />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: width }}>
          <Animated.FlatList
            data={songs}
            renderItem={renderSongs}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={(event) =>
              handleSliderChange(event.nativeEvent.contentOffset.x)
            }
          />
        </View>
        <View>
          <View>
            <Text style={styles.title}>{songs[songsIndex]?.title}</Text>
            <Text style={styles.artist}>{songs[songsIndex]?.artist}</Text>
          </View>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}
          />
        </View>
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>0:00</Text>
          <Text style={styles.progressLabelText}>3:45</Text>
        </View>
        <View style={styles.musicControlls}>
          <TouchableOpacity onPress={handleprevSong}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#FFD359"
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSong(songsIndex)}>
            <Ionicons name="play-outline" size={75} color="#FFD359" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextSong}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD359"
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottonContainer}>
        <View style={styles.bottonControls}>
          <TouchableOpacity onPress={handleBackToHome}>
            <Ionicons name="arrow-back" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "222831#",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#222831",
    justifyContent: "center",
    alignItems: "center",
  },
  bottonContainer: {
    borderTopColor: "#393E46",
    borderTopWidth: 1,
    width: width,
    alignItems: "center",
    paddingVertical: 15,
  },
  bottonControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  PhotoWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowRadius: 3.8,
    shadowOpacity: 0.5,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  ArtImg: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    marginTop: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#EEEEEE",
    marginTop: 15,
  },
  artist: {
    fontSize: 16,
    fontWeight: "200",
    textAlign: "center",
    color: "#EEEEEE",
  },
  progressContainer: {
    width: 300,
    height: 40,
    marginTop: 25,
    flexDirection: "row",
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelText: {
    color: "#FFF",
  },
  musicControlls: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default Audioplayer;
