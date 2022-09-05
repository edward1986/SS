import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/registration';
import Login from '../screens/login';
import Home from '../navigations/Home';
import App from '../screens/app';
import Drawer from "./Home/Drawer";
import Cab from "../screens/cab";


type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Home: undefined;
  App: undefined;
  Drawer: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false
        }}
        initialRouteName="App"
      >
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Drawer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
