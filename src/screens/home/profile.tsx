import * as React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ProfileIcon from "../../../assets/svg/profileIcon";
import Text from './../../components/atoms/text'
import {Bold, Regular, Regular500} from "../../styles/fonts";
import {useEffect, useMemo, useState} from "react";
import {setDrawerVisible} from "../../reducers/drawer/actions";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import config from "../../config";
import {Column, Row, Sm} from "../../components/utils";
import axios from "axios";
import {setBlogs} from "../../reducers/blog/actions";
import Toast from "react-native-toast-message";
import {BASE_URL} from "../../services/config";
import {userAddress} from "../../reducers/user/actions";
import _ from "lodash";
const styles = StyleSheet.create({
    gridContainer: {

        justifyContent: "center",
        alignItems: "center",
    },
    rowStyle: {

        width: "90%",
        paddingHorizontal: 20,
        flexDirection: "row",

        justifyContent: "space-around",
    },
    cellStyle: {
        flex: 1,
        margin: 10,
    },

})
const Profile = (props) => {
    const dispatch =  useDispatch()
    const address = useSelector((state: RootStateOrAny) => state.user.address);
    const address_id = useSelector((state: RootStateOrAny) => state?.user?.user?.address_id);

    const token = useSelector((state: RootStateOrAny) => state.user?.token?.token);
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        return fetchAddress()
    }, [address.id])

    const addressMemo = useMemo(() => {
        const data = [
            {id: 1, label:"Name", value: address.first_name + " " + address.last_name},
            {id: 2, label: "Email", value: address.email},
            {id: 3, label: "Phone number",  value: address.phone_number},
            {id: 4,label:"Shipping Address", value: address.shipping_address},
            {id: 5, label:"Specific Description of Location", value: address.description},
        ];
        return data
    }, [address.id])
    const fetchAddress = () => {
        setLoading(true);

        if(!address_id) return

        axios.get(BASE_URL + `/api/accounts/${address_id}`, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        }).then((response) => {
            dispatch(userAddress(response.data))
            setLoading(false);
        }).catch((response) => {
            console.log(response)
            Toast.show({
                type: 'error',
                text1: response.message,
            })
        })
    }

    function Cell({ data, index }) {
        return (
            <View  style={styles.cellStyle}>
                <Text style={{fontSize: (12),  fontFamily: index == 0 ? Bold: Regular}}>{data}</Text>
            </View>
        );
    }

    function ListHeaderComponent() {
        return  <View style={{paddingTop: "10%", paddingBottom: 10,  justifyContent: 'center', alignItems: 'center'}}>
            <ProfileIcon/>
            <Text size={16}>PROFILE</Text>
        </View>
    }
    const renderItem = (props: { item: { label: any; value: any; }; }) => {
        return (
            <Row nomargin={true}>
                <Column nopadding>
                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                        <Text color={config.defaultFontColor} style={{fontFamily: Regular500, fontSize: 13}} >{props?.item?.label?.toUpperCase()}: </Text>
                        <Text color={config.defaultFontColor} style={{fontSize: 13}}>{props.item.value}</Text>
                    </View>

                </Column >
            </Row>
        );
    }
    return (
        <View style={{flex: 1, backgroundColor: '#E4E3DF'}}>

                <FlatList
                    style={{paddingHorizontal: 48}}
                    ListHeaderComponent={ListHeaderComponent()}
                    data={addressMemo}
                    ItemSeparatorComponent={()=> <View style={{paddingVertical: 5}}/>}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={()=> props.navigation.push('EditProfile')}>
                    <View style= {{  justifyContent: "center", alignItems: "center",}}>
                        <View style={{borderRadius: 6,backgroundColor: "#AFB8A7" }}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 10}}>Continue</Text>
                        </View>

                    </View>

                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Profile;
