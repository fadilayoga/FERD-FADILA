import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MenuBottomOne from './MenuButtomOne'
import MenuBottomTwo from './MenuButtomTwo'

const Stack = createBottomTabNavigator();

export default function Second() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={MenuBottomOne}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
            <Stack.Screen name="Bell" component={MenuBottomTwo}
                options={{
                    tabBarLabel: 'Bell',
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
