import React, { useCallback, useEffect, useState } from 'react';
import { StackActions } from '@react-navigation/native';
import { View, Image, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useSelector, RootStateOrAny } from 'react-redux';


const splash = require('../../assets/splash.png');
const logo = require('../../assets/logo.png');

SplashScreen.preventAutoHideAsync();

const App = ({ navigation }:any) => {
    const user = useSelector((state:RootStateOrAny) => state.user);

    useEffect(() => {

            const hideSplashscreen = async () => {
                await SplashScreen.hideAsync();
                if (user && user?.user?.email) {
                    navigation.replace('Home');
                } else {
                    navigation.replace('Login');
                }

            }
            hideSplashscreen();

    }, []);

    if (Platform.OS == 'web') {
        return (
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#031A6E'
            }}>
                <Image
                    resizeMode='contain'
                    source={logo}
                    style={{
                        height: 250,
                        width: 250,
                    }}
                />
            </View>
        )
    }

    return (
        <View style={{ flex: 1  }}>
            <Image
                source={splash}
                style={{ height: '100%', width: '100%' }}
            />
        </View>
    );
}

export default App