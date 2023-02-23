import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants'
import { Header, HorizontalPropertyCard, IconButton } from '../../components'
import { AuthStackNavigationProps } from '../../navigation/AuthStack'
import { useNavigation } from '@react-navigation/native'

const MyBids = () => {

    const navigation = useNavigation<AuthStackNavigationProps>()
    const renderHeader = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1
                }}
            >

                {/* back btn */}

                <IconButton
                    icon={icons.back}
                    iconStyle={{
                        width: 18,
                        height: 18
                    }}
                    onPress={() => navigation.goBack()}
                />

                {/* title */}

                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h3,
                        marginLeft: SIZES.radius
                    }}
                >
                    My Bids
                </Text>
            </View>
        )
    }

    return (
        <View
            style={{
                ...constants.globalstyles.maincontainer,
                paddingTop: SIZES.padding * 1.8
            }}
        >
            {/* header */}

            <Header
                renderCompoent={renderHeader()}
            />

            {/* content */}

            <View
                style={{
                    paddingHorizontal: SIZES.padding
                }}
            >

                <FlatList
                    scrollEnabled
                    showsVerticalScrollIndicator={false}
                    data={constants.myAds}
                    keyExtractor={(_, i) => `myAds-${i}`}
                    renderItem={({ item, index }) => (
                        <HorizontalPropertyCard
                            disabled={true}
                            onPress={() => { }}
                            containerStyle={{
                                marginTop: index === 0 ? SIZES.padding : SIZES.radius,
                                height: 120,
                            }}
                            imgStyle={{
                                width: 100
                            }}
                            overlayStyle={{
                                width: '100%',
                                height: '100%'
                            }}
                            data={item}

                            TopRigthComponent={
                                <>
                                    <IconButton
                                        icon={icons.cross_deals}
                                        iconStyle={{
                                            width: 25,
                                            height: 25,
                                        }}
                                        containerStyle={{
                                            position: 'absolute',
                                            padding: 0,
                                            right: -5,
                                            top: -5,
                                            borderRadius: SIZES.padding,
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
                                </>
                            }
                        />
                    )}
                />

            </View>


        </View>
    )
}

export default MyBids