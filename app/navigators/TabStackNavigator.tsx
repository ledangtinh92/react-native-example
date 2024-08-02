import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab1Stack2 from 'app/screens/tab/tab1StackScreen/Tab1Stack2';
import Tab1Stack1 from 'app/screens/tab/tab1StackScreen/Tab1Stack1';
import { SearchContext, SearchProvider } from 'app/services/SearchProvider';
import { useContext } from 'react';
import Tab1Stack3 from 'app/screens/tab/tab1StackScreen/Tab1Stack3';

const Tab1Stack = createNativeStackNavigator();

function TabStack1Screen() {
    const searchContext = useContext(SearchContext);

    if (!searchContext) {
        throw new Error('TabStack1Screen must be used within a SearchProvider');
    }

    const {setSearchQuery} = searchContext;

    return (
        <Tab1Stack.Navigator
            initialRouteName={ 'Tab1Stack1' }
            screenOptions={
                {
                    //headerShown: false
                    headerTitleAlign: 'center'

                }
            }
        >
            <Tab1Stack.Screen
                options={ {
                    title: 'info show'
                } }
                name="Tab1Stack1" component={ Tab1Stack1 }/>
            <Tab1Stack.Screen
                options={
                    {
                        headerSearchBarOptions: {
                            placeholder: 'Search...',
                            onChangeText: (event) => {
                                setSearchQuery(event.nativeEvent.text);
                                console.log(event.nativeEvent.text);
                            },
                            onCancelButtonPress: () => {
                                setSearchQuery('');
                                console.log('Search cancelled');
                            },
                            onBlur: () => {
                                console.log('Search bar lost focus');
                            }
                        }
                    }
                }
                name="Tab1Stack2" component={ Tab1Stack2 }/>
            <Tab1Stack.Screen
                options={ ({navigation}) => ({
                    headerTitleAlign: 'center',
                    headerSearchBarOptions: {
                        placeholder: 'Search task 3 data...',
                        onChangeText: (event) => {
                            navigation.setParams({searchQuery: event.nativeEvent.text});
                            console.log(event.nativeEvent.text);
                        },
                        onCancelButtonPress: () => {
                            navigation.setParams({searchQuery: ''});
                            console.log('Search cancelled');
                        },
                        onBlur: () => {
                            console.log('Search bar lost focusa');
                        }
                    }
                }) }
                name="Tab1Stack3" component={ Tab1Stack3 }/>
        </Tab1Stack.Navigator>
    )
}

export default TabStack1Screen;

