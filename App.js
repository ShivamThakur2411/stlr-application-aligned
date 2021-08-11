import React from 'react';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App (){
    return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
              <Stack.Screen name = "Home" component = {HomeScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
