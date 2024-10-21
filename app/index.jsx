import React from 'react';
import { Image, Center, IconButton, VStack, Icon, Button } from 'native-base';
import playIcon from '../assets/images/icons/play.png';
import handIcon from '../assets/images/icons/hand.png';
import { useRouter } from 'expo-router';

const InitialScreen = () => {

  const router = useRouter();


  React.useEffect(() => {

  }, []);


  return (
    <Center flex={1} bg="darkBlue.900">
      <VStack space={10} alignItems="center">

        <Button borderRadius={'100px'} w='80px' h={'82px'} onPress={() => router.replace('/screens')}>
          <Image source={playIcon} alt="Play" size={'40px'} />
        </Button>
        <Image source={handIcon} alt="Play" size={'40px'} position={'absolute'}
          top={'90%'} left={'10%'} transform={[{ translateX: 0 }, { translateY: -20 }]}
        />
      </VStack>
    </Center>
  );
};

export default InitialScreen;
