import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cab from "../../screens/cab";
import Address from "../../screens/home/address";


type RootStackParamList = {
   Cab: undefined;
   Address: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const CabNavigator = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    headerShown: false
                }}
                initialRouteName="Cab"
            >
                <Stack.Screen name="Cab" component={Cab} />
                <Stack.Screen name="Address" component={Address} />

            </Stack.Navigator>
    );
};

export default CabNavigator;
