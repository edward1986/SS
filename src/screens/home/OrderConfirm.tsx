import React from 'react';
import {
    ScrollView,
    TouchableOpacity,
    View,

} from 'react-native';

import { Wrapper, Container, Space, H3, P, Btn } from '../../components/utils';
import Text from "../../components/atoms/text"
import CheckMarkIcon from "../../../assets/checkmarkIcon";
import ThankYouIcon from "../../../assets/thankyou";

export default class OrderConfirm extends React.Component {

    state = {};

    render() {

        return (

    <Wrapper style={{backgroundColor: "#AFB8A7",}}>
<View style={{padding: 35}}>
    <ScrollView>

        <View style={{alignItems: 'center', flex: 1, justifyContent: "center"}} >
            <View style={{paddingBottom: 10}} >
                <CheckMarkIcon/>
            </View>

            <Text size={16} color={"#fff"} >ORDER CONFIRMATION</Text>
            <Space />
            <ThankYouIcon/>
            <View style={{paddingVertical: 10}}>
                <Text color={"#fff"} size={16}>We have receieved your order!</Text>
            </View>
            <View  style={{paddingVertical: 10}}>
                <Text color={"#fff"} style={{textAlign: "center"}} size={16}>DON’T HAVE A GOOD DAY, HAVE A GREAT DAY!</Text>
            </View>






        </View>

    </ScrollView>

</View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Items')}>
            <View style= {{  justifyContent: "center", alignItems: "center",}}>
                <View style={{borderRadius: 6,backgroundColor: "#7B896E" }}>
                    <Text style={{ paddingHorizontal: 15, paddingVertical: 10, color: "#fff"}}>Continue Home</Text>
                </View>

            </View>

        </TouchableOpacity>
    </Wrapper>


        );
    }
}
