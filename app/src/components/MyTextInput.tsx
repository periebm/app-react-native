import { Theme, useTheme } from '@react-navigation/native';
import {
  StyleSheet,
  TextInputProps,
  TextInput,
} from 'react-native';
import CustomTheme from '../themes/types/theme';

export default function MyTextInput(props: TextInputProps) {
  const theme = useTheme() as CustomTheme;
  const styles = createdStyle(theme);
  
  return (
    <TextInput placeholderTextColor={theme.colors.inputPlaceholderText} style={styles.input} {...props}/>
  );
}

export const createdStyle = (theme: CustomTheme) => {
  return StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: theme.colors.border,
    paddingHorizontal: 8,
    color: theme.colors.title,
    backgroundColor: theme.colors.inputBackground,
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16, 
  },
  
})};
