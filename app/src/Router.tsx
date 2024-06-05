import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from './context/Auth';
import { Text, View, useColorScheme } from 'react-native';
import AppLightTheme from './themes/appLightTheme';
import AppDarkTheme from './themes/appDarkTheme';

function Router() {
  const { authData, loading } = useAuth();
  const colorScheme = useColorScheme();

  if(loading){
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Carregando aplicativo...</Text>
    </View>
  }

  return (
    <NavigationContainer 
    theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}
    >
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Router;
