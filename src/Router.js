import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from './pages/Detail';
import Categories from './pages/Categories';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CategoriesPage" component={Categories}
                    options={{ title: 'Categories', headerTitleAlign: 'center', headerTintColor: '#ff9900' }} />
                <Stack.Screen name="MealsPage" component={Meals}
                    options={{ title: 'Meals', headerTitleAlign: 'center', headerTintColor: '#ff9900' }} />
                <Stack.Screen name="DetailPage" component={Detail}
                    options={{ title: 'Detail', headerTitleAlign: 'center', headerTintColor: '#ff9900' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Router;