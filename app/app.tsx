import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProps } from '../model/app.model';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import React from 'react';

export default function AppMain(props: Readonly<AppProps>) {
    const {hideSplashScreen} = props
    setTimeout(hideSplashScreen, 5000);
    const Stack = createStackNavigator();
    return (
        <SafeAreaProvider initialMetrics={ initialWindowMetrics }>
            <SafeAreaView style={ styles.safeArea }>
                <GestureHandlerRootView style={ [styles.container] }>
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={ {headerShown: true} }
                            initialRouteName={ "Home" }
                        >
                            <Stack.Screen name="Home" component={ HomeScreen }/>
                            <Stack.Screen name="Details" component={ DetailsScreen }/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </GestureHandlerRootView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // backgroundColor: '#b3ffff',
        // alignItems: 'center',
        // justifyContent: "space-between",
        // flexDirection: "column"
    },
    safeArea: {
        flex: 1
        // backgroundColor: '#f5f5f5'
    }
});
