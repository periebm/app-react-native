import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import logodark from '../assets/logodark.png';
import MyTextInput from '../components/MyTextInput';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';
import { useAuth } from '../context/Auth';
import { useTheme } from '@react-navigation/native';

export default function SignInScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const createdStyles = styles(theme);

  return (
    <View
      style={[
        createdStyles.container,
        { alignItems: 'center', justifyContent: 'center' },
      ]}
    >
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30
        }}
      >
        <Image
          style={{ width: 200, height: 200,  }}
          resizeMode="center"
          source={logodark}
        />
        <Text 
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>Peri App</Text>
      </View>
      <MyTextInput
        placeholder="username"
        value={email}
        onChangeText={setEmail}
      />
      <MyTextInput
        secureTextEntry
        placeholder="******"
        value={password}
        onChangeText={setPassword}
      />

      <MyButton onPress={() => signIn(email, password)} title="Login" />
    </View>
  );
}
