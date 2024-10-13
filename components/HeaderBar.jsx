import { Box, Image } from "native-base"
import abcIcon from '../assets/images/icons/abc.png';
import { Colors } from '../constants/Colors'



const HeaderBar = () => {

  return (

    <Box position={'absolute'} top={0} left={0} w={'100%'} h={'20%'} zIndex={-1}>
      <Box bg={Colors.buttonActive} height={4} width="70%" borderRadius={10} my={2} position='absolute' top={4} left={-5} />
      <Box bg="#294E6E" height={4} width="50%" borderRadius={10} mb={6} top={'30.5%'} left={-5} position='absolute' />
      <Image
        source={abcIcon}
        position={'absolute'}
        top={'10%'}
        left={'74%'}
        alt="ABC Icon"
        style={{ width: 80, height: 60 }}
      />
    </Box>

  )
}

export default HeaderBar
