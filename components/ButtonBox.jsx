import { Button, Box, Text } from "native-base";
import { Colors } from "../constants/Colors";
import Tts from 'react-native-tts';

const ButtonBox = ({ item }) => {


  const speak = (text) => {
    Tts.speak(text);
  };


  return (
    <Button background={Colors.buttonInactive} p='14px' w='65px' borderRadius={4} mt={8} mx={4} _pressed={{ bg: Colors.buttonActive }} onPress={() => speak(item)}>
      <Text color={'white'} fontSize={'20px'} textAlign='center'>{item}</Text>
    </Button>
  )

};


export default ButtonBox;
