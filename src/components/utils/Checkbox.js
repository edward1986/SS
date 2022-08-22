import React from 'react';
import config from '../../config';
import {Ionicons} from "@expo/vector-icons";
import {Touchable} from "./index";
export default Checkbox = (props) => {

    return (
        <Touchable onPress={() => props.onPress()}>
            <Ionicons name={props.selected ? 'checkbox' : 'square-outline'} size={24} color={props.selected ? config.primaryColor : '#333'} />
        </Touchable>
    );
}