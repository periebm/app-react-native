import { DefaultTheme } from '@react-navigation/native';
import CustomTheme from './types/theme';

const AppLightTheme: CustomTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    title: '#FFFFFF',
    text: '#dadada',
    textDisable: '#6C757D',
    card: '#191919',
    border: '#495057',
    primary: '#1E90FF',
    secondary: '#20C997',
    background: '#121212',
    inputBackground: '#3E3E3E',
    inputPlaceholderText: '#727272'
  }
}

export default AppLightTheme;