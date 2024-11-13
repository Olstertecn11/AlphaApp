
import React from 'react';
import { Center, VStack, HStack, Box, ScrollView, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { Colors } from '../../constants/Colors';
import HeaderBar from '../../components/HeaderBar';
import { useRouter } from 'expo-router';
import { useIsFocused } from '@react-navigation/native';
import { useAvanceDatabase } from '../../sqlite/useAvanceDatabase';

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

  const router = useRouter();
  const isVocal = vocals.includes(letter);

  return (
    <TouchableOpacity onPress={() => router.push(`/screens/Letters/${letter}`)}>
      <Box bg={isVocal ? Colors.buttonImportant : Colors.buttonInactive} size={16} borderRadius={14} justifyContent="center" alignItems="center">
        <Text color="white">{letter}</Text>
      </Box>
    </TouchableOpacity>
  );
};

const AlphabeticalMenu = () => {

  const isFocused = useIsFocused();
  const avanceDatabase = useAvanceDatabase();

  const getAll = async () => {
    // const response = await avanceDatabase.getAllAvance();
    // console.log('get all');
    // console.log(response);
  }

  React.useEffect(() => {
    if (isFocused) {
      // getAll();
    }
  }, [isFocused]);

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

  React.useEffect(() => {
    // const result = createTable();
    // console.log(result);
  }, []);




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

