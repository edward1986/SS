import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../../screens/home/profile";
import EditProfile from "../../screens/editProfile";


type RootStackParamList = {
    Profile: undefined;
    EditProfile: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                headerShown: false
            }}
            initialRouteName="Profile"
        >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;
