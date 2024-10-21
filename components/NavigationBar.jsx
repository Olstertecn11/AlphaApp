import { HStack, Box, Image, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import soundIcon from '../assets/images/icons/sound.png';
import { useRouter, usePathname } from 'expo-router';




const NavigationBar = ({ prev, next, reload = true, nextIsLink = true }) => {



  const router = useRouter();
  const pathname = usePathname();

  const renderNext = () => {
    if (nextIsLink) {
      if (next && next.length > 0) {
        return (
          <TouchableOpacity onPress={() => router.push(next)}>
            <Box bg="#4CAF50" size={16} borderRadius="full" />
          </TouchableOpacity>
        );
      }
      return '';
    }
    return (
      <TouchableOpacity onPress={next}>
        <Box bg="#4CAF50" size={16} borderRadius="full" />
      </TouchableOpacity>
    );

  }

  return (
    <HStack space={4} position={'relative'} mt={'10%'} alignItems="center" p={2} w={'100%'} px={'8%'} py={'4%'}>

      <TouchableOpacity onPress={() => router.replace(prev)}>
        <Box bg="#F44336" size={16} borderRadius="full" />
      </TouchableOpacity >

      {reload &&
        <TouchableOpacity onPress={() => router.replace(pathname)} >
          <Box bg="#FFC107" size={16} borderRadius="full" />
        </TouchableOpacity >
      }

      {renderNext()}


      <Image
        position={'absolute'}
        right={10}
        source={soundIcon}
        alt="Sound Icon"
        style={{ width: 50, height: 50, marginLeft: 54 }}
      />
    </HStack>
  );
}

export default NavigationBar;
