import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../../screens/home/home";
import SubItems from "../../screens/home/subItems";



type RootStackParamList = {
    Items: undefined;
    SubItems: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    headerShown: false
                }}
                initialRouteName="Items"
            >
                <Stack.Screen name="Items" component={Home} />
                <Stack.Screen name="SubItems" component={SubItems} />
            </Stack.Navigator>
    );
};

export default StackNavigator;
