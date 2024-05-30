import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from './context/Auth';
import { Text, View } from 'react-native';

function Router() {
  const { authData, loading } = useAuth();
  if(loading){
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Carregando aplicativo...</Text>
    </View>
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Router;
