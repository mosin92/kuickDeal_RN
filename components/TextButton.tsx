import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'
import CustomLoader from './CustomLoader'

interface Props {
    label: string,
    disabled?: boolean
    labelStyle?: object,
    buttonContainerStyle?: object,
    onPress: (val: any) => void,
    label2?: string,
    label2Style?: object,
    loading?: boolean
}

const TextButton: React.FC<Props> = ({ label, disabled, labelStyle, buttonContainerStyle, onPress, label2 = "", label2Style, loading = false }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={buttonContainerStyle}
            onPress={onPress}
        >
            {
                loading ?

                    <CustomLoader />
                    :
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h4,
                            ...labelStyle
                        }}
                    >{label}
                    </Text>
            }

            {
                label2 != "" &&
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h4,
                        textAlign: 'right',
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default TextButton