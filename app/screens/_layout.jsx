import { Slot } from 'expo-router';
import { Box } from 'native-base';
import { Colors } from '../../constants/Colors';
import { SQLiteProvider } from 'expo-sqlite'
import { initializeDatabase } from '../../sqlite/sqlite'

export default function HomeLayout() {
  return (
    <SQLiteProvider databaseName="mydatabase.db" onInit={initializeDatabase}>
      <Box h={'100%'} w={'100%'} pt={'12%'} bg={Colors.background}>
        <Slot />
      </Box>
    </SQLiteProvider>
  )
}
