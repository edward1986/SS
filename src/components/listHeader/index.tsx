import {Image, View} from "react-native";
import LogoText from "../../../assets/svg/logoText";
import React from "react";

const listHeaderComponent =()=> {
    return <View style={{
        justifyContent: "center",
        alignItems: "center", paddingBottom: 10
    }}>
        <Image
            source={require("../../../assets/logo.png")}
            style={{

                width: 120,
                height: 100,
            }}
            resizeMode="contain"
        />
        <LogoText/>
    </View>
}


export default listHeaderComponent