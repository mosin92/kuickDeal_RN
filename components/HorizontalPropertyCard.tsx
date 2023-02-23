import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet,ImageSourcePropType } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../constants'
import IconButton from './IconButton'

interface cardObject {
    img: ImageSourcePropType,
    propertyname: string,
    price: number | string,
    no_of_bathrooms: number | string
    loaction: string
    no_of_bedrooms: number | string
}

interface Props {
    data: cardObject,
    containerStyle?: Object,
    onPress: (val: any) => void,
    imgStyle?: Object,
    overlayStyle?: Object
    TopRigthComponent?: React.ReactNode,
    disabled?: boolean
}
const HorizontalPropertyCard: React.FC<Props> = ({ data, containerStyle, onPress, imgStyle, overlayStyle, TopRigthComponent, disabled = false }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                height: 90,
                width: "100%",
                borderWidth: 1,
                borderColor: COLORS.gray10,
                borderRadius: SIZES.radius,
                flexDirection: 'row',
                ...containerStyle
            }}
        >

            {/* image container */}

            <View>
                <Image
                    source={data.img}
                    resizeMode='cover'
                    style={{
                        width: 74,
                        height: '100%',
                        ...imgStyle
                    }}
                />


                {/* overlay */}
                <Image
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: 74,
                        height: 90,
                        borderRadius: SIZES.radius,
                        ...overlayStyle
                    }}
                    source={images.overlay}
                />
            </View>

            {/* main continer */}
            <View
                style={{
                    marginLeft: SIZES.base,
                    flex: 1,
                    padding: SIZES.base
                }}
            >
                {/* Property deals detail container*/}
                {/* row 1 */}
                <View
                    style={{
                        // borderWidth: 1,
                        flex: 1,
                        // padding: SIZES.base
                    }}
                >

                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >

                        <View>
                            {/* deal name */}
                            <Text
                                style={{
                                    ...Styles.name
                                }}
                            >

                                {data.propertyname}
                            </Text>

                            {/* price */}

                            <Text
                                style={{
                                    ...Styles.price
                                }}
                            >
                                {data.price}
                            </Text>
                        </View>


                        {/* faviorite icon button */}
                        {
                            TopRigthComponent
                        }

                    </View>



                </View>

                {/* no of beds and washroom */}
                {/* row 2 */}


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

                    {/* location */}

                    <View
                        style={{
                            ...constants.globalstyles.row,
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.location}
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: COLORS.primary
                            }}
                        />

                        <Text
                            style={{
                                color: COLORS.secondary,
                                ...FONTS.body3,
                                marginLeft: 3
                            }}
                        >
                            {data.loaction}
                        </Text>


                    </View>

                </View>
            </View>

        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({

    name: {
        color: COLORS.secondary,
        ...FONTS.h4
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

export default HorizontalPropertyCard