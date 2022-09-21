import React, {useEffect, useMemo} from 'react';
import {
    StyleSheet,
    View,
    FlatList, TouchableOpacity, Image
} from 'react-native';

import config from '../../config';
import {
    Wrapper,
    Left,
    Container,
    Header,
    Separator,
    SimpleListItem,
    Row,
    Column,
    Space,
    H1,
    P,
    Sm,
    H4,
    IconBtn,
    Btn, Touchable
} from '../../components/utils';
import {Feather} from "@expo/vector-icons";
import Text from "../../components/atoms/text";
import ArrowBackIcon from "../../../assets/svg/arrow-back";
import {Bold} from "../../styles/fonts";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {setAddress, setAddressItem} from "../../reducers/address/actions";
import axios from "axios";
import {BASE_URL} from "../../services/config";
import Toast from "react-native-toast-message";
import useLocation from "../../hooks/useLocation";
import { setEmptyCart} from "../../reducers/product/actions";


const OrderDetail = (props) => {
    const token = useSelector((state: RootStateOrAny) => state.user?.token?.token);
    const addToCart = useSelector((state: RootStateOrAny) => state.product?.addToCart);
    const deliveryMode = useSelector((state: RootStateOrAny) => state.product?.deliveryMode);
    const addressId = useSelector((state: RootStateOrAny) => state.product?.addressId);
    const address = useSelector((state: RootStateOrAny) => state.address?.address);
    const dispatch = useDispatch()
    const location = useLocation();
    useEffect(()=>{
        dispatch(setAddressItem(addressId))
    }, [addressId, address?.id])

    const order = useMemo(()=>{

       return {
           ...address
       }
    }, [address?.id ])

const _renderItem = ({item}) => {
    return <Row nomargin={true}>
        <Column flex={0.6}>
            <Text style={{fontFamily: Bold, fontSize: 16}} color={config.defaultFontColor}>{item.name}</Text>
            <Row style={styles.basicInfo} nomargin={true}>
                <Column nopadding>
                    <View style={{flexDirection: "row"}}>
                        <Text color={config.defaultFontColor} style={{fontFamily: Bold}} >{item.dimension1}: </Text>
                        <Text color={config.defaultFontColor}  >{item.dimension1Input}{item.symbol1}</Text>
                    </View>

                </Column >
                <Column nopadding align={'flex-start'}>
                    <Sm></Sm>
                </Column>
            </Row>
            <Row style={styles.basicInfo} nomargin={true}>
                <Column nopadding>
                    <View style={{flexDirection: "row"}}>
                        <Text color={config.defaultFontColor} style={{fontFamily: Bold}} >{item.dimension2}: </Text>
                        <Text color={config.defaultFontColor}  >{item.dimension2Input}{item.symbol2}</Text>
                    </View>

                </Column >

            </Row>
            <Row style={styles.basicInfo} nomargin={true}>
                <Column nopadding>
                    <View style={{flexDirection: "row"}}>
                        <Text color={config.defaultFontColor} style={{fontFamily: Bold}} >Quantity: </Text>
                        <Text color={config.defaultFontColor}>{item.quantity || 0} qty</Text>
                    </View>

                </Column >
            </Row>
        </Column>

        <Column flex={.4} align={'flex-end'}>
            <P>₱ {(+item.quantity) * (+item.price)}</P>
        </Column>

    </Row>
};

    function orderConfirm() {

        axios.post(BASE_URL + "/api/orders", {  addToCart,
            address, deliveryMode, location}, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        } ).then((response) => {
           dispatch(setEmptyCart())
        }).catch((response) => {
            console.log(response.response, "error")
            Toast.show({
                type: 'error', text1: response.message,
            })
        })
        props.navigation.navigate('OrderConfirm')
    }

    return <Wrapper>
        <View>
            <Left>
                <Touchable onPress={() => props.navigation.goBack()}>
                    <View style={{padding: 20, paddingVertical: 5}}>
                        <ArrowBackIcon />
                    </View>
                </Touchable>
            </Left>


        </View>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image style={{width: 44, height: 44}} source={require("./../../../assets/trucks.png")}/>
            <Text size={16}>Order</Text>
        </View>
        <Container>
            <Space/>
            <Row style={styles.basicInfo} nomargin={true}>
                <Column>
                    <Text color={config.defaultFontColor} style={{fontFamily: Bold}} >NAME</Text>
                </Column>
                <Column align={'flex-start'}>
                    <Sm>{order.first_name} {order.last_name}</Sm>
                </Column>
            </Row>
            <Row style={styles.basicInfo} nomargin={true}>
                <Column>
                    <Text color={config.defaultFontColor} style={{fontFamily: Bold}} >EMAIL</Text>
                </Column>
                <Column align={'flex-start'}>
                    <Sm>{order.email}</Sm>
                </Column>
            </Row>

            <Row style={styles.basicInfo} nomargin={true}>
                <Column>
                    <Text  color={config.defaultFontColor} style={{fontFamily: Bold}} >PHONE NUMBER</Text>
                </Column>
                <Column align={'flex-start'}>
                    <Sm>{order.email}</Sm>
                </Column>
            </Row>

            <Row style={styles.basicInfo} nomargin={true}>
                <Column>
                    <Text color={config.defaultFontColor} style={{fontFamily: Bold}} >SHIPPING ADDRESS</Text>
                </Column>
                <Column align={'flex-start'}>
                    <Sm>{order.email}</Sm>
                </Column>
            </Row>
            <Space/>
            <H4 style={{paddingHorizontal: 10}}>Order Items</H4>

            <FlatList
                data={addToCart || []}
                renderItem={_renderItem}
                ItemSeparatorComponent={
                    () =>
                        <View>
                            <Space height={10} />
                            <Separator color={'#cccccc'} />
                            <Space height={10} />
                        </View>
                }
            />

            <Space height={10} />
            <Separator color={'#cccccc'} />

            <Space />

            <H4 style={{paddingHorizontal: 10}}>Summary</H4>



            <Space height={3} />


            <Space height={3} />

            <Row nomargin={true}>
                <Column>
                    <P>Total</P>
                </Column>
                <Column align={'flex-end'}>
                    <H4>₱ {addToCart.reduce((partialSum, a) => partialSum + (((+a.quantity) * (+a.price) ) || 0), 0)}</H4>
                </Column>
            </Row>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={orderConfirm}>
                    <View style= {{  justifyContent: "center", alignItems: "center",}}>
                        <View style={{borderRadius: 6,backgroundColor: "#B8B89C" }}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 10}}>Place Order</Text>
                        </View>

                    </View>

                </TouchableOpacity>
            </View>

            <Space/>
        </Container>
    </Wrapper>
}
export default OrderDetail




const styles = StyleSheet.create({
    header: config.headerStyle,
    headerHeading: config.headerFontStyle,
    headerLeft: {
        flex: 0.6,
        height: 60,
        justifyContent: 'center'
    },
    headerRight: {
        flex: 0.4,
        alignItems: 'flex-end',
        height: 60,
        justifyContent: 'center'
    },
    orderItemCard: {
        backgroundColor: '#ffffff',
        shadowColor: "#222222",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        marginBottom: 7
    },
    separator: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: '#eeeeee'
    },
    tr: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 15
    },
    tdLeft: {
        flex: 0.5
    },
    tdRight: {
        flex: 0.5,
        alignItems: 'flex-end'
    },
    summaryText: {
        fontSize: 14,
        color: '#444444'
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
    btnTransparent: {
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    btnTextDark: {
        fontWeight: 'bold',
        color: '#cccccc',
        fontSize: 16
    },
    basicInfo: {paddingBottom: 4, justifyContent: "center", alignItems: "center"}
});
