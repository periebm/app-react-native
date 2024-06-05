import { Theme } from '@react-navigation/native';

interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    title: string;
    textDisable: string;
    secondary: string;
    inputBackground: string;
    inputPlaceholderText: string;
  };
}

export default CustomTheme;