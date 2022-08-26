import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const UncheckboxIcon = (props) => (
    <Svg
        width={26}
        height={19}
        viewBox="0 0 26 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={19} height={19} fill="#0A0A0A" />
        <Rect
            x={0.826172}
            y={0.82608}
            width={17.3478}
            height={17.3478}
            fill="white"
        />
        <Path
            d="M9.4911 18.2766L1.3661 10.1516C0.877966 9.66351 0.877966 8.87206 1.3661 8.38387L3.13383 6.6161C3.62196 6.12792 4.41346 6.12792 4.9016 6.6161L10.375 12.0894L22.0984 0.366101C22.5865 -0.122034 23.378 -0.122034 23.8662 0.366101L25.6339 2.13387C26.122 2.62201 26.122 3.41346 25.6339 3.90165L11.2589 18.2767C10.7707 18.7648 9.97924 18.7648 9.4911 18.2766Z"

        />
    </Svg>
);

export default UncheckboxIcon;
