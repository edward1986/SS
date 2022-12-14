import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const ProfileIcon = (props) => (
    <Svg
        width={65}
        height={65}
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.125 32.5C8.125 19.0381 19.0381 8.125 32.5 8.125C45.9619 8.125 56.875 19.0381 56.875 32.5C56.875 45.9619 45.9619 56.875 32.5 56.875C19.0381 56.875 8.125 45.9619 8.125 32.5Z"
            fill="#2A4157"
            fillOpacity={0.24}
        />
        <Circle cx={32.5001} cy={27.0833} r={10.8333} fill="#222222" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.3647 51.4215C50.4045 51.5174 50.3795 51.6278 50.3026 51.6975C47.5582 54.1841 44.1166 55.9173 40.2944 56.5806C38.5975 56.875 36.565 56.875 32.5002 56.875C28.4353 56.875 26.4029 56.875 24.7059 56.5806C20.8839 55.9174 17.4424 54.1843 14.698 51.6978C14.6211 51.628 14.5961 51.5176 14.6359 51.4217C17.2506 45.1294 24.2618 40.625 32.5003 40.625C40.7388 40.625 47.75 45.1293 50.3647 51.4215Z"
            fill="#222222"
        />
    </Svg>
);

export default ProfileIcon;