import React from 'react';
import { View, Center, VStack, HStack, Box, ScrollView, Text, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../../components/NavigationBar';
import { Colors } from '../../../constants/Colors';
import HeaderBar from '../../../components/HeaderBar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import unionPhrases from '../../../assets/data/union_phrases.json';
import { Confetti } from 'react-native-fast-confetti';
import { Audio } from 'expo-av';  // Importamos el módulo Audio de expo-av




const UnionPhrase = () => {
  const router = useRouter();
  const { Letter } = useLocalSearchParams();
  const [phrases, setPhrases] = React.useState(unionPhrases[Letter].phrases);
  const [options, setOptions] = React.useState(unionPhrases[Letter].options);
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [renderOptions, setRenderOptions] = React.useState([]);
  const [answers, setAnswers] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);



  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isWrong, setIsWrong] = React.useState(false);

  const playAudio = async (item) => {
    try {
      const { sound } = await Audio.Sound.createAsync(item);
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


  const getRandomElements = (array, count) => {
    const result = [];
    const arrayCopy = [...array];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      result.push(arrayCopy.splice(randomIndex, 1)[0]);
    }

    return result;
  };

  const generateNewOptions = () => {
    const filteredArray = options.filter(option => !phrases[phraseIndex].includes(option));
    const randomOptions = getRandomElements(filteredArray, 3);
    const combinedOptions = [...phrases[phraseIndex], ...randomOptions];
    const shuffledOptions = combinedOptions.sort(() => Math.random() - 0.5);
    setRenderOptions(shuffledOptions);
  };

  React.useEffect(() => {
    generateNewOptions();
  }, [phraseIndex]);

  React.useEffect(() => {
    if (answers.join('') === phrases[phraseIndex].join('')) {
      playAudio(require("../../../assets/audio/letters/instructions/correcta.m4a"));
      setIsCorrect(true);
      if (phraseIndex === phrases.length - 1) {
        playAudio(require("../../../assets/audio/letters/instructions/felicidades.m4a"));
      }
    }
    else {
      if (answers.length > 0 && answers.length === phrases[phraseIndex].length) {
        playAudio(require("../../../assets/audio/letters/instructions/incorrecta.m4a"));
        setIsCorrect(false);
        setIsWrong(true);
      }
    }
  }, [answers]);


  const addAnswer = (option) => {
    setAnswers([...answers, option]);
  }


  const nextExercise = () => {
    if (phraseIndex === phrases.length - 1) {
      setIsCorrect(true);
      setTimeout(() => {
        router.push('/screens/WordsMenu');
      }, 1000);
      return;
    }
    setPhraseIndex(phraseIndex + 1);
    setAnswers([]);
    setIsCorrect(false);
    generateNewOptions();
  }


  return (
    <View h={'100%'}>
      <HeaderBar />
      {isCorrect && <Confetti />}
      <Center mt={40} mb={70} px={6}>
        <Text fontSize='40px' fontWeight='bold' textAlign='center' color={Colors.buttonActive}>{phrases[phraseIndex].join(' ')}</Text>
        <Box h={'50px'} w='100%' bg={!isCorrect ? isWrong ? 'red.600' : Colors.buttonInactive : 'green.500'} borderRadius={8}>
          <HStack space={1} alignItems='center' justifyContent='center' pt={2}>
            {
              answers.map((answer, index) => (
                <Box bg={!isCorrect ? Colors.buttonActive : 'green.300'} w={'auto'} h='100%' p={2} borderRadius={8}>
                  <Text key={index} fontSize='12px' fontWeight='bold' color={Colors.buttonInactive}>{answer}</Text>
                </Box>
              ))
            }
          </HStack>
        </Box>
        <HStack flexWrap={'wrap'} space={4} mx='10%' alignItems='center' justifyItems='center' justifyContent='center' mt={8}>
          {
            renderOptions.map((option, index) => (
              <Button key={index} bg={Colors.buttonInactive} mt={4} onPress={() => addAnswer(option)}>
                <Text fontSize='16px' fontWeight='bold' color={Colors.buttonActive}>{option}</Text>
              </Button>
            ))
          }
        </HStack>
      </Center>
      <NavigationBar prev={'/screens/AlphabeticalMenu'} next={isCorrect ? nextExercise : null} nextIsLink={false} />
    </View>
  )
}

export default UnionPhrase;
