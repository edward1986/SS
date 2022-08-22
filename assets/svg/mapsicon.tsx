import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const MapsIcon = (props) => (
    <Svg
        width={55}
        height={55}
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M42.3959 49.2708L28.6459 14.8958M49.2709 10.3125L5.72925 19.4792"
            stroke="#2A4157"
            strokeOpacity={0.24}
        />
        <Path
            d="M5.72925 8.92925C5.72925 7.80914 5.72925 7.24909 5.94724 6.82127C6.13898 6.44494 6.44494 6.13898 6.82127 5.94724C7.24909 5.72925 7.80914 5.72925 8.92925 5.72925H46.0709C47.191 5.72925 47.7511 5.72925 48.1789 5.94724C48.5552 6.13898 48.8612 6.44494 49.0529 6.82127C49.2709 7.24909 49.2709 7.80914 49.2709 8.92925V46.0709C49.2709 47.191 49.2709 47.7511 49.0529 48.1789C48.8612 48.5552 48.5552 48.8612 48.1789 49.0529C47.7511 49.2709 47.191 49.2709 46.0709 49.2709H8.92925C7.80914 49.2709 7.24909 49.2709 6.82127 49.0529C6.44494 48.8612 6.13898 48.5552 5.94724 48.1789C5.72925 47.7511 5.72925 47.191 5.72925 46.0709V8.92925Z"
            stroke="#33363F"
            strokeLinecap="round"
        />
        <Path
            d="M28.6459 34.4425C28.6459 39.8831 22.7132 43.5434 21.0525 44.4614C20.7827 44.6106 20.4675 44.6106 20.1977 44.4614C18.5369 43.5434 12.6042 39.8831 12.6042 34.4425C12.6042 29.5895 16.4906 26.3542 20.6251 26.3542C24.9029 26.3542 28.6459 29.5895 28.6459 34.4425Z"
            stroke="#222222"
        />
        <Circle cx={20.6249} cy={34.3749} r={2.29167} fill="#222222" />
    </Svg>
);

export default MapsIcon;