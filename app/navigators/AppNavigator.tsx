import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { NavigationProps } from 'app/model/App.model';
import HomeScreen from 'app/screens/HomeScreen';
import DetailsScreen from 'app/screens/DetailsScreen';

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
