import { ParamListBase, useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const theme = useTheme();
  const createdStyles = styles(theme);
  
  return (
    <View style={createdStyles.container}>
      <Text style={createdStyles.title}>
        Essa tela só pode ser vista por usuarios autenticados
      </Text>
      <MyButton
        onPress={() => navigation.navigate('Settings')}
        title={'Ir para Configurações'}
      />
      <Text>
        by <Text style={createdStyles.coffText}>Péri</Text>
      </Text>
    </View>
  );
}

/* https://youtu.be/3X2GHK9SpSU?t=1008 */
