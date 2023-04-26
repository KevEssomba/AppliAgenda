import React from "react";
import { View, StyleSheet,FlatList, Pressable } from 'react-native';
import { eventList } from '../data';
import { SearchResultView } from "./views";
import { VStack } from "./styled";



const SearchResultList= ({navigation}) => {
    return (
        
            <VStack style={styles.SeachResultContainer}>
                <FlatList data = {eventList} 
                    renderItem={ ({item}) => (
                        <Pressable onPress={()=>{navigation.navigate("Description",item)}}>
                            <SearchResultView
                                title = {item.title}
                                date  = {item.date}
                                desc = {item.desc}
                                navigation = {navigation}
                            />
                        </Pressable>
                        )

                }/>
            </VStack>
           
    );
}

export default SearchResultList;

const styles = StyleSheet.create({
    SeachResultContainer : {
        borderRadius : 5,
        borderStyle : 'solid',
        borderColor : 'red',
    }
});
