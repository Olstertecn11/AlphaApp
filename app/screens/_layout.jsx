import { Slot } from 'expo-router';
import { Box } from 'native-base';
import { Colors } from '../../constants/Colors';

export default function HomeLayout() {
  return (
    <Box h={'100%'} w={'100%'} pt={'12%'} bg={Colors.background}>
      <Slot />
    </Box>
  )
}
