
import React, { useState, useEffect } from 'react';
import { Button, Text } from "native-base";
import { Audio } from 'expo-av';  // Importamos el módulo Audio de expo-av
import { Colors } from "../constants/Colors";


const ButtonBox = ({ item, index }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const items = ["ba", "be", "bi", "bo", "bu"];

  const audios = {
    "paths": [
      require("../assets/audio/letters/sylabics/ba.mp3"),
      require("../assets/audio/letters/sylabics/be.mp3"),
      require("../assets/audio/letters/sylabics/bi.mp3"),
      require("../assets/audio/letters/sylabics/bo.mp3"),
      require("../assets/audio/letters/sylabics/bu.mp3"),

    ]
  };


  const playAudio = async () => {
    if (audios["paths"] === undefined) return;
    try {
      console.log(audios["paths"][items.indexOf(item)]);
      const { sound } = await Audio.Sound.createAsync(audios["paths"][index]);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  };

  const pauseAudio = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error al pausar el sonido:", error);
    }
  };

  // Limpiar el sonido al desmontar el componente
  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();  // Destruir el objeto de sonido cuando el componente se desmonte
      }
      : undefined;
  }, [sound]);

  if (!audios["paths"]) {
    return <Text>Audio no disponible</Text>;
  }

  return (
    <Button
      background={Colors.buttonInactive}
      p="14px"
      w="65px"
      borderRadius={4}
      mt={8}
      mx={4}
      _pressed={{ bg: Colors.buttonActive }}
      onPress={playAudio}
    >
      <Text color={"white"} fontSize={"20px"} textAlign="center">
        {item}
      </Text>
    </Button>
  );
};

export default ButtonBox;

