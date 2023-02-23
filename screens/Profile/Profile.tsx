import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { CustomDropdown, FormInput, Header, HorizontalPropertyCard, IconButton, ImagePickerModal, TextButton, VerticalPropertyCard } from '../../components'
import { AuthStackNavigationProps, AuthStackScreens } from '../../navigation/AuthStack'
import { useNavigation } from '@react-navigation/native'
import { DrawerStackScreens } from '../../navigation/CustomDrawer'

const Profile = () => {

    const navigation = useNavigation<AuthStackNavigationProps>()
    // UI RENDERS

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
                    My Profile
                </Text>
            </View>
        )
    }

    const renderProfile = () => {

        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <View>
                    <Image
                        resizeMode='cover'
                        source={images.myprofile}
                        style={{
                            height: 100,
                            width: 100
                        }}
                    />

                    {/* edit btn */}
                    <IconButton
                        icon={icons.edit}
                        iconStyle={{
                            height: 18,
                            width: 18,
                            tintColor: COLORS.white
                        }}
                        containerStyle={{
                            position: 'absolute',
                            bottom: 0,
                            right: 5,
                            height: 32,
                            width: 32,
                            borderRadius: SIZES.padding,
                            backgroundColor: COLORS.secondary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => navigation.navigate(AuthStackScreens.profile_edit)}
                    />
                </View>

                {/* Total Listin */}

                <View
                    style={{
                        marginTop: SIZES.radius,
                        width: 150,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.darkGray
                    }}
                >
                    <Text

                    >
                        Total Listings {" "}
                        <Text
                            style={{
                                color: COLORS.secondary,
                                ...FONTS.h3
                            }}
                        >

                            30
                        </Text>
                    </Text>

                </View>

            </View>
        )
    }

    const renderDealList = () => {

        return (
            <View
                style={{
                    marginTop: SIZES.base,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {
                    constants.exploreProperties.map(
                        (item, i) => (
                            <VerticalPropertyCard
                                onPress={() => { }}
                                key={`deal-listing-${i}`}
                                data={item}
                                containerStyle={{
                                    width: 150,
                                    marginTop: SIZES.radius
                                }}
                                RenderChildren={
                                    <>
                                        <IconButton
                                            icon={icons.edit}
                                            iconStyle={{
                                                height: 18,
                                                width: 18,
                                                tintColor: COLORS.secondary
                                            }}
                                            containerStyle={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 5,
                                                height: 32,
                                                width: 32,
                                                borderRadius: SIZES.padding,
                                                backgroundColor: "rgba(255, 255, 255, 0.68)",
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        />
                                    </>
                                }
                            />
                        )
                    )
                }
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

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >

                {/* renderProfile  */}

                {renderProfile()}

                {/* deal list */}

                {renderDealList()}

            </ScrollView>
        </View>
    )
}

export default Profile