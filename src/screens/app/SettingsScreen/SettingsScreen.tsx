import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen({props}: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text>SettingsScreen</Text>
      <Button title="Home" onPress={() => {}} />
    </Screen>
  );
}
