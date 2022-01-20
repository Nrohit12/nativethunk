import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Regions, Countries, Countrydetails, Search} from '../screens'

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions= {{
      headerShown:false
    }}>
      <Stack.Screen name="Regions" component={Regions} />
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Countrydetails" component={Countrydetails} />
    </Stack.Navigator>
  );
}

export default AppStack;