import React from 'react';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App (){
    return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
              <Stack.Screen name = "Home" component = {HomeScreen}/>
              <Stack.Screen name = "Space Craft" component = {SpaceCraftScreen}/>
              <Stack.Screen name = "Daily Pic" component = {DailyPicScreen}/>
              <Stack.Screen name = "Star Map" component = {StarMapScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
