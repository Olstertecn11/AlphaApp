import React from 'react';
import { Center, VStack, HStack, Box, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import abcIcon from '../../assets/images/icons/abc.png';

const AlphabeticalMenu = () => {


  const boxColorActive = '#69C0FF';
  const boxColorInactive = '#346287';

  return (
    <Center height={'100%'} bg="#071120">

      <Box bg={boxColorActive} height={4} width="70%" borderRadius={10} my={2} position='absolute' top={4} left={-5} />
      <Box bg="#294E6E" height={4} width="50%" borderRadius={10} mb={6} top={'5.5%'} left={-5} position='absolute' />
      <Image
        source={abcIcon}
        position={'absolute'}
        top={5}
        left={'74%'}
        alt="ABC Icon"
        style={{ width: 80, height: 60 }}
      />


      <VStack space={6} alignItems="center">
        <HStack space={6}>
          <TouchableOpacity>
            <Box bg={boxColorActive} size={16} borderRadius={14} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
        </HStack>

        <HStack space={6}>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
        </HStack>

        <HStack space={6}>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Box bg={boxColorInactive} size={16} borderRadius={14} />
          </TouchableOpacity>
        </HStack>
      </VStack>

      <NavigationBar prev={'/screens'} next={''} reload={false} />

    </Center>
  );
};

export default AlphabeticalMenu;

