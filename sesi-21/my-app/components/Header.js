import React from "react";
import { Platform, StatusBar } from 'react-native';
import { View, Text } from "native-base"

export default function Header() {
    return (
        <View bg="#7C9473" p={3} mt="" style={{
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }}>
            <Text fontSize="2xl" bold color="white">Posts</Text>
        </View>
    )
}