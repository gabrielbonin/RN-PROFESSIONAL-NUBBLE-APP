import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const insets = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    top: Math.max(insets.top, spacing.s20),
    bottom: Math.max(insets.bottom, spacing.s20),
  };
}
