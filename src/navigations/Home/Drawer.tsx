import * as React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import RNHome from "./index";
import Settings from "./../../screens/home/settings";
import CupertinoSearchBar from "../../components/atoms/cupertinoSearchBar/CupertinoSearchBar";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {setUser} from "../../reducers/user/actions";
import CabNavigator from "./CabNavigator";

import {CommonActions,DrawerActions} from "@react-navigation/native";
import {View,  TouchableOpacity} from "react-native";
import Text from  "../../components/atoms/text";
import HomeIcon from "../../../assets/svg/home";
import MenuLeft from "../../../assets/svg/menu";
import ProfileIcon from "../../../assets/svg/profileIcon";
import SettingIcon from "../../../assets/svg/Setting";
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
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
                const {state}=props;
                const {routes,index}=state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
                const focusedRoute=routes[index];
                return (
                    <DrawerContentScrollView {...props}>
                        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
                            <View style={{padding: 12}}>
                                <MenuLeft
                                    name="subdirectory-arrow-right"
                                ></MenuLeft>
                            </View>

                        </TouchableOpacity>

                        <DrawerItem label="Profile" icon={()=>(
                            <View style={{width:"100%"}}>
                                <View>
                                    <View style={{
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}>

                                        <ProfileIcon notification={false} width={(55)} height={(55)} />
                                        <Text style={{padding: 5}} size={16}>PROFILE</Text>
                                    </View>

                                </View>

                            </View>

                        )} onPress={()=>{
                            props.navigation.navigate('Profile')
                        }} />
                        {state.routes.map((route,i)=>{
                            const focused=i===state.index;
                            const focusedDescriptor=props.descriptors[focusedRoute.key];
                            const focusedOptions=focusedDescriptor.options;

                            const {}=focusedOptions;
                            const {
                                title,
                                drawerLabel,
                            }=props.descriptors[route.key].options;
                            const onPress=()=>{

                                //if(((route.name == CHAT && !isMobile)  || (route.name == MEET && !isMobile) || (route.name == SCANQR && !isMobile)  ) ) return

                                const event=props.navigation.emit({
                                    type:'drawerItemPress',
                                    target:route.key,
                                    canPreventDefault:true,
                                });

                                if(!event.defaultPrevented){
                                    props.navigation.dispatch({
                                        ...(
                                            focused
                                                ? DrawerActions.closeDrawer()
                                                : CommonActions.navigate({name:route.name,merge:true})),
                                        target:state.key,
                                    });
                                }
                            };

                            let tabIcon:any=null;

                            switch(route.name){
                                case 'RNHome':
                                    tabIcon=<HomeIcon focused={focused} color={focused ? "#113196" : "#6E7191"} height={55} width={55}/>;
                                    break;
                                case 'Settings':
                                    tabIcon=<SettingIcon focused={focused} color={focused ? "#113196" : "#6E7191"} height={55} width={55}/>;
                                    break;
                                default:
                                    tabIcon=null;
                            }
                            return route.name!='Cab'&&<View>
                                <DrawerItem key={route.key} label={""} activeBackgroundColor={"transparent"} focused={focused}
                                            icon={()=>(
                                                <View style={{width:"100%"}}>
                                                    <View
                                                        style={[{borderLeftColor:focused ? "#113196" : "transparent",}]}>
                                                        <View style={{
                                                            alignItems:"center",
                                                            justifyContent:"center",
                                                        }}>

                                                            {tabIcon}

                                                            <Text
                                                                size={16}
                                                                style={[{padding: 5, color:focused ? "#113196" : "#6E7191"}]}>{drawerLabel!==undefined
                                                                ? drawerLabel
                                                                : title!==undefined
                                                                    ? title
                                                                    : route.name == "RNHome" ? "Home" : route.name}</Text>
                                                        </View>

                                                    </View>

                                                </View>

                                            )} onPress={onPress}/>
                            </View>

                        })}
                        <DrawerItem label="Profile" icon={()=>(
                            <View style={{width:"100%"}}>
                                <View>
                                    <View style={{
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}>

                                        <SimpleLineIcons name="logout" size={36} color="#6E7191" />
                                        <Text style={{padding: 10, color: "#6E7191"}} size={16}>LOGOUT</Text>
                                    </View>

                                </View>

                            </View>

                        )} onPress={onLogout}/>
                    </DrawerContentScrollView>
                )
            }}  screenOptions={{
                drawerStyle:{
                    backgroundColor: "#D9D9D9",
                    width:183
                },
                headerShown: true,
                header: ({navigation}) => {

                    return <CupertinoSearchBar onRightPress={()=>navigation.navigate('Cab')} onPress={()=> navigation.toggleDrawer()} />

                }
            }}  useLegacyImplementation={true}  initialRouteName="RNHome">
                <Drawer.Screen name="Cab" component={CabNavigator} />
                <Drawer.Screen name="RNHome" component={RNHome} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigator