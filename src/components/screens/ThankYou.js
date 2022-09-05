import React from 'react';
import {
    View
} from 'react-native';

import { Wrapper, Container, Space, H3, P, Btn } from '../utils';
import {Ionicons} from "@expo/vector-icons";

export default class OrderConfirm extends React.Component {

	state = {};

	render() {

		return (

			<Wrapper>

                <Container>

					<View style={{alignItems: 'center', flex: 1, marginTop: 150}} >
                        <Ionicons name="checkmark-circle-outline" size={250} color={'green'} />
                        <H3>Thank You</H3>
                        <P>Your order confirmation number is #100001</P>
                        <Space />
                        <View style={{flex: 1, width: '100%'}}>
                            <Btn label={'Continue Shopping'} />
                        </View>
                    </View>

				</Container>
			</Wrapper>

		);
	}
}
