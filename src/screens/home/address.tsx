import React from 'react';
import {
    Dimensions,
    FlatList,
    Modal, View
} from 'react-native';

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
const {height} = Dimensions.get('window');
export default class Address extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: '',
        phoneNumber: '',
        shippingAddress: '',
        SpecificDescriptionofLocation: '',
        showAddressModal: false
    }

    _keyExtractor = (item, index) => item.id;

    inputs = {};

    focusNextField(field) {
        if(inputs[field] !== undefined) {
            inputs[field].focus();
        }
    }

    _renderAddressForm() {
        return (
            <Wrapper>
                <View style={{paddingHorizontal: 20}}>
                    <Left>
                        <IconBtn icon={'x'}
                                 onPress={() => this.setState({showAddressModal: false})}
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
                                onChangeText={(text) => this.setState({firstName: text})}
                                returnKeyType={"next"}
                                value={this.state.firstName}
                                ref={ input => {
                                    this.inputs['firstName'] = input;
                                }}
                                onSubmitEditing={() => {
                                    this.focusNextField('lastName');
                                }}
                            />
                        </Column>

                        <Column>
                            <FloatingLabelInput
                                label="Last Name"
                                onChangeText={(text) => this.setState({lastName: text})}
                                returnKeyType={"next"}
                                value={this.state.lastName}
                                ref={ input => {
                                    this.inputs['lastName'] = input;
                                }}
                                onSubmitEditing={() => {
                                    this.focusNextField('email');
                                }}
                            />
                        </Column>
                    </Row>
                    <FloatingLabelInput
                        label="Email(Optional)"
                        onChangeText={(text) => this.setState({email: text})}
                        returnKeyType={"next"}
                        value={this.state.email}
                        ref={ input => {
                            this.inputs['email'] = input;
                        }}
                        onSubmitEditing={() => {
                            this.focusNextField('phoneNumber');
                        }}
                    />
                    <FloatingLabelInput
                        label="Phone Number"
                        onChangeText={(text) => this.setState({phoneNumber: text})}
                        returnKeyType={"next"}
                        value={this.state.phoneNumber}
                        ref={ input => {
                            this.inputs['phoneNumber'] = input;
                        }}
                        onSubmitEditing={() => {
                            this.focusNextField('shippingAddress');
                        }}
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
                        onChangeText={(text) => this.setState({shippingAddress: text})}
                        returnKeyType={"next"}
                        value={this.state.shippingAddress}
                        ref={ input => {
                            this.inputs['shippingAddress'] = input;
                        }}
                        onSubmitEditing={() => {
                            this.focusNextField('SpecificDescriptionofLocation');
                        }}
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
                        onChangeText={(text) => this.setState({SpecificDescriptionofLocation: text})}
                        returnKeyType={"done"}
                        value={this.state.SpecificDescriptionofLocation}
                        ref={ input => {
                            this.inputs['SpecificDescriptionofLocation'] = input;
                        }}
                        onSubmitEditing={() => {
                            this.addAddress()
                        }}
                    />
                    <Space />

                    <Touchable>
                        <View style= {{  justifyContent: "center", alignItems: "center",}}>
                            <View style={{borderRadius: 6,backgroundColor: "#B8B89C" }}>
                                <Text style={{ paddingHorizontal: 15, paddingVertical: 10}}>Continue</Text>
                            </View>

                        </View>

                    </Touchable>

                </Container>

            </Wrapper>
        );
    }

    render() {

        const footer = (
            <Footer>
                <Btn
                    label={'Proceed to Payment'}
                    onPress={() => this.props.navigation.navigate('Payment')}
                />
            </Footer>
        );

        return (
            <Wrapper footer={footer}>
                <View style={{flexDirection: "row", paddingHorizontal: 10}}>
                    <Left>

                        <Touchable onPress={() => this.props.navigation.goBack()}>
                            <View style={{padding: 20}}>
                                <ArrowBackIcon />
                            </View>
                        </Touchable>
                    </Left>
                    <Right>
                        <IconBtn icon={'plus'}
                                 onPress={() => this.setState({showAddressModal: true})}
                                 style={{marginRight: -10}}
                        />
                    </Right>
                </View>
                <Container>
                    <H1>Address</H1>

                    <FlatList
                        data={sample_data.addresses}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => <AddressItem onPress={(item) => this.setState({selected: item.id})} item={item} selected={item.id == this.state.selected} />}
                    />

                </Container>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showAddressModal}
                >
                    {this._renderAddressForm()}
                </Modal>

            </Wrapper>
        )
    }
}