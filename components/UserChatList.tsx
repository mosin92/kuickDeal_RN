import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, images, SIZES } from '../constants'

interface chatData {
    title: string,
    desc: string
    time: string,
}

interface Props {
    onPress: (val: any) => void,
    containerStyle: object,
    data: chatData,
    showbar: boolean
}

const UserChatList = ({
    onPress, showbar = false, containerStyle, data
}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                height: 95,
                alignItems: 'center',
                borderWidth: 1.7,
                borderColor: COLORS.lightSilver,
                borderRadius: SIZES.radius,
                padding: SIZES.base,
                borderLeftColor: COLORS.secondary,
                borderLeftWidth: 2,
                ...containerStyle

            }}
        >
            {/* profile image */}

            <Image
                resizeMode='cover'
                source={images.myprofile}
                style={{
                    height: 40,
                    width: 40
                }}
            />

            <View
                style={{
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/* title */}
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.h3
                    }}
                >
                    {data.title}

                </Text>

                {/* dsec */}

                <Text
                    style={{
                        color: COLORS.black,
                        textAlign: "justify",
                        ...FONTS.body2
                    }}
                >
                    {data.desc}
                </Text>

            </View>

            {/* no of days */}

            <View
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5
                }}
            >
                <Text
                    style={{
                        color: COLORS.gray30,
                        ...FONTS.body3
                    }}
                >
                    {data.time}
                </Text>
            </View>

            {
                showbar &&

                <View
                    style={{
                        backgroundColor: COLORS.primary,
                        width: 3,
                        height: 80,
                        position: 'absolute',
                        left: 0,
                        top: 7
                    }}
                />
            }

        </TouchableOpacity>
    )
}

export default UserChatList