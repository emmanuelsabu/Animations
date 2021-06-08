import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './Home'
import Buttons from './Buttons'
import PanResponders from './PanResponders'
import ProgressBar from './ProgressBar'

const Stack = createStackNavigator();

const StackNavigator =()=>
  (
<Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />  
    <Stack.Screen name="Buttons" component={Buttons} />  
    <Stack.Screen name="ProgressBar" component={ProgressBar} />  
    <Stack.Screen name="PanResponders" component={PanResponders} />  


  </Stack.Navigator>

  )
     
  export default StackNavigator;