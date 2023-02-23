import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../constants'
import IconButton from './IconButton'

interface CardData {
    img: ImageSourcePropType,
    cityname: string,
    propertyname: string
    price: number | string,
    no_of_bathrooms: number | string,
    no_of_bedrooms: number | string,
    isFavorite: boolean
}

interface Props {
    data: CardData,
    containerStyle: object,
    onPress: (val: any) => void,
    RenderChildren?: React.ReactNode
}

const VerticalPropertyCard: React.FC<Props> = ({ data, containerStyle, onPress, RenderChildren }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{
                height: 240,
                width: 160,
                borderRadius: SIZES.radius,
                borderWidth: 1,
                borderColor: COLORS.gray10,
                padding: SIZES.base,
                // will comment this style
                // marginHorizontal: SIZES.padding,
                shadowColor: COLORS.darkGray,
                backgroundColor: COLORS.white,
                shadowOpacity: 1,
                shadowOffset: {
                    height: 250,
                    width: -200
                },
                elevation: 10,
                shadowRadius: 10,
                ...containerStyle
            }}
        >
            <View
                style={{
                    height: 135,
                }}
            >
                <Image
                    resizeMode='cover'
                    source={data.img}
                    style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: SIZES.radius
                    }}
                />

                <ImageBackground

                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '100%',
                    }}
                    source={images.overlay}
                >
                    <View
                        style={{
                            padding: SIZES.base,
                            flex: 1,
                            position: 'absolute',
                            bottom: 0,
                            right: 10,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* icon */}

                        <Image
                            source={icons.location}
                            style={{
                                width: 15,
                                height: 15
                            }}
                        />

                        <Text
                            style={{
                                color: COLORS.white,
                                marginLeft: 2,
                                ...FONTS.body3
                            }}
                        >
                            {data.cityname}
                        </Text>

                    </View>

                    {RenderChildren}

                </ImageBackground>

            </View>

            {/* detail section */}

            <View
                style={{
                    marginTop: SIZES.base,
                    flex: 1
                }}
            >
                {/* Property name */}

                <Text
                    style={Styles.name}
                >
                    {data.propertyname}
                </Text>

                {/* Price */}
                <Text
                    style={Styles.price}
                >
                    {data.price}
                </Text>
            </View>

            {/* no of beds and washrooms */}

            <View
                style={{
                    flexDirection: 'row',
                    flex: 0.5,
                    justifyContent: 'space-between'
                }}
            >

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {/* Toilet  */}
                    <View
                        style={{
                            ...constants.globalstyles.row,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.washroom}
                            style={{
                                width: 15,
                                height: 15
                            }}
                        />

                        <Text
                            style={Styles.beds}
                        >
                            {data.no_of_bathrooms}
                        </Text>

                    </View>

                    {/* Washroom  */}
                    <View
                        style={{
                            marginLeft: SIZES.radius,
                            ...constants.globalstyles.row,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.bedroom}
                            style={{
                                width: 15,
                                height: 15,
                            }}
                        />

                        <Text
                            style={Styles.beds}
                        >
                            {data.no_of_bedrooms}
                        </Text>

                    </View>
                </View>

                {/* Favorite button */}


                <IconButton
                    icon={data.isFavorite ? icons.favorite_selected : icons.favorite}
                    iconStyle={{
                        width: 12,
                        height: 12,
                        tintColor: data.isFavorite ? 'red' : COLORS.darkGray
                    }}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: COLORS.gray10,
                        height: 28,
                        width: 28,
                        borderRadius: SIZES.padding,
                        backgroundColor: COLORS.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: COLORS.darkGray,
                        shadowOpacity: 1,
                        shadowOffset: {
                            height: 250,
                            width: 150
                        },
                        elevation: 5,
                        shadowRadius: 10
                    }}
                />

            </View>



        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({

    name: {
        color: COLORS.secondary,
        ...FONTS.body2
    },
    price: {
        color: COLORS.darkGray,
        ...FONTS.body3
    },
    beds: {
        color: COLORS.secondary,
        ...FONTS.body3,
        marginLeft: 3
    }
})
export default VerticalPropertyCard