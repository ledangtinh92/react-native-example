import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsScreen1 from 'app/screens/DrawerScreen1';
import DetailsScreen2 from 'app/screens/DrawerScreen2';
import { useEffect } from 'react';
import CustomDrawerContent from 'app/navigators/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator(navigation) {
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
                    borderRadius: 50
                },
                drawerStyle: {
                    borderRadius: 20,
                    //backgroundColor: 'blue'
                    width: 200
                },
                drawerContentContainerStyle: {
                    //rbackgroundColor: 'red'
                },
                //drawerHideStatusBarOnOpen: true,
                //drawerStatusBarAnimation: 'slide'
            }}
            initialRouteName="DetailsScreen1">
            <Drawer.Screen name="DetailsScreen1"  component={ DetailsScreen1 }/>
            <Drawer.Screen name="DetailsScreen2" component={ DetailsScreen2 }/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
