import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { SearchContext } from 'app/services/SearchProvider';

function Tab1Stack2({navigation}) {
    const searchContext = useContext(SearchContext);

    if (!searchContext) {
        throw new Error('Tab1Stack2 must be used within a SearchProvider');
    }

    const { searchQuery } = searchContext;
    const TASKS = [
        {id: '1', title: 'Buy groceries'},
        {id: '2', title: 'Walk the dog'},
        {id: '3', title: 'Finish the project'},
        {id: '4', title: 'Call mom'}
    ];
    const [filteredTasks, setFilteredTasks] = React.useState(TASKS);


    useEffect(() => {
        if (searchQuery) {
            const filtered = TASKS.filter((task) =>
                task.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredTasks(filtered);
        } else {
            setFilteredTasks(TASKS);
        }
    }, [searchQuery]);

    return (
        <View style={ {flex: 1} }>
            <Text style={ {
                fontSize: 20,
                fontWeight: '900',
                height: 40,
                paddingTop: 10,
                justifyContent: 'center',
                textAlign: 'center'
            } }> Task List</Text>
            <FlatList
                data={ filteredTasks }
                keyExtractor={ (item) => item.id }
                renderItem={ ({item}) => <Text style={ styles.item }>{ item.title }</Text> }
            />

            <Button
                title="back to Tab1Stack1 "
                onPress={ () => navigation.navigate('Tab1Stack1') }
            />
            <Button
                title="Go to Tab1Stack3 "
                onPress={ () => navigation.navigate('Tab1Stack3') }
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    item: {
        padding: 15,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});


export default Tab1Stack2;
