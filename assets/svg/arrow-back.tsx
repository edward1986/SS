import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBackIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M6 12L5.64645 12.3536L5.29289 12L5.64645 11.6464L6 12ZM11.6464 18.3536L5.64645 12.3536L6.35355 11.6464L12.3536 17.6464L11.6464 18.3536ZM5.64645 11.6464L11.6464 5.64645L12.3536 6.35355L6.35355 12.3536L5.64645 11.6464Z"
            fill="#222222"
        />
        <Path
            d="M12 12L11.6464 12.3536L11.2929 12L11.6464 11.6464L12 12ZM17.6464 18.3536L11.6464 12.3536L12.3536 11.6464L18.3536 17.6464L17.6464 18.3536ZM11.6464 11.6464L17.6464 5.64645L18.3536 6.35355L12.3536 12.3536L11.6464 11.6464Z"
            fill="#222222"
        />
    </Svg>
);

export default ArrowBackIcon;
