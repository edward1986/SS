import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, useWindowDimensions, View} from "react-native";
import CardWithTextOverImage from "../../components/atoms/card";
import {Touchable} from "../../components/utils";
import ArrowBackIcon from "../../../assets/svg/arrow-back";
import {Button} from "@td-design/react-native";
import {Bold} from "../../styles/fonts";
import {InputField} from "../../components/molecules/form-fields";
import CloseCircleIcon from "../../../assets/svg/closecircle";
import BlurryModal from "../../components/organisms/blurryModal";
import {primaryColor} from "../../styles/color";
import ListEmptyComponent from "../../components/atoms/listEmpty";
import axios from "axios";
import Toast from "react-native-toast-message";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "../../services/config";
import {setAddToCart, setProducts} from "../../reducers/product/actions";
import Text from '../../components/atoms/text'
import {PICKUP} from "../../reducers/product/initialstate";

const SubItems = (props) => {
    const token = useSelector((state: RootStateOrAny) => state.user?.token?.token);
    const products = useSelector((state: RootStateOrAny) => state.product?.products);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const {height, width} = useWindowDimensions();

    const [item, setItem] = useState({})
    const [modalVisible, setModalVisible] = useState(false);
    const productsMemo = useMemo(() => {
        return products
    }, [products])

    useEffect(() => {
        return fetchProducts()
    }, [products.length == 0])

    const fetchProducts = () => {
        setLoading(true);
        axios.get(BASE_URL + "/api/products?page=" + page + "&category_id=" + props.route.params.id, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        }).then((response) => {

            dispatch(setProducts(response.data.data))
            setLoading(false);
            if (response.data.last_page != page) {
                setPage(page + 1);
            }
        }).catch((response) => {
            Toast.show({
                type: 'error', text1: response.message,
            })
        })
    }
    const [dimension1Input, setDimension1Input] = useState('')
    const [dimension2Input, setDimension2Input] = useState('')
    const [quantity, setQuantity] = useState('')
    const AddToCart = (item) =>  {
        dispatch(setAddToCart(item))
    }

    return (<View style={{flex: 1, backgroundColor: "#E4E3DF"}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Touchable onPress={() => props.navigation.goBack()}>
                    <View style={{padding: 20}}>
                        <ArrowBackIcon/>
                    </View>

                </Touchable>
                <View>
                    <Text size={21} style={{fontFamily: Bold}} color={primaryColor}>{props.route.params.name}</Text>
                </View>
            </View>
            <FlatList
                ListEmptyComponent={ListEmptyComponent}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1, paddingHorizontal: 10, paddingBottom: 20}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={productsMemo}
                numColumns={2}
                renderItem={(props) => CardWithTextOverImage({
                    item: props.item, onPress: () => {
                        setItem(props.item)
                        setModalVisible(true)
                    }
                })}
                keyExtractor={item => item.id}
            />


            <BlurryModal visible={modalVisible} onClose={() => {
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Touchable onPress={() => {
                            setModalVisible(false);
                        }}>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
                                <CloseCircleIcon></CloseCircleIcon>
                            </View>
                        </Touchable>

                        <View style={{padding: 30}}>
                            <Text size={25} style={{fontFamily: Bold}}>{item?.name}</Text>
                            <View style={{paddingVertical: 24, justifyContent: "center", alignItems: "center"}}>
                                <Text size={16} style={{fontFamily: Bold}}>{item.price} per kilo</Text>
                            </View>
                            <View style={{paddingBottom: 10}}>
                                <Text size={15}>{item?.dimension1}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: "center",}}>
                                <View style={styles.inputContainer}>
                                    <InputField onChangeText={setDimension1Input}
                                                value={dimension1Input} outlineStyle={{borderColor: 'transparent',}}
                                                inputStyle={{borderRadius: 21, backgroundColor: "#E4E3DF"}}/>
                                </View>

                                <Text size={14}>{item?.symbol1}</Text>
                            </View>

                            <View style={{paddingBottom: 10}}>
                                <Text size={15}>{item?.dimension2}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: "center",}}>
                                <View style={styles.inputContainer}>
                                    <InputField onChangeText={setDimension2Input}
                                                value={dimension2Input} outlineStyle={{borderColor: 'transparent',}}
                                                inputStyle={{borderRadius: 21, backgroundColor: "#E4E3DF"}}/>
                                </View>
                                <Text style={14}>{item?.symbol1}</Text>
                            </View>
                            <View style={{paddingBottom: 10}}>
                            <Text size={15}>Quantity</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: "center",}}>
                                <View style={styles.inputContainer}>
                                    <InputField onChangeText={setQuantity}
                                                value={quantity} outlineStyle={{borderColor: 'transparent',}}
                                                inputStyle={{borderRadius: 21, backgroundColor: "#E4E3DF"}}/>
                                </View>
                                <Text size={14}>pcs.</Text>
                            </View>

                            <View style={{paddingTop: 30}} >
                                <Button onPress={() => AddToCart({quantity, dimension1Input, dimension2Input, ...item, check: true, deliveryMode: PICKUP, addressId: ''})} borderRadius={6} title={"Add to Cab"}></Button>
                            </View>
                        </View>

                    </View>
                </View>
            </BlurryModal>

        </View>


    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1, justifyContent: "center",


    }, modalView: {
        margin: 20, backgroundColor: "white", borderRadius: 20, padding: 10,

        shadowColor: "#000", shadowOffset: {
            width: 0, height: 2
        }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5
    }, button: {
        borderRadius: 20, padding: 10, elevation: 2
    }, buttonOpen: {
        backgroundColor: "#F194FF",
    }, buttonClose: {
        backgroundColor: "#2196F3",
    }, textStyle: {
        color: "white", fontWeight: "bold", textAlign: "center"
    }, modalText: {
        marginBottom: 15, textAlign: "center"
    },
    inputContainer: {flex: 1, paddingRight: 10, paddingBottom: 10}
});
export default SubItems;
