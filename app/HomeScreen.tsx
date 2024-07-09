import React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={ {flex: 1}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default HomeScreen;
