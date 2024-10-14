import React from 'react';
import { Center, VStack, HStack, Box, ScrollView, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../../components/NavigationBar';
import { Colors } from '../../../constants/Colors';
import HeaderBar from '../../../components/HeaderBar';
import { useRouter, useLocalSearchParams } from 'expo-router';




const LetterScreen = () => {

  const { Letter } = useLocalSearchParams();

  console.log(Letter);
  return (
    <Center>
      <HeaderBar />
      <ScrollView mt={'40%'} w={'100%'} pt={'10%'}>
        <Text color={Colors.buttonInactive} fontWeight='bold' fontSize='240px' textAlign='center'>{Letter}</Text>
      </ScrollView>
      <NavigationBar prev={'/screens/AlphabeticalMenu'} next={''} reload={false} />
    </Center>
  )
}

export default LetterScreen;
