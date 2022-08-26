import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CloseCircleIcon = (props) => (
    <Svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={16} cy={16} r={12} fill="#2A4157" fillOpacity={0.24} />
        <Path
            d="M12.0001 19.9996L20.0001 11.9996"
            stroke="#222222"
            strokeWidth={1.2}
        />
        <Path d="M20 20L12 12" stroke="#222222" strokeWidth={1.2} />
    </Svg>
);

export default CloseCircleIcon;
