import React from 'react';
import { View, StyleSheet } from 'react-native';

function MenuSeparator() {
    return (
        <View style={ styles.separator }/>
    );
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        width: '100%',
        alignSelf: 'center'
    }
});

export default MenuSeparator;
