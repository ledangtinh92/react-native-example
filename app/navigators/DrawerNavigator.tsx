import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsScreen1 from 'app/screens/DrawerScreen1';
import DetailsScreen2 from 'app/screens/DrawerScreen2';
import CustomDrawerContent from 'app/navigators/CustomDrawerContent';
import { FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                //swipeEnabled: true,
                //swipeEdgeWidth: 100,
                drawerActiveTintColor: 'blue',
                drawerInactiveTintColor: 'gray',
                drawerActiveBackgroundColor: '#ccd9ff',
                drawerItemStyle: {
                    borderRadius: 50,
                },
                drawerStyle: {
                    borderRadius: 20,
                    //backgroundColor: 'blue'
                    width: 200,
                },
                drawerContentContainerStyle: {
                },
                //drawerHideStatusBarOnOpen: true,
                //drawerStatusBarAnimation: 'slide'
            }}
            initialRouteName="DetailsScreen1">
            <Drawer.Screen
                options={{
                    drawerIcon : ({ color, size }) => (
                        <FontAwesome5 name="hand-middle-finger" size={24} color="black" />
                    ),
                    drawerLabelStyle: {marginLeft: -27},
                }}
                name="DetailsScreen1"  component={ DetailsScreen1 }/>
            <Drawer.Screen
                options={{
                    drawerIcon : ({ color, size }) => (
                        <Fontisto name="nav-icon-a" size={size} color={color} />
                    ),
                    drawerLabelStyle: {marginLeft: -27},
                }}
                name="DetailsScreen2" component={ DetailsScreen2 }/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
