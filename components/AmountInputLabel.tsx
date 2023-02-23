import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

interface Props {
    label: string,
    labelStyle?: Object
}

const AmountInputLabel: React.FC<Props> = ({ label, labelStyle }) => {
    return (
        <View>
            <Text
                style={{
                    color: COLORS.gray30,
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>
        </View>
    )
}

export default AmountInputLabel