import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={ {flex: 1}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to TopNav"
                onPress={() => navigation.navigate('Details')}
            />
            <View style={styles.container}>
                <Button
                    title="Go to Drawer Navigator"
                    onPress={() => navigation.navigate('DrawerNavigator')}
                />
            </View>
            <View style={styles.container}>
                <Button
                    title="Go to tab navigator "
                    onPress={() => navigation.navigate('TabHomeScreen')}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
});


export default HomeScreen;
