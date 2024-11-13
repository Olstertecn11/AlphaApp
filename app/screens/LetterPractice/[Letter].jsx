import { HStack, View, Text, Center, Box } from 'native-base';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../../constants/Colors';
import React from 'react';
import NavigationBar from '../../../components/NavigationBar';
import HeaderBar from '../../../components/HeaderBar';
import { Confetti } from 'react-native-fast-confetti';
import { useAvanceDatabase } from '../../../sqlite/useAvanceDatabase';

const InputBox = ({ results, colorScheme }) => {
  return (
    <Box bg={colorScheme ? 'green.400' : Colors.buttonActive} w={'100%'} h='60px' borderRadius={8}>
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


const LetterPractice = () => {

  const { Letter } = useLocalSearchParams();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const letters = [...alphabet.sort(() => Math.random() - 0.5).slice(0, 5), Letter];
  const [answers, setAnswers] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const avanceDatabase = useAvanceDatabase();
  const router = useRouter();

  const addAnswer = (letter) => {
    setAnswers([letter]);
  }

  React.useEffect(() => {
    if (answers[0] === Letter) {
      setIsCorrect(true);
    }
  }, [answers]);

  const nextLesson = () => {
    const response = avanceDatabase.create({ modulo: 'Modulo Alfabetico', letra: Letter, fecha: new Date().toISOString().split('T')[0] });
    console.log(response);
    setIsCorrect(true);
    setTimeout(() => {
      router.replace('/screens/AlphabeticalMenu');
    }, 2000);
    // Reproducir bien hecho felicidades por finalizar la lección
  }


  return (
    <View pt={20}>
      <HeaderBar />
      {isCorrect && <Confetti />}
      <Center>
        <Text color={Colors.buttonActive} fontSize={'140px'} fontWeight='bold' >{Letter}</Text>
      </Center>
      <Center px={8}>
        <InputBox results={answers} colorScheme={isCorrect} />
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
