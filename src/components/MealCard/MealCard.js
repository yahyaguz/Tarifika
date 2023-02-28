import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from './MealCard.style';  

function MealCard({ meal, onSelect }) {
    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{ uri: meal.strMealThumb }}>
                    <View style={styles.inner_container}>
                        <View style={styles.title_container}>
                            <Text style={styles.title} numberOfLines={1} >{meal.strMeal}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Pressable>
    );
};
export default MealCard;