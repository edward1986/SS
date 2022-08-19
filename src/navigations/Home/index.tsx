import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from "../../screens/home/notification";
import Home from "../../screens/home/home";
import Maps from "../../screens/home/maps";
import Profile from "../../screens/home/profile";
import {TouchableOpacity, View} from "react-native";
import HomeIcon from "../../../assets/svg/home";
import BellIcon from "../../../assets/svg/bellIcon";
import MapsIcon from "../../../assets/svg/mapsicon";
import ProfileIcon from "../../../assets/svg/profileIcon";
import CupertinoSearchBar from "../../components/atoms/cupertinoSearchBar/CupertinoSearchBar";
import Drawer from "./Drawer";

const Tab = createBottomTabNavigator();


type RootStackParamList = {
    Home: undefined;
    Notification: undefined;
    Map: undefined;
    Profile: undefined;
};

function MyTabBar({state, descriptors, navigation}) {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({name: route.name, merge: true});
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                const focused = "#2863D6";
                const unfocused = "#606A80";
                return (
                    <View key={route.key} style={{flex: 1}}>
                        <TouchableOpacity
                            //disabled={((label == CHAT && !isMobile)  || (label == MEET && !isMobile) || (label == SCANQR && !isMobile)  ) }
                            accessibilityRole="button"
                            accessibilityState={isFocused ? {selected: true} : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}>
                            <View style={{

                                padding: 10,
                                backgroundColor: isFocused ? "#7B896E": "#AFB8A7",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                {label == "Home"
                                    ? (
                                        <HomeIcon notification={false} width={(55)}
                                                  height={(55)}
                                                  color={isFocused ? focused : unfocused}/>) :
                                    label == 'Notification'
                                        ?
                                        (
                                            <BellIcon notification={false} width={(55)}
                                                      height={(55)} color={isFocused ? focused : unfocused}/>)
                                        : label == "Maps"
                                            ?
                                            (
                                                <MapsIcon notification={false} width={(55)} height={(55)}
                                                          color={isFocused ? focused : unfocused}/>)

                                            :
                                            label == "Profile"
                                                ?
                                                (
                                                    <ProfileIcon notification={false} width={(55)} height={(55)}
                                                                 color={isFocused ? focused : unfocused}/>)
                                                :

                                                <View/>}

                            </View>

                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
}

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

            }}

            tabBar={props => <MyTabBar {...props} />}
            initialRouteName="Home"
        >


            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Notification" component={Notifications}/>
            <Tab.Screen name="Maps" component={Maps}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
};

export default HomeNavigator;
