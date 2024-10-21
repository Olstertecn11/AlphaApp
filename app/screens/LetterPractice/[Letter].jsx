import { View, Text } from 'native-base';
import { useRouter, useLocalSearchParams } from 'expo-router';


const LetterPractice = () => {

  const { Letter } = useLocalSearchParams();

  return (
    <View>
      <Text>Letter Practice {Letter}</Text>
    </View>
  )
};

export default LetterPractice;
