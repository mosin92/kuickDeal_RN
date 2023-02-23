import { ActivityIndicator, View } from 'react-native'
import React from 'react'

interface Props {
    color?: string,
    size?: 'small' | 'large',
    containerStyle?: Object
}
const CustomLoader: React.FC<Props> = ({ color = "white", size = 'small', containerStyle }) => {
    return (
        <View style={containerStyle}>
            <ActivityIndicator color={color} size={size} />
        </View>
    )
}

export default CustomLoader