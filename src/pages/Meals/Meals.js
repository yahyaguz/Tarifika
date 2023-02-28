import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Meals = ({ route, navigation }) => {

    const { strCategory } = route.params;

    const { data, loading, error } = useFetch(Config.MEALS_URL + strCategory);

    if (loading) {
        return <Loading />
    }

    if (error || data.meals == null) {
        return <Error />
    }

    const handleMealSelect = (idMeal) => {
        navigation.navigate('DetailPage', { idMeal });
    };

    const renderMeals = ({ item }) => <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />

    return (
        <View style={styles.container}>
            <FlatList data={data.meals} renderItem={renderMeals} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff9900',
    },
});


export default Meals;