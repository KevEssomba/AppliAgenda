import React from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";

// Components
import { HStack, VStack } from './styled';
import { EventView } from './views';
import Loader from "./Loader";

// Data
import { useEvents, useCategories } from '../hooks';

const CategoryList = ({ navigation }) => {
    const { 
        data: events, 
        error: eventError, 
        isSuccess: eventsLoaded, 
        isLoading: eventsAreLoading 
    } = useEvents();
    const { 
        data: categories,
        error: categoriesError,
        isSuccess: categoriesLoaded,
        isLoading: categoriesAreLoading
    } = useCategories();

    let dataCategorySet;

    if (categories)
        dataCategorySet = [...new Set([...categories])]; // remove duplicates

    return (
        <HStack style={styles.container}>
            {   // When...
                (categoriesLoaded && eventsLoaded)
                && <FlatList 
                    vertical
                    data={dataCategorySet}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                            <Text>{ item }</Text>

                            <FlatList 
                                horizontal
                                data={[...events].filter(e => e.categorie === item)}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <Pressable onPress={() => navigation.navigate('Description', item)}>
                                        <EventView 
                                            titre={item.titre}
                                            dateDebut={item.date}
                                        />
                                    </Pressable>
                                )}
                            />
                        </>
                    )}
                />
            }
            
            {
                (categoriesAreLoading || eventsAreLoading) && <Loader />
            }
        </HStack>
    );
}

export default CategoryList;

const styles = StyleSheet.create({
    container: {
        flexWrap: 'nowrap',
    },
});
