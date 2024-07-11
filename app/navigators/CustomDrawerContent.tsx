import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
    cancelAnimation,
    interpolate,
    useAnimatedStyle, useDerivedValue,
    useSharedValue, withSpring,
    withTiming
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import MenuSeparator from 'app/navigators/MenuSeparator';

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

    const drawerItems = [];
    for (let i = 0; i < 10; i++) {
        drawerItems.push(
            <DrawerItem
                style={{padding:0, margin:0}}
                key={ i }
                label={ `Item ${ i + 1 }` }
                icon={({ color, size }) => (
                    <Ionicons name="information-circle-outline" size={size} color={color} />
                )}
                onPress={ () => alert(`Item ${ i + 1 } pressed`) }
            />
        );
    }

    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const handleScroll = (event) => {
        const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;
        if (layoutMeasurement.height + contentOffset.y < contentSize.height) {
            setShowScrollIndicator(true);
        } else {
            setShowScrollIndicator(false);
        }
    };

    return (
        <Animated.View style={ [styles.containerMenu, animatedStyle] }>
            <View style={ styles.header }>
                <Image
                    source={ image }
                    style={ styles.profilePic }
                />
                <Text style={ styles.userName }>Admin</Text>
            </View>
            <MenuSeparator></MenuSeparator>
            <DrawerContentScrollView
                onScroll={ handleScroll }
                onContentSizeChange={ () => setShowScrollIndicator(false) }
                scrollEventThrottle={ 15 }
                style={ styles.containerMenuMain }
                //contentContainerStyle={ { paddingTop: 0, paddingBottom: 0}}
                { ...props }>
                <DrawerItemList { ...props } />
                { drawerItems }

            </DrawerContentScrollView>
            {
                showScrollIndicator && (
                    <View style={ styles.scrollIndicator }>
                        <Ionicons name="arrow-down" size={ 24 } color="gray"/>
                    </View>
                )
            }
            <MenuSeparator></MenuSeparator>
            <DrawerItem style={ styles.containerLastItemMenu }
                        label="Close Drawer"
                        onPress={ () => props.navigation.closeDrawer() }
                        icon={props1 => (
                            <Ionicons name="arrow-down" size={ 24 } color="gray"/>
                        )}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
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
    containerMenu: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    header: {
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    containerMenuMain: {
        flex: 1,
        flexGrow: 1,
        paddingTop: 0 ,
        paddingBottom: 0,
    },
    containerLastItemMenu: {
        borderRadius: 50
    },
    scrollIndicator: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 50,
        bottom: 56
    }
});

export default CustomDrawerContent;
