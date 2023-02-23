import { View, Text, Image, StatusBar, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants'
import { TextButton } from '../../components'

const ProductDetail = () => {

    // states

    const [carosuelIndex, setCarosuelIndex] = React.useState<number>(0)


    const rendergallery = () => {

        return (
            <View
                style={{
                    width: '100%',
                    height: SIZES.height * 0.4,
                    borderWidth: 1
                }}
            >

                <Image
                    resizeMode='cover'
                    source={constants.dealCarosuel[carosuelIndex].img}
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                />


                {/* list of images */}

                <FlatList
                    horizontal
                    style={{
                        position: 'absolute',
                        bottom: 5
                    }}
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    data={constants.dealCarosuel}
                    keyExtractor={(_, i) => `carosuel-${i}`}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setCarosuelIndex(index)}
                            style={{
                                height: 68,
                                width: 68,
                                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index === constants.cities.length - 1 ? SIZES.padding : 0,
                                borderRadius: SIZES.padding,
                                borderColor: index == carosuelIndex ? COLORS.darkGray : '',
                                borderWidth: index == carosuelIndex ? 1.6 : 0,
                                padding: 3,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                resizeMode='cover'
                                source={item.img}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: SIZES.radius * 1.4,
                                    borderWidth: 1,
                                    borderColor: COLORS.white
                                }}
                            />
                        </TouchableOpacity>
                    )}
                />

            </View>
        )
    }

    const renderDealDetails = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >
                {/* title & price */}

                <View
                    style={{
                        paddingHorizontal: SIZES.padding,
                        ...constants.globalstyles.row,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.secondary,
                            ...FONTS.h2
                        }}
                    >
                        {
                            constants.dealCarosuel[carosuelIndex].propertyname
                        }
                    </Text>

                    {/* price */}
                    <Text
                        style={{
                            color: COLORS.secondary,
                            ...FONTS.body1
                        }}
                    >
                        {
                            constants.dealCarosuel[carosuelIndex].price
                        }
                    </Text>

                </View>

                {/* location & type */}

                <View
                    style={{
                        ...constants.globalstyles.row,
                        alignItems: 'center',
                        paddingHorizontal: SIZES.padding
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.location}
                            style={{
                                width: 15,
                                height: 15,
                                borderWidth: 1,
                                tintColor: COLORS.primary
                            }}
                        />

                        <Text
                            style={{
                                marginLeft: 3,
                                ...FONTS.body2,
                                color: COLORS.secondary
                            }}
                        >
                            {constants.dealCarosuel[carosuelIndex].loaction}
                        </Text>

                    </View>


                    {/* Type */}

                    <View
                        style={{
                            width: 78,
                            height: 36,
                            borderRadius: SIZES.radius * 1.4,
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body2
                            }}
                        >
                            Home
                        </Text>

                    </View>

                </View>

                {/* no. of beds & washrooms detail */}

                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.padding
                    }}
                >

                    {/* washrooms */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.washroom}
                            style={{
                                width: 15,
                                height: 15,
                                borderWidth: 1,
                                tintColor: COLORS.primary
                            }}
                        />

                        <Text
                            style={{
                                marginLeft: 3,
                                ...FONTS.body2,
                                color: COLORS.secondary
                            }}
                        >
                            {constants.dealCarosuel[carosuelIndex].no_of_bathrooms}
                        </Text>

                    </View>



                    {/* beds */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.bedroom}
                            style={{
                                width: 15,
                                height: 15,
                                borderWidth: 1,
                                tintColor: COLORS.primary
                            }}
                        />

                        <Text
                            style={{
                                marginLeft: 3,
                                ...FONTS.body2,
                                color: COLORS.secondary
                            }}
                        >
                            {constants.dealCarosuel[carosuelIndex].no_of_bedrooms}
                        </Text>

                    </View>

                </View>


                {/* description */}

                <View
                    style={{
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'justify',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies volutpat nulla a dolor justo feugiat est, at. Adipiscing faucibus vitae a, pulvinar leo. Tristique eleifend mattis tincidunt a. In semper facilisi blandit ac, iaculis. Massa, sodales facilisis consectetur imperdiet. Non elit gravida non.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies volutpat nulla a dolor justo feugiat est, at. Adipiscing faucibus vitae a, pulvinar leo. Tristique eleifend mattis tincidunt a. In semper facilisi blandit ac, iaculis. Massa, sodales facilisis consectetur imperdiet. Non elit gravida non.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ultricies volutpat nulla a dolor justo feugiat est, at. Adipiscing faucibus vitae a, pulvinar leo. Tristique eleifend mattis tincidunt a. In semper facilisi blandit ac, iaculis. Massa, sodales facilisis consectetur imperdiet. Non elit gravida non.
                    </Text>

                    <TextButton
                        label={"Send Proposal"}
                        buttonContainerStyle={{
                            height: 50,
                            backgroundColor: COLORS.secondary,
                            borderRadius: SIZES.radius
                            , justifyContent: "center",
                            alignItems: 'center'
                        }}
                        onPress={() => { }}
                    />


                </View>


            </View>
        )
    }

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: SIZES.radius
            }}
        >
            {/* gallery  */}
            {rendergallery()}

            {/* deal deatail */}

            {renderDealDetails()}
        </ScrollView>
    )
}


export default ProductDetail