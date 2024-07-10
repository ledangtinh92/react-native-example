import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TopNav = ({ title, navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.header, {paddingTop: insets.top}] }>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Text style={styles.title}>{title}</Text>
            <Button title="Info" onPress={() => alert('More info')} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TopNav;
