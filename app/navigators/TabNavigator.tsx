import React from 'react';
import { StyleSheet } from 'react-native';
import Tab1 from 'app/screens/tab/Tab1';
import Tab2 from 'app/screens/tab/Tab2';
import Tab3 from 'app/screens/tab/Tab3';
import Tab4 from 'app/screens/tab/Tab4';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TabStack1Screen from 'app/navigators/TabStackNavigator';
import { SearchProvider } from 'app/services/SearchProvider';

function TabNavigator({navigation}) {
    const Tab = createBottomTabNavigator();
    return (
        <SearchProvider>
            <Tab.Navigator
                initialRouteName={ 'Tab1' }
                screenOptions={ ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Tab1') {
                            iconName = focused
                                ? 'information-circle'
                                : 'information-circle-outline';
                        } else if (route.name === 'Sticker') {
                            iconName = focused ? 'list' : 'list-outline';
                        }
                        return <Ionicons name={ iconName } size={ size } color={ color }/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarBadgeStyle: {
                        backgroundColor: '#ffccff'
                    }
                }) }
            >
                <Tab.Screen
                    options={ {
                        tabBarBadge: 3,
                        headerShown: false,
                    } }
                    name="TabStack1Screen" component={ TabStack1Screen }/>
                <Tab.Screen
                    name="Sticker"
                    options={{
                        headerStyle: {
                            backgroundColor: 'pink',
                            borderRadius: 50,
                        },
                        title: 'Sticker',
                    }}
                    component={ Tab2 }/>
                <Tab.Screen
                    options={
                        {
                            tabBarIcon: props => (
                                <Ionicons name={ 'list' } size={ props.size } color={ props.color }/>
                            )
                        }
                    }
                    name="Tab3" component={ Tab3 }/>
                <Tab.Screen
                    options={
                        {
                            tabBarIcon: props => (
                                <Ionicons name={ 'list' } size={ props.size } color={ props.color }/>
                            )
                        }
                    }
                    name="Tab4" component={ Tab4 }/>
            </Tab.Navigator>
        </SearchProvider>
    );
}


const styles = StyleSheet.create({
    container: {}
});


export default TabNavigator;
