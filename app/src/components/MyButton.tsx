import { Theme, useTheme } from '@react-navigation/native';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}

export function MyButton({ title, style, ...rest }: MyButtonProps) {
  const theme = useTheme();
  const createdStyles = styles(theme);

  return (
    <TouchableOpacity {...rest} style={[createdStyles.button, style]}>
      <Text style={createdStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export const styles = (theme: Theme) => {
  return StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: theme.colors.text,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 20
  },
})};
