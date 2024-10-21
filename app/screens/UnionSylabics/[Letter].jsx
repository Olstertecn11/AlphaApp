
import { Button, HStack, Center, View, Text, Box } from "native-base";
import React, { useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import consonants from '../../../assets/data/consonantes_ejercicios.json';
import NavigationBar from "../../../components/NavigationBar";
import { Colors } from "../../../constants/Colors";

const ExerciseBox = ({ text, method }) => {
  return (
    <Button bg={Colors.buttonInactive}
      p={4}
      _pressed={{ bg: Colors.buttonActive, color: Colors.buttonInactive }}
      onPress={method}
      borderRadius={6}>
      <Text
        color={Colors.buttonActive}
        fontSize={20}
        fontWeight="bold"
        textAlign="center"
      >
        {text}
      </Text>
    </Button>
  );
};

const AnswerBox = ({ text }) => {
  return (
    <Button bg="black"
      mt={1}
      w={'auto'}
      h={50}
      borderRadius={6}>
      <Text
        color={Colors.buttonActive}
        fontSize={20}
        fontWeight="bold"
        textAlign="center"
      >
        {text}
      </Text>
    </Button>
  );
};

const UnionSylabic = () => {
  const { Letter } = useLocalSearchParams();
  const upperLetter = Letter.toUpperCase();
  const exercises = consonants[upperLetter] || []; // Manejo de caso donde no haya ejercicios
  const [currentExercise, setCurrentExercise] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const vocals = ['A', 'E', 'I', 'O', 'U'];
  const sylabics = [...vocals.map(vocal => upperLetter + vocal), ...exercises[currentExercise].silabas];

  const nextExercise = () => {
    if (exercises.length > 0) {
      setCurrentExercise((prevExercise) =>
        prevExercise < exercises.length - 1 ? prevExercise + 1 : 0
      );
    }
  };


  React.useEffect(() => {
    if (answers.length === exercises[currentExercise].silabas.length) {
      const isCorrect = answers.every((answer, index) => answer === exercises[currentExercise].silabas[index]);
      if (isCorrect) {
        setIsCorrect(true);
      }
    }
  }, [answers]);



  const addAnswer = (sylabic) => {
    if (answers.includes(sylabic) || answers.length >= exercises[currentExercise].silabas.length) {
      return;
    }
    setAnswers((prev) => [...prev, sylabic]);
  }

  return (
    <View flex={1} bg={Colors.background}>
      <Center mt={5}>
        <HStack space={2} alignItems="center">
          <Text color={Colors.buttonActive} fontSize={140} fontWeight="bold">
            {upperLetter}
          </Text>
          {exercises.length > 0 && (
            <Text color={Colors.buttonInactive} fontSize={40} fontWeight="bold">
              {exercises[currentExercise].palabra}
            </Text>
          )}
        </HStack>
      </Center>

      <Center px={5} mt={5}>
        <Box bg={isCorrect ? 'green.600' : Colors.buttonInactive} h={60} w="100%" borderRadius={8} mb={5}>
          <HStack space={2} alignItems="center" justifyContent="center">
            {answers.map((answer, index) => (
              <AnswerBox key={index} text={answer} />
            ))}
          </HStack>
        </Box>

        <HStack space={4} alignItems="center" mt={10}>
          {sylabics.slice(0, 3).map((sylabic, index) => (
            <ExerciseBox key={`${sylabic}-${index}`} text={sylabic} method={() => addAnswer(sylabic)} />
          ))}
        </HStack>

        <HStack space={4} alignItems="center" mt={6}>
          {sylabics.slice(3, 6).map((sylabic, index) => (
            <ExerciseBox key={`${sylabic}-${index}`} text={sylabic} method={() => addAnswer(sylabic)} />
          ))}
        </HStack>

        <HStack space={4} alignItems="center" mt={6}>
          {sylabics.slice(6, 9).map((sylabic, index) => (
            <ExerciseBox key={`${sylabic}-${index}`} text={sylabic} method={() => addAnswer(sylabic)} />
          ))}
        </HStack>
      </Center>

      <NavigationBar prev="/screens/AlphabeticalMenu" next={nextExercise} nextIsLink={false} />
    </View>
  );
};

export default UnionSylabic;

