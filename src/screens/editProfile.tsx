import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {View} from "react-native";
import Text from "../components/atoms/text";
import React, {useState} from "react";
import {
    Column,
    Container,
    FloatingLabelInput,
    H2,
    IconBtn,
    Left,
    Row,
    Space,
    Touchable,
    Wrapper
} from "../components/utils";
import axios from "axios";
import {setCreateAddress} from "../reducers/address/actions";
import Toast from "react-native-toast-message";
import {BASE_URL} from "../services/config";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
const EditProfile = (props) => {
    const token = useSelector((state: RootStateOrAny) => state.user?.token?.token);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const [specificDescriptionofLocation, setSpecificDescriptionofLocation] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const createAddress = (item) => {
        setLoading(true);
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
    return <Wrapper>
        <KeyboardAwareScrollView>
            <View style={{paddingHorizontal: 20}}>
                <Left>
                    <IconBtn icon={'x'}
                             onPress={() => props.navigation.canGoBack() ? props.navigation.goBack() : null}
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
}


export default EditProfile
