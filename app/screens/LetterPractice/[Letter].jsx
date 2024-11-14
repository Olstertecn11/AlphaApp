import { HStack, View, Text, Center, Box } from 'native-base';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../../constants/Colors';
import React from 'react';
import NavigationBar from '../../../components/NavigationBar';
import HeaderBar from '../../../components/HeaderBar';
import { Confetti } from 'react-native-fast-confetti';
import { useAvanceDatabase } from '../../../sqlite/useAvanceDatabase';
import { Audio } from 'expo-av';  // Importamos el módulo Audio de expo-av

const InputBox = ({ results, colorScheme, isWrong }) => {
  return (
    <Box bg={colorScheme ? 'green.400' : isWrong ? 'red.600' : Colors.buttonActive} w={'100%'} h='60px' borderRadius={8}>
      <HStack space={1}>
        {results && results.map((letter, index) => (
          <Box key={index} bg={colorScheme ? 'green.800' : Colors.buttonActive} w={'80px'} h='60px' borderRadius={8} >
            <Text color={!colorScheme ? Colors.buttonInactive : 'green.50'} textAlign='center' fontSize={'20px'} fontWeight='bold' mt={'20%'}>{letter}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

const audios = {
  "a": require("../../../assets/audio/letters/letter/a.m4a"),
  "b": require("../../../assets/audio/letters/letter/b.m4a"),
  "c": require("../../../assets/audio/letters/letter/c.m4a"),
  "d": require("../../../assets/audio/letters/letter/d.m4a"),
  "e": require("../../../assets/audio/letters/letter/e.m4a"),
  "f": require("../../../assets/audio/letters/letter/f.m4a"),
  "g": require("../../../assets/audio/letters/letter/g.m4a"),
  "h": require("../../../assets/audio/letters/letter/h.m4a"),
  "i": require("../../../assets/audio/letters/letter/i.m4a"),
  "j": require("../../../assets/audio/letters/letter/j.m4a"),
  "k": require("../../../assets/audio/letters/letter/k.m4a"),
  "l": require("../../../assets/audio/letters/letter/l.m4a"),
  "m": require("../../../assets/audio/letters/letter/m.m4a"),
  "n": require("../../../assets/audio/letters/letter/n.m4a"),
  "ñ": require("../../../assets/audio/letters/letter/ñ.m4a"),
  "o": require("../../../assets/audio/letters/letter/o.m4a"),
  "p": require("../../../assets/audio/letters/letter/p.m4a"),
  "q": require("../../../assets/audio/letters/letter/q.m4a"),
  "r": require("../../../assets/audio/letters/letter/r.m4a"),
  "s": require("../../../assets/audio/letters/letter/s.m4a"),
  "t": require("../../../assets/audio/letters/letter/t.m4a"),
  "u": require("../../../assets/audio/letters/letter/u.m4a"),
  "v": require("../../../assets/audio/letters/letter/v.m4a"),
  "w": require("../../../assets/audio/letters/letter/w.m4a"),
  "x": require("../../../assets/audio/letters/letter/x.m4a"),
  "y": require("../../../assets/audio/letters/letter/y.m4a"),
  "z": require("../../../assets/audio/letters/letter/z.m4a")
};




const LetterPractice = () => {

  const { Letter } = useLocalSearchParams();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const letters = [...alphabet.sort(() => Math.random() - 0.5).slice(0, 5), Letter];
  const [answers, setAnswers] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isWrong, setIsWrong] = React.useState(false);
  const avanceDatabase = useAvanceDatabase();
  const router = useRouter();


  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playAudio = async (item, direct = false) => {
    if (!audios) return;
    try {
      if (!direct) {
        const item_lower = item.toLowerCase();
        const { sound } = await Audio.Sound.createAsync(audios[item_lower]);
        setSound(sound);
        await sound.playAsync();
        setIsPlaying(true);
      }
      else {
        const { sound } = await Audio.Sound.createAsync(item);
        setSound(sound);
        await sound.playAsync();
        setIsPlaying(true);
      }
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

  const addAnswer = (letter) => {
    playAudio(letter);
    setAnswers([letter]);
  }

  React.useEffect(() => {
    if (answers[0] === Letter) {
      playAudio(require("../../../assets/audio/letters/instructions/felicidades.m4a"), true);
      setIsCorrect(true);
      setIsWrong(false);
    }
    else {
      if (answers.length > 0) {
        playAudio(require("../../../assets/audio/letters/instructions/incorrecta.m4a"), true);
        setIsWrong(true);
        setIsCorrect(false);
      }
    }
  }, [answers]);

  const nextLesson = () => {
    const response = avanceDatabase.create({ modulo: 'Modulo Alfabetico', letra: Letter, fecha: new Date().toISOString().split('T')[0] });
    console.log(response);
    setIsCorrect(true);
    setTimeout(() => {
      router.replace('/screens/AlphabeticalMenu');
    }, 2000);
  }


  return (
    <View pt={20}>
      <HeaderBar />
      {isCorrect && <Confetti />}
      <Center>
        <Text color={Colors.buttonActive} fontSize={'140px'} fontWeight='bold' >{Letter}</Text>
      </Center>
      <Center px={8}>
        <InputBox results={answers} colorScheme={isCorrect} isWrong={isWrong} />
      </Center>
      <Center>
        <HStack space={2} mt={8}>
          {letters.slice(0, 3).map((letter, index) => (
            <TouchableOpacity onPress={() => addAnswer(letter)} key={index}>
              <Box key={index} bg={Colors.buttonInactive} w={'80px'} h='60px' borderRadius={8}  >
                <Text color={Colors.buttonActive} textAlign='center' fontSize={'20px'} fontWeight='bold' mt={'20%'}>{letter}</Text>
              </Box>
            </TouchableOpacity>
          ))}
        </HStack>
        <HStack space={2} mt={4}>
          {letters.slice(3, 6).map((letter, index) => (
            <TouchableOpacity onPress={() => addAnswer(letter)} key={index}>
              <Box key={index} bg={Colors.buttonInactive} w={'80px'} h='60px' borderRadius={8}>
                <Text color={Colors.buttonActive} textAlign='center' fontSize={'20px'} fontWeight='bold' mt={'20%'}>{letter}</Text>
              </Box>
            </TouchableOpacity>
          ))}
        </HStack>
      </Center>
      {
        isCorrect &&
        <NavigationBar prev={`/screens`} reload={true} next={nextLesson} nextIsLink={false} />
      }
      {
        !isCorrect &&
        <NavigationBar prev={`/screens`} reload={true} />
      }
    </View >
  )
};

export default LetterPractice;
