
import React from 'react';
import { Center, Box, Text, SimpleGrid } from 'native-base';
import { useLocalSearchParams } from 'expo-router';
import SyllabicData from '../../../assets/data/syllabic_combination_letters.json';
import NavigationBar from '../../../components/NavigationBar';
import { Colors } from '../../../constants/Colors';
import ButtonBox from '../../../components/ButtonBox';

const SyllabicBox = () => {
  console.log('SyllabicBox');
  const { Letter } = useLocalSearchParams();
  const [sylabics, setSylabics] = React.useState([]);
  console.log(Letter);

  React.useEffect(() => {
    SyllabicData.combinations.forEach((item) => {
      console.log(item.letter + " == " + Letter.toUpperCase());
    });
    const letter = SyllabicData.combinations.filter((item) => item.letter === Letter.toUpperCase());
    console.log(letter[0].syllabic_combination);
    setSylabics(letter[0].syllabic_combination);
  }, [Letter]);

  return (
    <Center flex={1} bg="red">
      <Box justifyContent="center" alignItems="center" p={5} bg="red">
        <Text color={Colors.buttonActive} fontSize={'220px'} fontWeight='bold'>{Letter}</Text>

        <SimpleGrid columns={3} spacing={10} mt={0} justifyItems={'center'} justifyContent='center' alignItems='center'  >
          {sylabics.map((item, index) => (
            <ButtonBox item={item} />
          ))}
        </SimpleGrid>

      </Box>
      <NavigationBar prev={'/screens/AlphabeticalMenu'} next={'/screens/SyllabicMenu'} />
    </Center>
  );
};

export default SyllabicBox;

