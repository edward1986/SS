import * as React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from "react-native";
import Text from "../components/atoms/text"
import {Bold} from "../styles/fonts";
import TrashIcon from "../../assets/svg/trashicon";
import {Checkbox} from "../components/utils";
import {useMemo, useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {setCartItemDecrement, setCartItemIncrement} from "../reducers/product/actions";

function Item(props: { onPress: () => void, cart }) {
    const [check, setCheck] = useState(false)
    const cart = useMemo(() => props.cart, [])
const dispatch =  useDispatch()
    function decrement() {
        dispatch(setCartItemDecrement(cart))
    }
    function increment() {
        dispatch(setCartItemIncrement(cart))
    }
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
                <View style={{paddingRight: 7}}>
                    <TrashIcon/>
                </View>
                <Checkbox selected={check} onPress={()=> setCheck(check => !check)}/>
            </View>
        </View>
    </View>;
}

const Cab = ({navigation}) => {
    const [deliveryMode, setDeliveryMode] = useState('')
    const addToCart = useSelector((state: RootStateOrAny) => state.product?.addToCart);
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
                    {
                        addToCart.map((cart) => {
                            return  <Item cart={cart} onPress={() => {}}/>
                        })

                    }

                    <View style={{alignItems: "flex-end", }}>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <Text style={{fontSize: 16, fontFamily: Bold}}>TOTAL PRICE: </Text>
                            <Text style={{fontSize: 16}}>₱ 1932.00</Text>
                        </View>
                    </View>

                </View>

                <View style={{marginVertical: 13, flexDirection: "row", padding: 15, justifyContent: "space-between", backgroundColor: "#D9D9D9"}}>
                    <View style={{flexDirection: "row"}}>
                        <Checkbox size={23} selected={deliveryMode == "pickup"} onPress={()=> { deliveryMode == "pickup" ? setDeliveryMode("") : setDeliveryMode("pickup") }}/>
                        <Text>Pick up</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Checkbox size={23} selected={deliveryMode == "delivery"} onPress={()=> { deliveryMode == "delivery" ? setDeliveryMode("") : setDeliveryMode("delivery") }}/>
                        <Text>Delivery</Text>
                    </View>
                </View>
                <View style={{paddingBottom: 10}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Address')}>
                        <View style= {{  justifyContent: "center", alignItems: "flex-end",}}>
                            <View style={{borderRadius: 6,backgroundColor: "#B8B89C" }}>
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
