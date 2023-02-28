import React from 'react';
import { View } from 'react-native';

import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import DetailCard from '../../components/DetailCard/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({ route }) => {

    const { idMeal } = route.params;

    const { data, loading, error } = useFetch(Config.DETAIL_URL + idMeal);

    if (loading) {
        <Loading />
    }

    if (error) {
        <Error />
    }

    return (
        <View>
            <DetailCard data={data} />
        </View>
    );
};
export default Detail;