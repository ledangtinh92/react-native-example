import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from '../DetailsScreen';
import HomeScreen from '../HomeScreen';
import { observer } from 'mobx-react-lite';
import { NavigationProps } from '../model/app.model';

const Stack = createStackNavigator();

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {

    return (
        <NavigationContainer
            { ...props }
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false}}
                initialRouteName={"Home"}
            >
                <Stack.Screen name="Home" component={ HomeScreen }/>
                <Stack.Screen name="Details" component={ DetailsScreen }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
})
