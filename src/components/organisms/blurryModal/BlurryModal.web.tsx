import { ViewProps, Modal, View, TouchableWithoutFeedback } from 'react-native';
import React, { FC } from 'react';
import styles from './BlurryModal.styles';

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
                        <View
                            style={styles.blur}

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
