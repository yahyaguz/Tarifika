import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import styles from './CategoryCard.style';

const CategoryCard = ({ category, onSelect }) => {

    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                    <Text style={styles.title}>{category.strCategory}</Text>
                </View>
            </View>
        </Pressable>
    );
};
export default CategoryCard;