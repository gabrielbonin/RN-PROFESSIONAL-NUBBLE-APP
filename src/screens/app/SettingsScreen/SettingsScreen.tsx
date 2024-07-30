import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text>SettingsScreen</Text>
      <Button title="Home" onPress={() => {}} />
    </Screen>
  );
}
