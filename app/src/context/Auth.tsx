import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';
import { Alert } from 'react-native';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

export interface AuthContextData {
  authData?: AuthData;
  signIn(email: string, password: string): any;
  signOut(): Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: any }) => {
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem('@AuthData');
    if (auth) {
      setAuth(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  }

  async function signIn(email: string, password: string) {
    try {
      const auth = await authService.signIn(email, password);
      setAuth(auth);
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth));

      return auth;
    } catch (error) {
      Alert.alert(error.message, 'Tente novamente!');
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
    AsyncStorage.removeItem('@AuthData');

    return;
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
