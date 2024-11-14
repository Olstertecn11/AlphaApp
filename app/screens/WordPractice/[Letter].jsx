import React from 'react';
import { View, Center, VStack, HStack, Box, ScrollView, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../../components/NavigationBar';
import { Colors } from '../../../constants/Colors';
import HeaderBar from '../../../components/HeaderBar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import DrawingCanvas from '../../../components/DrawingCanvas';
import WordsToListen from '../../../assets/data/words_to_listen.json'
import AntDesign from '@expo/vector-icons/AntDesign';




const WordPractice = () => {

  const { Letter } = useLocalSearchParams();
  const vocals = ['A', 'E', 'I', 'O', 'U'];
  const [words, setWords] = React.useState(WordsToListen[Letter]);
  const [wordIndex, setWordIndex] = React.useState(0);
  const router = useRouter();

  const nextRoute = vocals.includes(Letter) ? '' : `/screens/Sylabics/${Letter}`;

  const listenWord = () => {
    // alert('word with voice')
  }


  const passToNext = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex(wordIndex + 1);
    }
    else {
      router.push(`/screens/UnionPhrase/${Letter}`);
    }
  }

  return (
    <View h={'100%'}>
      <HeaderBar />
      <Center mt={40} mb={70}>
        <Text fontSize='40px' fontWeight='bold' color={Colors.buttonActive}>{words[wordIndex]}</Text>
        <TouchableOpacity onPress={listenWord} >
          <AntDesign name="star" size={64} color="yellow" style={{ marginTop: 80 }} />
        </TouchableOpacity>
      </Center>
      <NavigationBar prev={'/screens/WordsMenu'} next={passToNext} nextIsLink={false} />
    </View>
  )
}

export default WordPractice;
