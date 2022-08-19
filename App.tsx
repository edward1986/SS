import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/services/store';
import Navigation from './src/navigations';
import useCachedResources from "./src/hooks/useCachedResources";
import {useColorScheme} from "react-native";
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation/>
                    <StatusBar/>
                </PersistGate>
            </Provider>
        );
    }
}
