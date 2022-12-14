import {useEffect, useState} from 'react';
import * as Location from "expo-location";

const useLocation = () => {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            setLocation({latitude, longitude});
        } catch (error) {
            console.log(error);
        }
    };

    useEffect( () => {
        async function fetchLocation() {
            try {
                const {granted} = await Location.requestForegroundPermissionsAsync();
                if (!granted) return;
                const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
                setLocation({latitude, longitude});
            } catch (error) {
                console.log(error);
            }
        }
        fetchLocation()
    }, []);

    return location;

};

export default useLocation;
