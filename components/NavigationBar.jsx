import { HStack, Box, Image, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import soundIcon from '../assets/images/icons/sound.png';
import { useRouter, usePathname } from 'expo-router';




const NavigationBar = ({ prev, next, reload = true }) => {



  const router = useRouter();
  const pathname = usePathname();


  return (
    <HStack space={4} position="absolute" bottom={10} alignItems="center">

      <TouchableOpacity onPress={() => router.replace(prev)}>
        <Box bg="#F44336" size={16} borderRadius="full" />
      </TouchableOpacity >


      <TouchableOpacity onPress={() => router.replace(pathname)} >
        <Box bg="#FFC107" size={16} borderRadius="full" />
      </TouchableOpacity >

      <TouchableOpacity onPress={() => router.replace(next)}>
        <Box bg="#4CAF50" size={16} borderRadius="full" />
      </TouchableOpacity>
      <Image
        source={soundIcon}
        alt="Sound Icon"
        style={{ width: 50, height: 50, marginLeft: 54 }}
      />
    </HStack>
  );
}

export default NavigationBar;
