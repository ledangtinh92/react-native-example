import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Tab1Stack1({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab1Stack1</Text>
            <Button
                title="Go to Home "
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go to Tab1Stack2 "
                onPress={() => navigation.navigate('Tab1Stack2')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    }
});


export default Tab1Stack1;
