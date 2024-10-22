import { ScrollView, VStack, Box, HStack, Center, View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import WordsToListen from '../../assets/data/words_to_listen.json'
import HeaderBar from '../../components/HeaderBar';
import NavigationBar from "../../components/NavigationBar";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";



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
    <TouchableOpacity onPress={() => router.push(`/screens/WordPractice/${letter}`)}>
      <Box bg={isVocal ? Colors.buttonImportant : Colors.buttonInactive} size={16} borderRadius={14} justifyContent="center" alignItems="center">
        <Text color="white">{letter}</Text>
      </Box>
    </TouchableOpacity>
  );
};


const WordsMenu = () => {



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

  console.log(WordsToListen);




  return (
    <View pt={20} h={'100%'}>
      <HeaderBar />
      <ScrollView mt={'40%'} w={'100%'}>
        <VStack space={6} alignItems="center">
          {AlphabetGrid.map((items, index) => (
            <MenuRow key={index} items={items} />
          ))}
        </VStack>
      </ScrollView>
      <NavigationBar />
    </View>
  );
}

export default WordsMenu;


