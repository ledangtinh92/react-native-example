import { createNavigationContainerRef } from '@react-navigation/native';
import { AppStackParamList } from 'app/navigators/AppNavigator';

export const navigationRef = createNavigationContainerRef<AppStackParamList>()
