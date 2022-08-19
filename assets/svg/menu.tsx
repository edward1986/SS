import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuLeft = (props) => (
    <Svg
        width={39}
        height={39}
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M8.125 11.375H30.875" stroke="#222222" strokeLinecap="round" />
        <Path d="M8.125 19.5H30.875" stroke="#222222" strokeLinecap="round" />
        <Path d="M8.125 27.625H30.875" stroke="#222222" strokeLinecap="round" />
    </Svg>
);

export default MenuLeft;
