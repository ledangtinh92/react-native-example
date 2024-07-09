import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppNavigator } from 'app/navigators/AppNavigator';
import { AppProps } from 'app/model/App.model';

export default function AppMain(props: Readonly<AppProps>) {
    const {hideSplashScreen} = props
    setTimeout(hideSplashScreen, 5000);
    const Stack = createStackNavigator();
    return (
        <SafeAreaProvider initialMetrics={ initialWindowMetrics }>
            <SafeAreaView style={ styles.safeArea }>
                <GestureHandlerRootView style={ [styles.container] }>
                    <AppNavigator></AppNavigator>
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
