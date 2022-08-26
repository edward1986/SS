import React from 'react';
import config from '../../config';
import {Ionicons} from "@expo/vector-icons";
import {Touchable} from "./index";
import CheckboxIcon from "../../../assets/svg/Checkbox";
import UncheckboxIcon from "../../../assets/svg/uncheckbox";
export default Checkbox = (props) => {

    return (
        <Touchable onPress={() => props.onPress()}>
            {
                props.selected ? <CheckboxIcon ></CheckboxIcon> : <UncheckboxIcon/>
            }

        </Touchable>
    );
}