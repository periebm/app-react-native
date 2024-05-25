import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


const Stack = createNativeStackNavigator();

function Router() {
  const auth = false;

  return (
    <NavigationContainer>
      {auth ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
}

export default Router;