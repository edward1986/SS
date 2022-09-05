import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Notifications from "../../screens/home/notification";
import BlogItem from "../../screens/blog/blogItem";


type RootStackParamList = {
    Blogs: undefined;
    BlogItem: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const BlogNavigator = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    headerShown: false
                }}
                initialRouteName="Blogs"
            >
                <Stack.Screen name="Blogs" component={Notifications} />
                <Stack.Screen name="BlogItem" component={BlogItem} />
            </Stack.Navigator>
    );
};

export default BlogNavigator;
