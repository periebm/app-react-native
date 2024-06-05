import { DarkTheme } from '@react-navigation/native';
import CustomTheme from './types/theme';

const AppDarkTheme: CustomTheme = {
  ...DarkTheme,
  dark: false,
  colors: {
    ...DarkTheme.colors,
    title: '#FFFFFF',
    text: '#dadada',
    textDisable: '#6C757D',
    card: '#191919',
    border: '#383838',
    primary: '#B71C1C',
    secondary: '#20C997',
    background: '#121212',
    inputBackground: '#212121',
    inputPlaceholderText: '#727272'
  }
}

export default AppDarkTheme;
