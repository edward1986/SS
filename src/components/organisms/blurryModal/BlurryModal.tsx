import { ViewProps, Modal, View, TouchableWithoutFeedback } from 'react-native';
import React, { FC } from 'react';
import styles from './BlurryModal.styles';
import { BlurView } from '@react-native-community/blur';

interface Props {
    style?: ViewProps['style'];
    visible: boolean;
    onClose: () => void;
}
const BlurryModal: FC<Props> = ({ style, visible, onClose, children }) => {
    return (
        <View style={[styles.outerContainer, style]}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}>
                {/* Touchable opacity is use to close the modal when  user presses on empty area */}
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={[styles.innerContainer, style]}>
                        <BlurView
                            style={styles.blur}
                            blurType="light"
                            blurAmount={3}
                            reducedTransparencyFallbackColor="white"
                        />
                        {/* This Touchable opacity disable the effect of the previous one */}
                        <TouchableWithoutFeedback>
                            {children}
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

export default BlurryModal;