import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cab from "../../screens/cab";
import Address from "../../screens/home/address";
import OrderDetail from "../../screens/home/orderDetails";
import OrderConfirm from "../../screens/home/OrderConfirm";


type RootStackParamList = {
   Cab: undefined;
   Address: undefined;
    OrderDetail: undefined;
    OrderConfirm: undefined;
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
                <Stack.Screen name="OrderDetail" component={OrderDetail} />
                <Stack.Screen name="OrderConfirm" component={OrderConfirm} />

            </Stack.Navigator>
    );
};

export default CabNavigator;
