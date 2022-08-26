import { theme, Theme } from '@td-design/react-native';

const basePalette = {
    // 基础色
    white: '#000',
    black: '#000000',
    transparent: 'transparent',
    // 功能色
    func50: '#FBF5F5',
    func100: '#FFF7E3',
    func200: '#FFD21D',
    func300: '#52C41A',
    func400: '#1890FF',
    func500: '#F86E21',
    func600: '#F4333C',
    func700: 'transparent',
    func800: 'transparent',
    func900: 'transparent',
};
const palette = {
    ...basePalette,
    // 主色
    primary50: '#E5F1FF',
    primary100: '#3AA3FF',
    primary200: '#AFB8A7',
    primary300: 'rgba(0, 93, 255, 0.7)',
    primary400: 'rgba(0, 93, 255, 0.4)',
    primary500: 'transparent',
    primary600: 'transparent',
    primary700: 'transparent',
    primary800: 'transparent',
    primary900: 'transparent',
    // 中性色
    gray50: '#F5F5F5',
    gray100: '#E5E5E5',
    gray200: '#CCCCCC',
    gray300: '#999999',
    gray400: '#666666',
    gray500: '#333333',
    gray600: 'rgba(0, 0, 0, 0.4)',
    gray700: 'rgba(0, 0, 0, 0.04)',
    gray800: 'transparent',
    gray900: 'transparent',
};
export const lightTheme: Theme = {
    ...theme.lightTheme,
    colors: {
        ...theme.lightTheme.colors,
        ...palette
    },
};

export const darkTheme: Theme = {
    ...theme.darkTheme,
    colors: {
        ...theme.darkTheme.colors,
        // 复写需要覆盖的颜色
    },
};