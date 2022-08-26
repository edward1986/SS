import React, { useState, useEffect, useCallback, useRef } from "react";
import {Platform, Text, View, StyleSheet, SafeAreaView, Button, TouchableOpacity} from "react-native";
import * as Location from "expo-location";
import * as Permission from "expo-permissions";

import { ExpoLeaflet } from "expo-leaflet";

export default function Maps() {
    const [mapCenterPosition, setMapCenterPosition] = useState({
        lat: 36.850769,
        lng: -76.285873,
    });

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = useCallback(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setMapCenterPosition({
                lat: location?.coords?.latitude,
                lng: location?.coords?.longitude,
            });
        })();
    }, []);

    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
                <View style={{ height: "100%" }}>
                    <View style={{position: "absolute", width: "100%", bottom: 50,  zIndex: 1, justifyContent: "center", alignItems: "center"}}>
                        <View style={{ justifyContent: "center", alignItems: "center"}}>
                            <TouchableOpacity onPress={getLocation}>
                                <View style={{paddingHorizontal: 10, paddingVertical: 10,backgroundColor: "#7B896E", borderRadius: 10}}>
                                    <Text style={{ fontWeight: "bold",  color: "#fff"}}>Get Location</Text>
                                </View>

                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        <ExpoLeaflet
                            backgroundColor={"#E4E3DF"}
                            onMessage={() => console.log("")}
                            mapLayers={[
                                {
                                    attribution:
                                        '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                                    baseLayerIsChecked: true,
                                    baseLayerName: "OpenStreetMap.Mapnik",
                                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                },
                            ]}
                            mapMarkers={[
                                {
                                    id: "1",
                                    position: {
                                        lat: mapCenterPosition.lat,
                                        lng: mapCenterPosition.lng,
                                    },
                                    icon: "https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png",
                                    size: [32, 32],
                                },
                            ]}
                            mapCenterPosition={mapCenterPosition}
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