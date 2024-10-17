import { Button, Box, Text } from "native-base";
import { Colors } from "../constants/Colors";

const ButtonBox = ({ item }) => {


  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'es-ES';
      window.speechSynthesis.speak(speech);
    } else {
      alert('Lo siento, tu navegador no soporta Speech Synthesis.');
    }
  };


  return (
    <Button background={Colors.buttonInactive} p='14px' w='65px' borderRadius={4} mt={8} mx={4} _pressed={{ bg: Colors.buttonActive }} onPress={() => speak(item)}>
      <Text color={'white'} fontSize={'20px'} textAlign='center'>{item}</Text>
    </Button>
  )

};


export default ButtonBox;
