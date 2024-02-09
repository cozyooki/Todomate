import {  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen />
      <Tab.Screen />
      <Tab.Screen />
      <Tab.Screen />
    </Tab.Navigator>
  );
}