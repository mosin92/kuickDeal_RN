import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

interface Props {
    message: string,
    position: string
}

const ChatBox: React.FC<Props> = ({ message = 'adsfasaasdfasdfaa', position = 'LEFT' }) => {
    return (
        <View
            style={{
                minHeight: 40,
                maxHeight: 900,
                marginTop: SIZES.base,
                // height:'100%',
                // flex:1,
                justifyContent: 'flex-end',
                backgroundColor: position === 'LEFT' ? COLORS.secondary : COLORS.primary,
                borderRadius: SIZES.padding,
                padding: SIZES.base,
                minWidth: 100,
                maxWidth: 250,
                alignSelf: position === 'LEFT' ? 'flex-start' : 'flex-end'
            }}
        >
            <Text
                style={{
                    textAlign: message.length < 20 ? 'center' : 'left',
                    color: COLORS.white,
                    ...FONTS.body2,
                }}
            >
                {message}
            </Text>
        </View>
    )
}

export default ChatBox