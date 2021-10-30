import React from "react";
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons';

import Home from "./Home";
import Second from "./Second";

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="About" 
                onPress={() => alert("This is about")}
                icon={({ focused, color, size }) => <AntDesign name="questioncircleo" size={24} color="black" />} />
        </DrawerContentScrollView>
    );
}

export default Router = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Second" component={Second} />
            </Stack.Navigator> */}

            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Second" component={Second} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}