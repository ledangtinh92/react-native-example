import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TabNavigator({navigation}) {
    return (
        <View style={ styles.container }>
            <View style={ styles.view1 }><Text>view1</Text></View>
            <View style={ styles.view2 }><Text>view2</Text></View>
            <View style={ styles.view3 }><Text>view3</Text></View>
            <View style={ styles.view4 }><Text>view4</Text></View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        color: 'white'
    },
    view1: {
        //flex: 1,
        backgroundColor: 'yellow',
        //height: 12,
        //flexGrow: 1,
        //flexShrink: 0,
        flexBasis: '50%',
    },
    view2: {
        //flex: 1,
        backgroundColor: 'blue',
        //height: 12,
        flexGrow: 1,
        //flexShrink: 0,
        alignItems: 'flex-end',
    },
    view3: {
        //flex: 1,
        backgroundColor: 'pink',
        //height: 10,
        flexGrow: 1,
        //flexShrink: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    view4: {
        //flex: 1,
        backgroundColor: 'green',
        //height: 12,
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'flex-end'
    }
});


export default TabNavigator;
