import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
    cancelAnimation,
    interpolate,
    useAnimatedStyle, useDerivedValue,
    useSharedValue, withSpring,
    withTiming
} from 'react-native-reanimated';

function CustomDrawerContent(props) {
    const progress = useDrawerProgress();
    const translateX = useDerivedValue(() => {
        return withSpring(interpolate(progress.value, [0, 1], [-200, 0]), {
            damping: 5,
            stiffness: 200
        });
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}]
        };
    });
    const image = require('assets/icon.png')
    const {state, descriptors, navigation} = props;
    return (
        <Animated.View style={ animatedStyle }>
            <DrawerContentScrollView
                { ...props }>
                <View style={ styles.header }>
                    <Image
                        source={ image }
                        style={ styles.profilePic }
                    />
                    <Text style={ styles.userName }>Admin</Text>
                </View>
                <DrawerItemList { ...props } />
                {/*{ state.routes.map((route, index) => {*/ }
                {/*    const focused = state.index === index;*/ }
                {/*    const {title, drawerLabel, drawerIcon} = descriptors[route.key].options;*/ }
                {/*    return (*/ }
                {/*        <DrawerItem*/ }
                {/*            key={ index }*/ }
                {/*            label={ drawerLabel || title || route.name }*/ }
                {/*            icon={ drawerIcon }*/ }
                {/*            focused={ focused }*/ }
                {/*            onPress={ () => {*/ }
                {/*                navigation.navigate(route.name);*/ }
                {/*            } }*/ }
                {/*            style={ [*/ }
                {/*                styles.drawerItem,*/ }
                {/*                focused && styles.drawerItemSelected*/ }
                {/*            ] }*/ }
                {/*            labelStyle={ {color: focused ? 'blue' : 'black'} }*/ }
                {/*        />*/ }
                {/*    );*/ }
                {/*}) }*/ }
                <DrawerItem
                    label="Logout"
                    activeBackgroundColor={ 'red' }
                    onPress={ () => alert('Logging out') }
                />
            </DrawerContentScrollView>
            <DrawerItem style={ styles.lastDrawerItem }
                        label="Close Drawera"
                        onPress={ () => props.navigation.closeDrawer() }
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        padding: 20
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    drawerItem: {
        borderRadius: 10,
        marginVertical: 5
    },
    drawerItemSelected: {}
    ,
    containerMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    flexGrow: {
        flexGrow: 1
    },
    lastDrawerItem: {
        //marginBottom: 20
    }
});

export default CustomDrawerContent;
