import * as React from 'react';
import {FlatList, Platform, useWindowDimensions, View} from "react-native";
import data from "../../sample_data";
import CardWithTextOverImage from "../../components/atoms/card";
import {useMemo} from "react";
import {Container, IconBtn, Left, Right, Row, Space, Touchable} from "../../components/utils";
import ArrowBackIcon from "../../../assets/svg/arrow-back";
import {Box, Empty} from "@td-design/react-native";



const SubItems = (props) => {
    const subData = useMemo(()=> data.subData.filter((value) => props.route.params.id == value.data_id), []);
    const { height, width } = useWindowDimensions();
    function ListEmptyComponent() {
           return <Box flex={1} ><Empty emptyText={"No Content"}/></Box>

    }

    return (
        <>

            <Touchable onPress={() => props.navigation.goBack()}>
                <View style={{padding: 20}}>
                    <ArrowBackIcon />
                </View>
            </Touchable>
                <FlatList
                    ListEmptyComponent={ ListEmptyComponent}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1 ,paddingHorizontal:  10, paddingBottom: 20}}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={subData}
                    numColumns={2}
                    renderItem={(props) => CardWithTextOverImage({item:props.item, onPress: ()=>{}})}
                    keyExtractor={item => item.id}
                />

        </>




    );
};

export default SubItems;
