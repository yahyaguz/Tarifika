import React from 'react';
import { View, FlatList } from 'react-native';

import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({ navigation }) => {

    const { data, loading, error } = useFetch(Config.CATEGORIES_URL);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('MealsPage', { strCategory });
    };

    const renderCategories = ({ item }) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />;

    function onSelect() {

    }

    return (
        <View>
            <FlatList data={data.categories} renderItem={renderCategories} />
        </View>
    );
};

export default Categories;