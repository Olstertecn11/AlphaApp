
import React from 'react';
import { Center, Box, Text, SimpleGrid } from 'native-base';
import { useLocalSearchParams } from 'expo-router';
import SyllabicData from '../../../assets/data/syllabic_combination_letters.json';
import NavigationBar from '../../../components/NavigationBar';
import { Colors } from '../../../constants/Colors';
import ButtonBox from '../../../components/ButtonBox';

const SyllabicBox = () => {
  const { Letter } = useLocalSearchParams();
  const [sylabics, setSylabics] = React.useState([]);
  // create array with all sylabics of alfabet

  React.useEffect(() => {
    const letter = SyllabicData.combinations.filter((item) => item.letter === Letter.toUpperCase());
    setSylabics(letter[0].syllabic_combination);
  }, [Letter]);

  return (
    <Center flex={1} bg="red">
      <Box justifyContent="center" alignItems="center" p={5} bg="red">
        <Text color={Colors.buttonActive} fontSize={'220px'} fontWeight='bold'>{Letter}</Text>

        <SimpleGrid columns={3} spacing={10} mt={0} justifyItems={'center'} justifyContent='center' alignItems='center'  >
          {sylabics.map((item, index) => (
            <ButtonBox key={index} item={item} index={index} />
          ))}
        </SimpleGrid>

      </Box>
      <NavigationBar prev={'/screens/AlphabeticalMenu'} next={`/screens/UnionSylabics/${Letter}`} />
    </Center>
  );
};

export default SyllabicBox;

