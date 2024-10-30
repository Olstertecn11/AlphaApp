
import { useAvanceDatabase } from '../../sqlite/useAvanceDatabase';
import { ScrollView, Box, View, Text, FlatList } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import results from '../../assets/data/results.json'

const Stats = () => {
  const [statistics, setStatistics] = useState(results);
  const isFocused = useIsFocused();
  const avanceDatabase = useAvanceDatabase();
  const router = useRouter();

  useEffect(() => {
    if (isFocused) {
      // getStatistics();
    }
  }, [isFocused]);

  const getStatistics = async () => {
    const stats = await avanceDatabase.getAllAvance();
    setStatistics(stats);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', padding: 8, borderBottomWidth: 1, borderColor: 'gray' }}>
      <Text textAlign='center' style={{ flex: 1, color: 'white' }}>{item.id}</Text>
      <Text textAlign='center' style={{ flex: 2, color: 'white' }}>{item.modulo}</Text>
      <Text textAlign='center' style={{ flex: 1, color: 'white' }}>{item.letra}</Text>
      <Text textAlign='center' style={{ flex: 2, color: 'white' }}>{item.fecha}</Text>
    </View>
  );

  return (
    <View h='100%'>
      <Box w='40%' bg='green.100' p={2} borderRadius={12} mt={10} mb={10} ml={2} >
        <Text color='green.800' textAlign='center' fontWeight='bold'>Resultados</Text>
      </Box>
      <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
        <Text paddingX={2} textAlign='center' style={{ flex: 1, color: 'white', fontWeight: 'bold' }}>ID</Text>
        <Text paddingX={2} textAlign='center' style={{ flex: 2, color: 'white', fontWeight: 'bold' }}>Modulo</Text>
        <Text paddingX={2} textAlign='center' style={{ flex: 1, color: 'white', fontWeight: 'bold' }}>Letra</Text>
        <Text paddingX={2} textAlign='center' style={{ flex: 2, color: 'white', fontWeight: 'bold' }}>Fecha</Text>
      </View>
      <FlatList
        paddingX={3}
        data={statistics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={{ bottom: 10, marginLeft: 10, marginTop: 20 }} onPress={() => router.push('/screens')}>
        <Box bg='red.500' borderRadius='full' w='50px' h='50px'>
        </Box>
      </TouchableOpacity>
    </View>
  );
};

export default Stats;

