
import React from 'react';
import { Center, VStack, HStack, Box, ScrollView, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { Colors } from '../../constants/Colors';
import HeaderBar from '../../components/HeaderBar';

const MenuRow = ({ items }) => {
  return (
    <HStack space={6}>
      {items.map((item, index) => (
        <MenuItem key={index} letter={item} />
      ))}
    </HStack>
  );
};

const MenuItem = ({ letter }) => {

  const vocals = ['A', 'E', 'I', 'O', 'U'];
  if (!letter) return <Box size={16} />;

  const isVocal = vocals.includes(letter);

  return (
    <TouchableOpacity>
      <Box bg={isVocal ? Colors.buttonImportant : Colors.buttonInactive} size={16} borderRadius={14} justifyContent="center" alignItems="center">
        <Text color="white">{letter}</Text>
      </Box>
    </TouchableOpacity>
  );
};

const AlphabeticalMenu = () => {
  const AlphabetGrid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
    ['J', 'K', 'L'],
    ['M', 'N', 'O'],
    ['P', 'Q', 'R'],
    ['S', 'T', 'U'],
    ['V', 'W', 'X'],
    ['Y', 'Z', ''],
  ];


  return (
    <Center height="100%" bg="#071120">
      <HeaderBar />

      <ScrollView mt={'40%'} w={'100%'}>
        <VStack space={6} alignItems="center">
          {AlphabetGrid.map((items, index) => (
            <MenuRow key={index} items={items} />
          ))}
        </VStack>
      </ScrollView>

      <NavigationBar prev={'/screens'} next={''} reload={false} />
    </Center>
  );
};

export default AlphabeticalMenu;

