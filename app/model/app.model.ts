import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export interface AppProps {
    hideSplashScreen: () => Promise<boolean>
}

export interface NavigationProps
    extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
