import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopOne from './MenuTopOne'
import TopTwo from './MenuTopTwo'

const Tab = createMaterialTopTabNavigator();

export default function ButtomTwo() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="One" component={TopOne} />
            <Tab.Screen name="Two" component={TopTwo} />
        </Tab.Navigator>
    );
}
