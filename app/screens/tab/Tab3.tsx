import React from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid } from 'react-native';

function TabNavigator({ navigation }) {
    function showToast():void {
        ToastAndroid.show("Show ToastAndroid", ToastAndroid.LONG);
    }

    return (
        <View style={ {flex: 1}}>
            <Text>tab Screen</Text>
            <Button title={"ToastAndroid"} onPress={showToast} ></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    }
});


export default TabNavigator;
