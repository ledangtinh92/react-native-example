import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { NavigationProps } from 'app/model/App.model';
import HomeScreen from 'app/screens/HomeScreen';
import DetailsScreen from 'app/screens/DetailsScreen';
import TopNav from 'app/navigators/TopNav';
import DrawerScreen from 'app/screens/DrawerScreen';
import { navigationRef } from 'app/navigators/NavigationUtilities';

const Stack = createStackNavigator();

export type AppStackParamList = {
    Home: undefined
    Details: undefined
    Notifications: undefined
}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
    return (
        <NavigationContainer
            ref={ navigationRef } // luu giu thong tin de de dang dieu huong
            { ...props }
        >
            <Stack.Navigator
                id={ 'mainNavigator' } // phan biet nhieu stack voi nhau.
                screenOptions={ {
                    headerShown: true, // hien thi header hay khong
                    headerMode: 'screen',
                    //headerTitle:' header Title',
                    headerTintColor: 'red',
                    cardShadowEnabled: true, //
                    cardOverlayEnabled: false,
                    //gestureEnabled: true,
                    cardStyle: {backgroundColor: '#f2f2f2'},
                    presentation: 'modal', // card  modal transparentModal containedModal containedTransparentModal
                    animationEnabled: true,
                    animationTypeForReplace: 'push'

                    // transitionSpec: {
                    //     open: {
                    //         animation: 'timing',
                    //         config: {
                    //             duration: 1000
                    //         }
                    //     },
                    //     close: {
                    //         animation: 'timing',
                    //         config: {
                    //             duration: 1000
                    //         }
                    //     }
                    // }
                } }
                initialRouteName={ "Notifications" }
            >
                <Stack.Screen
                    options={
                        {
                            headerStyle: {
                                height: 60
                            }
                        }
                    }
                    name="Home" component={ HomeScreen }/>
                <Stack.Screen
                    options={ ({navigation}) => ({
                        header: () => <TopNav title="Details" navigation={ navigation }/>
                    }) }
                    name="Details" component={ DetailsScreen }/>

                <Stack.Screen
                    options={
                        {
                            headerShown: false
                        }
                    }
                    name="Notifications"
                    component={ DrawerScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
})
