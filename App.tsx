import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/services/store';
import Navigation from './src/navigations';
import useCachedResources from "./src/hooks/useCachedResources";
import {useColorScheme} from "react-native";
import { ThemeProvider } from '@td-design/react-native';
import {lightTheme} from './theme'
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <ThemeProvider theme={lightTheme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation/>
                    <StatusBar/>
                </PersistGate>
            </Provider>
            </ThemeProvider>
        );
    }
}
