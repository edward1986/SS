import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const BellIcon = (props) => (
    <Svg
        width={45}
        height={45}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5 4.1875L22.4096 4.1875H22.4096C20.3454 4.18746 19.2188 4.18743 18.2743 4.40562C15.1087 5.1369 12.6369 7.60872 11.9056 10.7743C11.6874 11.7188 11.6874 12.8454 11.6875 14.9096L11.6875 15V18.75C11.6875 20.7748 11.6841 21.7035 11.4656 22.5815C11.3715 22.9598 11.2481 23.3301 11.0964 23.6892C10.7443 24.5227 10.1899 25.2676 8.97499 26.8875L8.56249 27.4375L8.53665 27.472C8.03499 28.1408 7.62441 28.6882 7.37961 29.1387C7.13236 29.5936 6.96832 30.1033 7.22085 30.6083C7.47338 31.1134 7.97952 31.2879 8.49182 31.3631C8.99908 31.4375 9.68335 31.4375 10.5194 31.4375H10.5625H34.4375H34.4806C35.3166 31.4375 36.0009 31.4375 36.5082 31.3631C37.0205 31.2879 37.5266 31.1134 37.7791 30.6083C38.0317 30.1033 37.8676 29.5936 37.6204 29.1387C37.3756 28.6882 36.965 28.1408 36.4633 27.472C36.4633 27.472 36.4633 27.472 36.4633 27.472C36.4633 27.472 36.4633 27.472 36.4633 27.4719L36.4375 27.4375L36.025 26.8875C34.8101 25.2676 34.2556 24.5227 33.9036 23.6892C33.7519 23.3301 33.6284 22.9598 33.5343 22.5815C33.3159 21.7035 33.3125 20.7748 33.3125 18.75V17.1821C33.3125 17.0288 33.3125 16.9521 33.2667 16.9078C33.2209 16.8636 33.1405 16.8664 32.9799 16.8721C32.9243 16.874 32.8685 16.875 32.8125 16.875C32.7564 16.875 32.7006 16.874 32.6451 16.8721C32.4844 16.8664 32.4041 16.8636 32.3583 16.9078C32.3125 16.9521 32.3125 17.0288 32.3125 17.1821V18.75V18.8273V18.8273C32.3124 20.7546 32.3124 21.812 32.5639 22.8229C32.6706 23.2516 32.8105 23.6714 32.9824 24.0783C33.3877 25.038 34.0222 25.8838 35.1786 27.4257L35.1786 27.4257L35.225 27.4875L35.6375 28.0375C36.1713 28.7493 36.5362 29.238 36.7417 29.6162C36.949 29.9976 36.9086 30.1134 36.8847 30.1611C36.8608 30.2088 36.7924 30.3107 36.363 30.3737C35.9371 30.4362 35.3272 30.4375 34.4375 30.4375H10.5625C9.6728 30.4375 9.06284 30.4362 8.63701 30.3737C8.20753 30.3107 8.13914 30.2088 8.11528 30.1611C8.09141 30.1134 8.05097 29.9976 8.25824 29.6162C8.46375 29.238 8.82867 28.7493 9.36249 28.0375L9.77499 27.4875L9.82135 27.4257C10.9778 25.8838 11.6122 25.038 12.0176 24.0783C12.1895 23.6714 12.3294 23.2516 12.4361 22.8229C12.6876 21.812 12.6875 20.7546 12.6875 18.8273L12.6875 18.75V15C12.6875 12.8225 12.6907 11.8185 12.8799 10.9994C13.5252 8.20622 15.7062 6.02521 18.4994 5.37996C19.3185 5.19074 20.3225 5.1875 22.5 5.1875C24.6775 5.1875 25.6815 5.19074 26.5006 5.37996C28.0992 5.74925 29.4973 6.62157 30.5217 7.82379C30.5984 7.91382 30.6367 7.95883 30.6855 7.96983C30.7342 7.98083 30.7891 7.95624 30.899 7.90704C31.0067 7.85884 31.1165 7.81457 31.2283 7.77443C31.426 7.70346 31.5249 7.66798 31.5455 7.59298C31.5662 7.51798 31.5044 7.44271 31.3807 7.29217C30.2116 5.86934 28.5888 4.83602 26.7257 4.40562C25.7812 4.18743 24.6546 4.18746 22.5904 4.1875H22.5904L22.5 4.1875Z"
            fill="#2A4157"
            fillOpacity={0.24}
        />
        <Circle cx={32.8125} cy={12.1875} r={2.8125} fill="#222222" />
        <Path
            d="M17.9722 34.9632C18.2393 35.9599 18.8278 36.8407 19.6464 37.4688C20.4651 38.097 21.4681 38.4375 22.5 38.4375C23.5319 38.4375 24.5349 38.097 25.3536 37.4688C26.1722 36.8407 26.7607 35.9599 27.0278 34.9632"
            stroke="#222222"
            strokeLinecap="round"
        />
    </Svg>
);

export default BellIcon;