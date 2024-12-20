import React from 'react';
import { Center, VStack, HStack, Box, ScrollView, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../../components/NavigationBar';
import { Colors } from '../../../constants/Colors';
import HeaderBar from '../../../components/HeaderBar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import DrawingCanvas from '../../../components/DrawingCanvas';




const LetterScreen = () => {

  const { Letter } = useLocalSearchParams();
  const vocals = ['A', 'E', 'I', 'O', 'U'];

  const nextRoute = vocals.includes(Letter) ? '' : `/screens/Sylabics/${Letter}`;
  return (
    <Center>
      <HeaderBar />
      <Box mt={8} w='100%' h='500px' >
        <DrawingCanvas letter={Letter} />
      </Box>
      <NavigationBar prev={'/screens/AlphabeticalMenu'} next={nextRoute} />
    </Center>
  )
}

export default LetterScreen;
