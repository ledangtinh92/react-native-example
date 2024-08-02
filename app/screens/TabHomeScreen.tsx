import React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigator from 'app/navigators/TabNavigator';

function TabHomeScreen({ navigation }) {
    return (
        <TabNavigator navigation={navigation}></TabNavigator>
    );
}


const styles = StyleSheet.create({
    container: {
    }
});


export default TabHomeScreen;
