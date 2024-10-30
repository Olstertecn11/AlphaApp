import { Box, Image } from "native-base"
import { TouchableOpacity } from 'react-native';
import abcIcon from '../assets/images/icons/abc.png';
import { Colors } from '../constants/Colors'
import React from 'react'
import { useRouter } from "expo-router";



const HeaderBar = ({ icon }) => {

  const [counter, setCounter] = React.useState(0);
  const router = useRouter();

  const handlePress = () => {
    setCounter(counter + 1);
  }

  React.useEffect(() => {
    if (counter === 5 || counter == 5) {
      router.push(`/screens/Stats`);
      setCounter(0);
    }
  }, [counter]);

  return (
    <Box position={'absolute'} top={0} left={0} w={'100%'} h={'20%'} zIndex={-1}>
      <Box bg={Colors.buttonActive} height={4} width="70%" borderRadius={10} my={2} position='absolute' top={4} left={-5} />
      <Box bg="#294E6E" height={4} width="50%" borderRadius={10} mb={6} top={'30.5%'} left={-5} position='absolute' />
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={icon ?? abcIcon}
          position={'absolute'}
          top={'10%'}
          left={'74%'}
          alt="ABC Icon"
          style={{ width: 80, height: 60 }}
        />
      </TouchableOpacity>
    </Box>
  )
}

export default HeaderBar
