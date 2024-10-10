
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Center, VStack, HStack, Box } from 'native-base';
import dogIcon from '../../assets/images/icons/dog.webp';
import catIcon from '../../assets/images/icons/cat.webp';
import abcIcon from '../../assets/images/icons/abc.png';
import readIcon from '../../assets/images/icons/reading.png';
import NavigationBar from '../../components/NavigationBar';

const Index = () => {
  return (
    <Center flex={1} bg="#071120" w={'100%'}>
      <VStack space={6} alignItems="center" w={'100%'} >
        <TouchableOpacity style={{ width: '80%' }}>
          <HStack space={4} alignItems="center" justifyItems='center' justifyContent='center' bg="#4CA0FF" px={8} py={4} borderRadius={20} w={'100%'}>
            <Image
              source={dogIcon}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={abcIcon}
              style={{ width: 70, height: 50 }}
            />
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '80%' }}>
          <HStack space={4} alignItems="center" bg="#374555" px={8} py={4} borderRadius={20} w={'100%'} justifyContent='center'>
            <Image
              source={catIcon}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={readIcon}
              style={{ width: 50, height: 50 }}
            />
          </HStack>
        </TouchableOpacity>
      </VStack>

      <NavigationBar prev={'/'} next={'/screens/AlphabeticalMenu'} />
    </Center>
  );
};

export default Index;
