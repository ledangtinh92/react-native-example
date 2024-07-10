import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { AppNavigator } from 'app/navigators/AppNavigator';
import { AppProps } from 'app/model/App.model';

export default function AppMain(props: Readonly<AppProps>) {
    const {hideSplashScreen} = props
    setTimeout(hideSplashScreen, 1000);
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
    },
    safeArea: {
        flex: 1
    }
});
