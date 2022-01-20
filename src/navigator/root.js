import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  StackNavigator  from './stack'
export default function RootNavigator() {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
}