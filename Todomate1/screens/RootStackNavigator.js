import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () =>{
	return  <Stack.Navigator>
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        // stack navigator를 중첩할때마다 헤더가 하나씩 늘어나기 때문에 header hide처리
        // (추후 bottomTab 하위에 shared stack이 추가되는 케이스 고려)
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
}