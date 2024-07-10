import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

function DrawerScreen1({ navigation }) {
    // useEffect(() => {
    //     navigation.openDrawer();
    // }, [navigation]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
            <Button onPress={() => navigation.openDrawer()} title="Open Drawer " />
        </View>
    );
}

export default DrawerScreen1;
