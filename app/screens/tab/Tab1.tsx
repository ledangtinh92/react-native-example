import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TabNavigator({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>tab1!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});


export default TabNavigator;
