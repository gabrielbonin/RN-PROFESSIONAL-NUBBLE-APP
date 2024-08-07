import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Router() {
  const authenticate = true;

  return (
    <NavigationContainer>
      {authenticate ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
