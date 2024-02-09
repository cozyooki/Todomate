import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Maincalendar from '../components/maincalender';
import MainHeader from '../components/mainheader';

const Peed = () => {
  return (
    <SafeAreaView style={styles.allcontainer}>
      <Maincalendar />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Peed;