import React from 'react';
import { Center, VStack, HStack, Box, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import abcIcon from '../../assets/images/icons/abc.png';

const AlphabeticalMenu = () => {
  return (
    <Center flex={1} bg="#071120">
      <HStack justifyContent="flex-end" w="100%" p={4}>
        <Image
          source={abcIcon}
          alt="ABC Icon"
          style={{ width: 80, height: 60 }}
        />
      </HStack>

      <Box bg="blue.500" height={2} width="90%" borderRadius={10} my={2} />
      <Box bg="gray.500" height={2} width="50%" borderRadius={10} mb={6} />

      <VStack space={6} alignItems="center">
        <HStack space={6}>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
        </HStack>

        <HStack space={6}>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
        </HStack>

        <HStack space={6}>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg="#4CA0FF" size={16} borderRadius={20} />
          </TouchableOpacity>
        </HStack>
      </VStack>

      <NavigationBar prev={'/screens'} next={'/'} />

    </Center>
  );
};

export default AlphabeticalMenu;

