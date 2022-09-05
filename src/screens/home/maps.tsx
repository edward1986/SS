import React, {useState, useEffect, useCallback, useRef, useMemo} from "react";
import {
    Platform,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Button,
    TouchableOpacity,
    ActivityIndicator, Image
} from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager"
import { ExpoLeaflet } from "expo-leaflet";
import markerPin from "../../../assets/svg/markerPin";
const LOCATION_TASK_NAME = 'LOCATION_TASK_NAME';
let foregroundSubscription = null;
import firebase from "../../services/config";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {setDrawerVisible} from "../../reducers/drawer/actions";
// Define the background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({data, error}) => {
    if (error) {
        console.error(error);
        return;
    }
    if (data) {
        // Extract location coordinates from data
        const {locations} = data;
        const location = locations[0];
        if (location) {
            console.log('Location in background', location.coords);
        }
    }
});

export default function Maps() {
    const dispatch = useDispatch();
    const user = useSelector((state:RootStateOrAny) => state.user);
    const [mapCenterPosition, setMapCenterPosition] = useState({
        lat: 8.4785442,
        lng: 124.6524561,
    });
    const [dataSource, setDataSource] = useState([])

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Define position state: {latitude: number, longitude: number}
    const [position, setPosition] = useState<{latitude: number, longitude: number}>();

    // Request permissions right after starting the app
    useEffect(() => {

        const requestPermissions = async () => {
            const foreground = await Location.requestForegroundPermissionsAsync();
            if (foreground.granted)
                await Location.requestBackgroundPermissionsAsync();
            let location = await Location.getCurrentPositionAsync({});
            startForegroundUpdate()
        };
        requestPermissions();
        let maps = firebase.database().ref("/maps");
        listenForMaps(maps)



    }, []);
    const listenForMaps = (mapsRef) => {



        mapsRef.on("value", dataSnapshot => {
            var maps = [];
            dataSnapshot.forEach(child => {
                if(child.key != user?.user?.id) {
                    maps.push({
                        lat: child.val().lat,
                        lng: child.val().lng,
                        key: child.key
                    });
                }

            });
            setDataSource(maps)
        });
    }
    const startForegroundUpdate = async () => {
        // Check if foreground permission is granted
        const {granted} = await Location.getForegroundPermissionsAsync();
        if (!granted) {
            console.log('location tracking denied');
            return;
        }

        // Make sure that foreground location tracking is not running
        foregroundSubscription?.remove();

        // Start watching position in real-time
        foregroundSubscription = await Location.watchPositionAsync(
            {
                // For better logs, we set the accuracy to the most sensitive option
                accuracy: Location.Accuracy.BestForNavigation,
            },
            location => {
                const updates = {};
                if(user?.user?.id){
                    updates[`maps/` + user?.user?.id] = {
                        lat: location?.coords?.latitude,
                        lng: location?.coords?.longitude,
                    };
                    firebase
                        .database()
                        .ref()
                        .update(updates)
                }

                setMapCenterPosition({
                    lat: location?.coords?.latitude,
                    lng: location?.coords?.longitude,
                });
                setPosition(location.coords);
            },
        );
    };

    // Stop location tracking in foreground
    const stopForegroundUpdate = () => {
        foregroundSubscription?.remove();
        setPosition(null);
    };

    // Start location tracking in background
    const startBackgroundUpdate = async () => {
        // Don't track position if permission is not granted
        const {granted} = await Location.getBackgroundPermissionsAsync();
        if (!granted) {
            console.log('location tracking denied');
            return;
        }

        // Make sure the task is defined otherwise do not start tracking
        const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
        if (!isTaskDefined) {
            console.log('Task is not defined');
            return;
        }

        // Don't track if it is already running in background
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TASK_NAME,
        );
        if (hasStarted && position) {
            console.log('Already started');
            return;
        }

        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            // For better logs, we set the accuracy to the most sensitive option
            accuracy: Location.Accuracy.BestForNavigation,
            // Make sure to enable this notification if you want to consistently track in the background
            showsBackgroundLocationIndicator: true,
            foregroundService: {
                notificationTitle: 'Location',
                notificationBody: 'Location tracking in background',
                notificationColor: '#fff',
            },
        });
    };

    // Stop location tracking in background
    const stopBackgroundUpdate = async () => {
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TASK_NAME,
        );
        if (hasStarted) {
            await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
            console.log('Location tacking stopped');
        }
    };

    const pin = useMemo(()=>{
        return  markerPin
    }, [])


    const positionMemo = useMemo(()=>{
        return position
    }, [position])

    const mapCenterPositionMemo = useMemo(()=>{
        return mapCenterPosition
    }, [mapCenterPosition])

    return (
        <View style={{ height: "100%" }}>
            <View style={{position: "absolute", width: "100%", bottom: 50,  zIndex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity onPress={startForegroundUpdate}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 10,backgroundColor: "#7B896E", borderRadius: 10}}>
                            <Text style={{ fontWeight: "bold",  color: "#fff"}}>Get Location</Text>
                        </View>

                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <ExpoLeaflet

                    loadingIndicator={()=><View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center", zIndex: 1, position: "absolute", }}>
                        <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>
                            <ActivityIndicator/>
                        </View>
                    </View>}

                    onMapLoad={()=> {
                        console.log("onMapLoad")
                    }  }
                    backgroundColor={"#E4E3DF"}
                    onMessage={(message) => {
                    }}
                    mapLayers={[
                        {

                            attribution:
                                '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                            baseLayerIsChecked: true,
                            baseLayerName: "OpenStreetMap.Mapnik",
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        },
                    ]}

                    mapMarkers={[...dataSource.map(value => {
                        return {
                            id: value.key,
                            position: {
                                lat: value?.lat || 0,
                                lng: value?.lng || 0,
                            },
                            icon: pin,
                            size: [32, 32],

                        }
                    }),
                        {
                            id: "1",
                            position: {
                                lat: positionMemo?.latitude || 0,
                                lng: positionMemo?.longitude || 0,
                            },
                            icon: pin,
                            size: [32, 32],

                        },
                    ]}

                    mapCenterPosition={mapCenterPositionMemo}
                    zoom={15}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
