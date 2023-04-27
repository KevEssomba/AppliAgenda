import React from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";

// Components
import { HStack, VStack } from './styled';
import { CategoryView } from './views';

// Data
import { useEvents, useCategories } from '../hooks';

const CategoryList = ({navigation}) => {
    const { data, error, isSuccess, isLoading } = useEvents();
    const { data: categories, error: e, isSuccess: is, isLoading: il } = useCategories();
{/*console.log(categories); */}
   

    return (
        <HStack style={styles.container}>
            {
                isSuccess && <FlatList 
                    horizontal
                    data={data}
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({ item }) => (
                
                            <Pressable onPress = {() => {navigation.navigate("Description", item)}}>
                                <CategoryView 
                                    titre={item.titre}
                                    dateDebut={item.date}
                                    dateFin={item.date}
                                    image={item.tel}
                                    />
                            </Pressable>
                        
                    )}
                />
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
