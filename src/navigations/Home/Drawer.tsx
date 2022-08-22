import * as React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import RNHome from "./index";
import Settings from "./../../screens/home/settings";
import CupertinoSearchBar from "../../components/atoms/cupertinoSearchBar/CupertinoSearchBar";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {setUser} from "../../reducers/user/actions";


const Drawer = createDrawerNavigator();

 const DrawerNavigator =(props) => {
     const dispatch = useDispatch();
     const onLogout = useCallback(() => {
         dispatch(setUser({}));
         setTimeout(() => {
             props.navigation.replace('Login');
         }, 100);
     }, []);
    return (

            <Drawer.Navigator drawerContent={props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label="Logout" onPress={onLogout} />
                    </DrawerContentScrollView>
                )
            }}  screenOptions={{
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