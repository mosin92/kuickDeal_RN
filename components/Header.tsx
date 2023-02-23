import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { images, SIZES } from '../constants'

interface Props {
    containerStyle?: Object
    renderCompoent: React.ReactNode
}

const Header: React.FC<Props> = ({ containerStyle, renderCompoent }) => {
    return (
        <ImageBackground
            source={images.gradient}
            style={{
                height: 61,
                width: '100%',
                ...containerStyle
            }}
        >
            {renderCompoent}

        </ImageBackground>
    )
}

export default Header