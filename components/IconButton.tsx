import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface Props {
    containerStyle?: object,
    icon: ImageSourcePropType,
    onPress?: (val: any) => void,
    iconStyle?: Object
}

export default function IconButton({
    containerStyle,
    icon,
    onPress,
    iconStyle
}: Props) {
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 30,
                    ...iconStyle
                }}
                source={icon}
            />
        </TouchableOpacity >
    )
}