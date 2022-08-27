import React, {Component, useMemo} from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Text from './../../atoms/text'
import {Bold} from "../../../styles/fonts";
import FastImage from "react-native-fast-image";
function CardWithTextOverImage({item, onPress }) {
    return (
        <TouchableOpacity onPress={()=>onPress(item)} style={{flex: 1}}>
            <View style={{flex: 1, borderWidth: 1,
                borderRadius: 10,
                borderColor: "#CCC",
                backgroundColor: "#B8B89C",
                shadowColor: "#000",
                shadowOffset: {
                    width: -2,
                    height: 2
                },
                margin: 5,
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                elevation: 3,
                overflow: "hidden"}}>
                <View style={[styles.container]}>
                    <FastImage
                        source={item?.image?.url ? {uri: item?.image.url} :require("../../../../assets/logo.png")}
                        style={{
                            width:'100%',
                            height: 100,
                        }}
                        resizeMode="stretch"
                    />


                </View>
                <View>
                    <View style={styles.bodyContent}>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>



    );
}

const styles = StyleSheet.create({
    container: {
        flexBasis: 0,
        flexGrow: 1,

    },
    cardItemImagePlace: {
        backgroundColor: "#ccc",
        width: "50%",
        flex: 1,
    },
    cardBody: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },
    bodyContent: {
        paddingTop: 10,
        backgroundColor: "#B8B89C",
        alignItems: "center",
        justifyContent: "center"
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: Bold,
        color: "#000",
        textAlign: "center",
        paddingBottom: 12
    },
    subtitleStyle: {
        fontSize: 14,
        color: "#FFF",
        lineHeight: 16,
        opacity: 0.5
    },
    actionBody: {
        padding: 8,
        flexDirection: "row"
    },
    actionButton1: {
        padding: 8,
        height: 36
    },
    actionText1: {
        fontSize: 14,
        color: "#FFF",
        opacity: 0.9
    },
    actionButton2: {
        padding: 8,
        height: 36
    },
    actionText2: {
        fontSize: 14,
        color: "#FFF",
        opacity: 0.9
    }
});

export default CardWithTextOverImage;