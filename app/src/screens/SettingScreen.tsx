import { ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useAuth } from '../context/Auth';

export default function HomeScreen() {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Configurações
      </Text>
      <MyButton onPress={signOut} style={{backgroundColor: 'red'}} title='Sair do App'/>
    </View>
  );
}

/* https://youtu.be/3X2GHK9SpSU?t=1008 */
