import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const MainHeader = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header1}>
        <Text>header1</Text>
      </View>
      <View style={styles.header2}>
        <Text>header2</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 8,
  },
  header1: {
    flex: 1,
    width: '100%',
    height: 500,
    backgroundColor: 'red'
  },
  header2: {
    flex: 1,
    width: '100%',
    height: 500,
    backgroundColor: 'blue'
  },
});

export default MainHeader;