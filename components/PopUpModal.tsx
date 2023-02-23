import { View, Text, Modal } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

interface Props {
    showModal: boolean,
    HeaderComponent: React.ReactNode,
    FooterComponent: React.ReactNode,
    children: React.ReactNode
}
const PopUpModal: React.FC<Props> = ({ showModal = true, HeaderComponent, FooterComponent, children }) => {
    return (
        <Modal
            visible={showModal}
            animationType='slide'
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white
                }}
            >
                {/* Header */}

                {HeaderComponent}

                {/* body */}
                {children}

                {/* Footer */}
                {FooterComponent}

            </View>
        </Modal>
    )
}

export default PopUpModal