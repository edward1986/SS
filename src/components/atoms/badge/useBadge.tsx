import React, { useMemo } from 'react';
import { View } from 'react-native';
import type { BadgeProps } from '.';
import Text from '../text';

const DOT_SIZE = 8; // 默认点大小
export default function useBadge({ type = 'text', containerStyle = {}, textStyle = {}, text, max = 99 }: BadgeProps) {


    text = typeof text === 'number' && text > max ? `${max}+` : text;

    const isHidden = useMemo(() => {
        const isZero = text === '0' || text === 0;
        const isEmpty = text === null || text === undefined || text === '';
        return isEmpty || isZero;
    }, [text]);

    const contentDom = useMemo(
        () =>
            type === 'dot' ? (
                <View
                    style={{
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        borderRadius: DOT_SIZE / 2,
                        position: 'absolute',
                        top: -(DOT_SIZE / 2),
                        right: -(DOT_SIZE / 2),
                        backgroundColor: "#F4333C",
                        ...containerStyle,
                    }}
                />
            ) : (
                <View
                    style={{
                        borderRadius: 12,
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        paddingHorizontal: 6,
                        backgroundColor: "#F4333C",
                        justifyContent: 'center',
                        ...containerStyle,
                    }}
                >
                    <Text
                        style={{

                            textAlign: 'center',
                            ...textStyle,
                            color: "#fff"
                        }}
                    >
                        {text}
                    </Text>
                </View>
            ),
        [containerStyle, text, textStyle,   type]
    );

    return {
        isHidden,
        contentDom,
    };
}