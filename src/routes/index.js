import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './auth.navigation';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Routes;
