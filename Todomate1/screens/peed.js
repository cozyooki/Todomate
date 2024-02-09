import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Peed() {
  return (
    <View style={styles.allcontainer}>
      <View style={styles.header}>
        <Header1 />
        <Header2 />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <Content1 />
          <Content2 />
          <Content3 />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}
const Tab = createBottomTabNavigator();

const Header1 = () => {
  return (
    <View style={styles.header1}>
      <Text>header1</Text>
    </View>
  )
};
const Header2 = () => {
  return (
    <View style={styles.header2}>
      <Text>header2</Text>
    </View>
  )
};
const Content1 = () => {
  return (
    <View style={styles.content1}>
      <Text>content1</Text>
    </View>
  )
};
const Content2 = () => {
  return (
    <View style={styles.content2}>
      <Text>content2</Text>
    </View>
  )
};
const Content3 = () => {
  return (
    <View style={styles.content3}>
      <Text>content3</Text>
    </View>
  )
};
const Footer = () => {
  return (
    <View style={styles.footer1}>
      <Text>footer</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
    paddingTop: 700,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  content: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  scrollview: {
    flex: 1,
    width: '100%',
  },
  header1: {
    top: 20,
    width: '100%',
    height: 50,
    backgroundColor: 'red'
  },
  header2: {
    position: 'absolute',
    top: 70,
    width: '100%',
    height: 90,
    backgroundColor: 'orange'
  },
  content1: {
    width: '100%',
    height: '150%',
    backgroundColor: 'yellow'
  },
  content2: {
    width: '100%',
    height: '600%',
    backgroundColor: 'green'
  },
  content3: {
    width: '100%',
    height: '1000%',
    backgroundColor: 'blue'
  },
  footer1: {
    width: '100%',
    height: 75,
    backgroundColor: 'purple'
  },
});