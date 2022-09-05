import React, {createRef, useEffect, useMemo, useRef, useState} from 'react';
import {
    Dimensions,
    FlatList, KeyboardAvoidingView,
    Modal, Platform, TouchableOpacity, View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Wrapper,
    Header,
    Left,
    Right,
    Container,
    Space,
    Row,
    Column,
    H1,
    H2,
    Footer,
    FloatingLabelInput,
    Picker,
    Btn,
    IconBtn,
    Touchable
} from '../../components/utils';
import sample_data from '../../sample_data';
import Text from "../../components/atoms/text"
import { AddressItem } from '../../components/reuse/AddressItem';
import ArrowBackIcon from "../../../assets/svg/arrow-back";
import axios from "axios";
import Toast from "react-native-toast-message";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "../../services/config";
import {setAddress, setCreateAddress} from "../../reducers/address/actions";
import {setAddressId} from "../../reducers/product/actions";
import useLocation from "../../hooks/useLocation";
const {height} = Dimensions.get('window');


const Address = (props) =>{
    const location = useLocation();
    const token = useSelector((state: RootStateOrAny) => state.user?.token?.token);
    const addresses = useSelector((state: RootStateOrAny) => state.address?.addresses);
    const addressId = useSelector((state: RootStateOrAny) => state.product?.addressId);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const addressesMemo = useMemo(() => {
        return addresses
    }, [addresses])

    useEffect(() => {
        return fetchAddress()
    }, [addresses.length == 0])
    const fetchAddress = () => {
        setLoading(true);
        axios.get(BASE_URL + "/api/accounts?page=" + page, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        }).then((response) => {

            dispatch(setAddress(response.data.data))
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
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [specificDescriptionofLocation, setSpecificDescriptionofLocation] = useState("");
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [selected, setSelected] = useState(null);
    const [errors, setErrors] = useState({});
    const createAddress = (item) => {
        setLoading(true);
        console.log(location)
        axios.post(BASE_URL + "/api/accounts", {
            first_name: item.firstName,
            last_name: item.lastName,
            email: item.email,
            phone_number: item.phoneNumber,
            shipping_address: item.shippingAddress,
            description: item.specificDescriptionofLocation,
            location: location
        },{
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        }).then((response) => {
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhoneNumber("")
            setShippingAddress("")
            setSpecificDescriptionofLocation("")
            dispatch(setCreateAddress(response.data.data))
            setLoading(false);
            if (response.data.last_page != page) {
                setPage(page + 1);
            }
        }).catch((response) => {
            console.log(response?.response)
            setErrors(response?.response?.data?.errors)
            Toast.show({
                type: 'error', text1: response?.response?.data?.message,
            })
        })
    }

    const footer = (
        <Footer>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('OrderDetail')}>
                    <View style= {{  justifyContent: "center", alignItems: "center",}}>
                        <View style={{borderRadius: 6,backgroundColor: "#B8B89C" }}>
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 10}}>Continue</Text>
                        </View>

                    </View>

                </TouchableOpacity>
            </View>


        </Footer>
    );

    const _keyExtractor = (item, index) => item.id;

    const inputs = createRef();

    const focusNextField =(field) => {
        /*if(inputs?.current?.[field] !== undefined) {
            console.log(inputs.current[field])
            inputs.current[field]?.focus()
        }*/
    }
    const _renderAddressForm = () => {

        return (
            <Wrapper>
                <KeyboardAwareScrollView>
                    <View style={{paddingHorizontal: 20}}>
                        <Left>
                            <IconBtn icon={'x'}
                                     onPress={() => setShowAddressModal(false)}
                                     style={{marginLeft: -10}}
                            />
                        </Left>
                    </View>

                    <Container>

                        <H2>Add New Address</H2>

                        <Row>
                            <Column>
                                <FloatingLabelInput
                                    label="First Name"
                                    onChangeText={(text) => setFirstName(text)}
                                    returnKeyType={"next"}
                                    value={firstName}
                                    hasError={errors?.first_name?.map(error => `${error}`) || ""}
                                />
                            </Column>

                            <Column>
                                <FloatingLabelInput
                                    label="Last Name"
                                    onChangeText={(text) =>setLastName(text)}
                                    returnKeyType={"next"}
                                    value={lastName}
                                    hasError={errors?.last_name?.map(error => `${error}`) || ""}
                                />
                            </Column>
                        </Row>
                        <FloatingLabelInput
                            label="Email(Optional)"
                            onChangeText={(text) => setEmail(text)}
                            returnKeyType={"next"}
                            value={email}
                        />
                        <FloatingLabelInput
                            label="Phone Number"
                            onChangeText={(text) => setPhoneNumber(text)}
                            returnKeyType={"next"}
                            value={phoneNumber}
                            hasError={errors?.phone_number?.map(error => `${error}`) || ""}
                        />
                        <FloatingLabelInput

                            inputStyle={{

                                textAlignVertical: "top",
                                [ "height"]: 100,
                                fontWeight:"400",
                                fontSize:(14)
                            }}
                            multiline={true}
                            label="Shipping Address"
                            onChangeText={(text) => setShippingAddress(text)}
                            returnKeyType={"next"}
                            value={shippingAddress}
                            hasError={errors?.shipping_address?.map(error => `${error}`) || ""}
                        />
                        <FloatingLabelInput
                            inputStyle={{

                                textAlignVertical: "top",
                                [ "height"]: 100,
                                fontWeight:"400",
                                fontSize:(14)
                            }}
                            multiline={true}
                            label="Specific Description of Location"
                            onChangeText={(text) => setSpecificDescriptionofLocation(text)}
                            returnKeyType={"done"}
                            value={specificDescriptionofLocation}
                            hasError={errors?.description?.map(error => `${error}`) || ""}
                        />
                        <Space />

                        <Touchable onPress={()=>createAddress({firstName, lastName, email, phoneNumber, shippingAddress, specificDescriptionofLocation})}>
                            <View style= {{  justifyContent: "center", alignItems: "center",}}>
                                <View style={{borderRadius: 6,backgroundColor: "#B8B89C" }}>
                                    <Text style={{ paddingHorizontal: 15, paddingVertical: 10}}>Continue</Text>
                                </View>

                            </View>

                        </Touchable>

                    </Container>
                </KeyboardAwareScrollView>

            </Wrapper>
        );
    }

    const onAddressItem = (id) =>{
        dispatch(setAddressId(id))
    };
    return  <Wrapper footer={footer}>
        <View style={{flexDirection: "row", paddingHorizontal: 10}}>
            <Left>

                <Touchable onPress={() => props.navigation.goBack()}>
                    <View style={{padding: 20}}>
                        <ArrowBackIcon />
                    </View>
                </Touchable>
            </Left>
            <Right>
                <IconBtn icon={'plus'}
                         onPress={() => setShowAddressModal(true)}
                         style={{marginRight: -10}}
                />
            </Right>
        </View>
        <Container>
            <H1>Address</H1>

            <FlatList
                data={addressesMemo}
                extraData={{firstName,lastName,email,phoneNumber,shippingAddress,specificDescriptionofLocation,showAddressModal}}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <AddressItem onPress={()=> {
                    onAddressItem(item.id )
                }} item={item} selected={item.id == addressId} />}
            />

        </Container>

        <Modal
            animationType="slide"
            transparent={true}
            visible={showAddressModal}
        >
            {_renderAddressForm()}
        </Modal>

    </Wrapper>
}
export default Address
