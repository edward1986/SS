import * as React from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity, View} from "react-native";
import Text from "../components/atoms/text"
import {Bold} from "../styles/fonts";
import TrashIcon from "../../assets/svg/trashicon";
import {Checkbox} from "../components/utils";
import {useEffect, useMemo, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {
    setCartItemCheck,
    setCartItemDecrement,
    setCartItemDelete, setCartItemDelivery,
    setCartItemIncrement, setCartItemPickup
} from "../reducers/product/actions";
import Svg, {G, Path} from "react-native-svg";
import {button, primaryColor} from "../styles/color";

function Item(props: { onPress: () => void, cart, onCheck }) {
    const [check, setCheck] = useState(true)
    const cart = useMemo(() => props.cart, [])
const dispatch =  useDispatch()
    function decrement() {
        dispatch(setCartItemDecrement(cart))
    }
    function increment() {
        dispatch(setCartItemIncrement(cart))
    }

    function deleteItem() {
        dispatch(setCartItemDelete(cart))
    }

    const  onChecked = () => {
        dispatch(setCartItemCheck(cart))
    };
    return <View style={{borderRadius: 5, marginBottom: 18, backgroundColor: "#E5E5E5"}}>
        <View
            style={{flexDirection: "row", justifyContent: "space-between", paddingLeft: 25, paddingRight: 9, paddingVertical: 14}}>
            <View>
                <Text style={{fontFamily: Bold}}>{cart.name}</Text>
                <Text>{`${cart?.dimension1}: ${cart?.dimension1Input}${cart?.symbol1}`}</Text>
                <Text>{`${cart?.dimension2}: ${cart?.dimension2Input}${cart?.symbol2}`}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={decrement}  style={{marginBottom: 0}}>
                    <View style={{
                        borderBottomStartRadius: 3,
                        borderTopStartRadius: 3,
                        paddingHorizontal: 8,
                        paddingVertical: 1.5,
                        backgroundColor: "#B8B89C"
                    }}>
                        <Text>-</Text>
                    </View>

                </TouchableOpacity>
                <View style={{paddingHorizontal: 5, backgroundColor: "#D9D9D9"}}>
                    <Text style={{fontFamily: Bold, fontSize: 16}}>{cart.quantity}</Text>
                </View>

                <TouchableOpacity onPress={increment}>
                    <View style={{
                        borderBottomEndRadius: 3,
                        borderTopEndRadius: 3,
                        paddingHorizontal: 8,
                        paddingVertical: 1.5,
                        backgroundColor: "#B8B89C",
                    }}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress={deleteItem}>
                    <View style={{paddingRight: 7}}>
                        <TrashIcon/>
                    </View>
                </TouchableOpacity>

                <Checkbox selected={cart.check} onPress={onChecked}/>
            </View>
        </View>
    </View>;
}

const Cab = ({navigation}) => {
    const addToCart = useSelector((state: RootStateOrAny) => state.product?.addToCart);
    const deliveryMode = useSelector((state: RootStateOrAny) => state.product?.deliveryMode);


    const dispatch =  useDispatch()
    const onPickup = () => {
        dispatch(setCartItemPickup( ))


    };
    const onDelivery= () => {


        dispatch(setCartItemDelivery( ))
    };

    const _renderItem = ({item, index}) => {
        return  <Item key={index} cart={item} onPress={() => {}}/>
    }

    return (
        <ScrollView>
            <View style={{paddingHorizontal: 27,}}>
                <View style={{justifyContent: "center", alignItems: "center", paddingVertical: 9}}>
                    <Image style={{width: 44, height: 44}} source={require("./../../assets/trucks.png")}/>
                    <Text size={16}>YOUR CAB</Text>
                </View>

                <View style={{paddingHorizontal: 18, paddingBottom: 24, backgroundColor: "#B8B89C", borderRadius: 5}}>
                    <View style={{paddingVertical: 24,}}>
                        <Text style={{fontFamily: Bold}}>Products</Text>
                    </View>


                    <FlatList
                        ListEmptyComponent={()=> <View style={{justifyContent: "center", alignItems: "center", paddingVertical:  10}}>
                            <Svg width={128} height={82} viewBox="0 0 64 41">
                                <G transform="translate(0 1)" fill="none" fillRule="evenodd">
                                    <G stroke={primaryColor}>
                                        <Path d="M55 12.76 44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
                                        <Path
                                            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                            fill="none"
                                        />
                                    </G>
                                </G>
                            </Svg>
                        </View>}
                        data={addToCart}
                        renderItem={_renderItem}
                    />


                    <View style={{alignItems: "flex-end", }}>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <Text style={{fontSize: 16, fontFamily: Bold}}>TOTAL PRICE: </Text>
                            <Text style={{fontSize: 16}}>₱ {addToCart.reduce((partialSum, a) => partialSum + (a.check ? (((+a.quantity) * (+a.price) ) || 0) : 0), 0)}</Text>
                        </View>
                    </View>

                </View>

                <View style={{marginVertical: 13, flexDirection: "row", padding: 15, justifyContent: "space-between", backgroundColor: "#D9D9D9"}}>
                    <View style={{flexDirection: "row"}}>
                        <Checkbox size={23} selected={deliveryMode == "pickup"} onPress={onPickup}/>
                        <Text>Pick up</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Checkbox size={23} selected={deliveryMode == "delivery"} onPress={onDelivery}/>
                        <Text>Delivery</Text>
                    </View>
                </View>
                <View style={{paddingBottom: 10}}>
                    <TouchableOpacity disabled={addToCart.length == 0} onPress={()=> navigation.navigate('Address' )}>
                        <View style= {{  justifyContent: "center", alignItems: "flex-end",}}>
                            <View style={{borderRadius: 6,backgroundColor: addToCart.length == 0 ? button.default :"#B8B89C" }}>
                                <Text style={{ paddingHorizontal: 15, paddingVertical: 10}}>Continue</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>



            </View>
        </ScrollView>

    );
};

export default Cab;
