import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    outerContainer: { flex: 1 },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 246, 243, 0.5)',

        paddingHorizontal: 18,
    },
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default styles;