import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RNHome from "./index";
import Settings from "./../../screens/home/settings";
import CupertinoSearchBar from "../../components/atoms/cupertinoSearchBar/CupertinoSearchBar";


const Drawer = createDrawerNavigator();

 const DrawerNavigator =() => {
    return (

            <Drawer.Navigator  screenOptions={{
                headerShown: true,
                header: ({navigation}) => {
                    return <CupertinoSearchBar onPress={()=> navigation.toggleDrawer()} />

                }
            }}  useLegacyImplementation={true}  initialRouteName="RNHome">
                <Drawer.Screen name="RNHome" component={RNHome} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigator