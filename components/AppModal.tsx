import React, { useEffect, useRef, useState, memo } from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, Animated, ScrollView } from 'react-native'
import { COLORS, SIZES } from '../constants'

interface Props {
    containerStyle?: Object,
    isVisible: Boolean,
    onClose: () => void,
    minusHeigth: Number,
    disabled?: Boolean,
    overlayStyle?: Object,
    children: React.ReactNode
}

const AppModal: React.FC<Props> = ({ containerStyle, isVisible, onClose, minusHeigth = 600, disabled = false, overlayStyle, children }) => {

    // states
    const [showFilterModal, setFilterModal] = useState<Boolean>(isVisible)
    const modalAnimatedValue = useRef(new Animated.Value(0)).current

    // useEffect hook
    useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start()
        }
        else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onClose())
        }

    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - Number(minusHeigth)]
    })
    return (
        <Modal
            animationType='slide'
            transparent
            visible={Boolean(isVisible)}
        >

            <View
                style={{ flex: 1, backgroundColor: COLORS.transparentBlack7, ...overlayStyle }}
            >
                <TouchableWithoutFeedback
                    disabled={Boolean(disabled)}
                    onPress={() => setFilterModal(false)}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position: 'absolute',
                        backgroundColor: COLORS.white,
                        top: modalY,
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        // padding: SIZES.padding * 1.2,
                        paddingTop: SIZES.radius,
                        borderTopLeftRadius: SIZES.padding * 2.2,
                        borderTopRightRadius: SIZES.padding * 2.2,
                        ...containerStyle
                    }}
                >
                    {/* header */}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                height: 4,
                                width: '30%',
                                backgroundColor: COLORS.gray10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />

                    </View>

                    {/* children */}
                    {children}

                </Animated.View>
            </View>
        </Modal>
    )
}

export default AppModal