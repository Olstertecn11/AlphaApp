import React from 'react';
import { Image, Center, IconButton, VStack, Icon, Button } from 'native-base';
import playIcon from '../assets/images/icons/play.png';
import handIcon from '../assets/images/icons/hand.png';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';  // Importamos el módulo Audio de expo-av
import { useIsFocused } from '@react-navigation/native';

const InitialScreen = () => {

  const router = useRouter();
  const isFocused = useIsFocused();

  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audio_path = require('../assets/audio/letters/instructions/bienvenido.m4a');

  const playAudio = async () => {
    if (!audio_path) return;
    try {
      const { sound } = await Audio.Sound.createAsync(audio_path);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  };


  React.useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  React.useEffect(() => {
    if (isFocused) {
      playAudio();
    }
  }, [isFocused]);


  return (
    <Center flex={1} bg="darkBlue.900">
      <VStack space={10} alignItems="center">

        <Button borderRadius={'100px'} w='80px' h={'82px'} onPress={() => router.replace('/screens')}>
          <Image source={playIcon} alt="Play" size={'40px'} />
        </Button>
        <Image source={handIcon} alt="Play" size={'40px'} position={'absolute'}
          top={'90%'} left={'10%'} transform={[{ translateX: 0 }, { translateY: -20 }]}
        />
      </VStack>
    </Center>
  );
};

export default InitialScreen;
