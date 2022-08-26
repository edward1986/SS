import * as React from 'react';
import {FlatList, Modal, StyleSheet, Pressable, useWindowDimensions, View} from "react-native";
import data from "../../sample_data";
import CardWithTextOverImage from "../../components/atoms/card";
import {useMemo, useState} from "react";
import {Container, IconBtn, Left, Right, Row, Space, Touchable} from "../../components/utils";
import ArrowBackIcon from "../../../assets/svg/arrow-back";
import {Box, Button, Empty} from "@td-design/react-native";
import Text from "./../../components/atoms/text"
import {Bold} from "../../styles/fonts";
import {InputField} from "../../components/molecules/form-fields";
import CloseCircleIcon from "../../../assets/svg/closecircle";
import BlurryModal from "../../components/organisms/blurryModal";


const SubItems = (props) => {
    const subData = useMemo(()=> data.subData.filter((value) => props.route.params.id == value.data_id), []);
    const { height, width } = useWindowDimensions();
    function ListEmptyComponent() {
           return <Box flex={1} ><Empty emptyText={"No Content"}/></Box>

    }
    const [item, setItem] = useState({})
    const [modalVisible, setModalVisible] = useState(false);
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
                    renderItem={(props) => CardWithTextOverImage({item:props.item, onPress: ()=>{
                        console.log(props.item)
                        setItem(props.item)
                        setModalVisible(true)
                    }})}
                    keyExtractor={item => item.id}
                />


            <BlurryModal visible={modalVisible} onClose={() => {
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Touchable onPress={()=>{
                            setModalVisible(false);
                        }}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
                                <CloseCircleIcon></CloseCircleIcon>
                            </View>
                        </Touchable>


                        <Text  size={25} style={{fontFamily: Bold}}>{item?.title}</Text>
                        <View style={{justifyContent: "center", alignItems: "center"}}>
                            <Text size={16} style={{fontFamily: Bold}}>40 per kilo</Text>
                        </View>
                        <Text>Diameter</Text>
                        <InputField outlineStyle={{borderColor: 'transparent',}} inputStyle={{ borderRadius: 21, backgroundColor: "#E4E3DF"}}  />
                        <Text>Length</Text>
                        <InputField outlineStyle={{borderColor: 'transparent',}} inputStyle={{ borderRadius: 21, backgroundColor: "#E4E3DF"}}  />
                        <Text>Quantity</Text>
                        <InputField outlineStyle={{borderColor: 'transparent',}} inputStyle={{ borderRadius: 21, backgroundColor: "#E4E3DF"}}  />
                        <View style={{paddingTop: 10}}>
                            <Button  borderRadius={6} title={"Add to Cab"} ></Button>
                        </View>
                    </View>
                </View>
            </BlurryModal>

        </>




    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",


    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default SubItems;
