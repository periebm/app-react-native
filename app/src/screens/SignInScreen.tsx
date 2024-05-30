import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../assets/elmo.jpg';
import MyTextInput from '../components/MyTextInput';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';
import { useAuth } from '../context/Auth';

export default function SignInScreen() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        styles.container,
        { flex: 1, alignItems: 'center', justifyContent: 'center' },
      ]}
    >
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={logo}
      />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        secureTextEntry
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
      />

      <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
    </View>
  );
}
