import * as React from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import BellIcon from "../../../assets/svg/bellIcon";
import {Bold} from "../../styles/fonts";
import ArrowLeft from "../../components/atoms/icon/arrow-left";



const BlogItem = (props) => {
    const dispatch = useDispatch();



    return (
        <View style={{flex: 1, backgroundColor: "#E4E3DF", paddingHorizontal: 15}}>
            <TouchableOpacity onPress={() => {props.navigation.canGoBack() ? props.navigation.goBack() : props.navigation.navigate("Blogs")}}>
                <View>
                    <ArrowLeft/>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>

              <View style={{justifyContent: "center", alignItems: "center"}}>
                  <BellIcon notification={false} width={(75)}
                            height={(81)}/>
                  <Text style={{fontSize: 16, fontFamily: Bold}}>Blogs</Text>
              </View>
                <View></View>
            </View>
            <ScrollView style={{paddingVertical: 15}} >
                <View style={{backgroundColor: "#AFB8A7", height: 166,  borderRadius: 7}}>
                    <View style={{flex: 1, alignItems: "center",  padding: 12}}>
                        <Text style={{fontFamily: Bold, fontSize: 16}} >
                          content
                        </Text>
                    </View>
                </View>
            </ScrollView>



        </View>
    );
};

export default BlogItem;
