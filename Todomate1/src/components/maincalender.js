import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Maincalendar = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.header1}>
          <Text>header1</Text>
      </View>
      <View style={styles.header1}>
          <Text>header2</Text>
      </View>
      <View style={styles.header1}>
          <Text>header3</Text>
      </View>
      <View style={styles.header1}>
          <Text>header4</Text>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  scrollview: {
    flex: 6,
    width: '100%',
    height: 500,
    backgroundColor: 'blue'
  },
  header1: {
    width: '100%',
    height: 50,
    backgroundColor: 'red'
  },
  header2: {
    position: 'absolute',
    top: 50,
    width: '100%',
    height: 90,
    backgroundColor: 'orange'
  },
});

export default Maincalendar;