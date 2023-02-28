import React from "react";
import { View, Text, Image, ScrollView, Linking } from "react-native";
import styles from "./DetailCard.style";

function DetailCard({ data }) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={styles.image} source={{ uri: data?.meals?.[0]?.strMealThumb }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{data?.meals?.[0]?.strMeal}</Text>
                <Text style={styles.country}>{data?.meals?.[0]?.strArea}</Text>
                <View style={styles.divider} />
                <Text style={styles.instructions}>{data?.meals?.[0]?.strInstructions}</Text>

                <Text onPress={() => Linking.openURL(data?.meals?.[0]?.strYoutube)} style={styles.button}>Watch on Youtube</Text>
            </View>
        </ScrollView>
    );
};
export default DetailCard;