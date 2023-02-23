import { View, Text, Button, ScrollView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { COLORS, constants, icons, SIZES, FONTS } from '../../constants'
import { HorizontalPropertyCard, IconButton, TextButton, VerticalPropertyCard, } from '../../components'
import { HomeScreenNavigationProps } from '../../navigation/types'
import { useNavigation } from '@react-navigation/native'
import { DrawerStackNavigationProps } from '../../navigation/CustomDrawer'
import { AuthStackScreens } from '../../navigation/AuthStack'

const Home = () => {

    const navigation = useNavigation<HomeScreenNavigationProps | any>()
    // states


    // UI RENDERS

    const renderSearchCity = () => {

        return (
            <View
                style={{
                    // marginTop:SIZES.padding,
                    height: 50,
                    marginHorizontal: SIZES.radius * 1.2,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    shadowColor: COLORS.darkGray,
                    shadowOpacity: 1,
                    shadowOffset: {
                        height: 60,
                        width: -200
                    },
                    elevation: 20,
                    shadowRadius: 10,
                    borderColor: COLORS.gray10,
                    borderWidth: 1
                }}
            >

                {/* hamburger icon */}

                <IconButton
                    icon={icons.menu}
                    iconStyle={{
                        width: 18,
                        height: 18
                    }}
                    onPress={() => navigation.openDrawer()}
                />

                {/* text input style */}

                <TouchableOpacity
                    onPress={() => navigation.navigate(AuthStackScreens.search)}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >

                    {/* icon */}
                    <Image
                        source={icons.search}
                        style={{
                            width: 15,
                            height: 15,
                            marginRight: SIZES.base
                        }}
                    />

                    {/* text input */}

                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body2
                        }}
                    >
                        What are you looking for?
                    </Text>
                </TouchableOpacity>

                {/* notification icon */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >

                    {/* vertical line */}

                    <View
                        style={{
                            height: 20,
                            width: 2,
                            backgroundColor: COLORS.gray10,
                        }}
                    />

                    {/* notifiation icon */}

                    <IconButton
                        icon={icons.notify}
                        iconStyle={{
                            height: 15,
                            width: 15,
                            marginLeft: SIZES.base
                        }}
                    />

                </View>

            </View>
        )
    }

    const renderCities = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,

                }}
            >
                {/* Title */}

                <Text
                    style={{
                        ...Styles.sectionTitle,
                        paddingHorizontal: SIZES.padding,
                        marginBottom: SIZES.radius,
                        ...FONTS.h3
                    }}
                >
                    Select City
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={constants.cities}
                    keyExtractor={(item, index) => `cities-${index}`}

                    renderItem={({ item, index }) => (
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => navigation.navigate(AuthStackScreens.product_detail)}
                                style={{
                                    height: 68,
                                    width: 68,
                                    borderWidth: 2,
                                    marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                    marginRight: index === constants.cities.length - 1 ? SIZES.padding : 0,
                                    borderRadius: SIZES.padding,
                                    borderColor: COLORS.transparentPrimary,
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
                                        borderRadius: SIZES.radius * 1.4
                                    }}
                                />
                            </TouchableOpacity>

                            {/* location name */}
                            <Text
                                style={{
                                    marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                    marginRight: index === constants.cities.length - 1 ? SIZES.padding : 0,
                                    color: COLORS.secondary
                                }}
                            >
                                {item.label}
                            </Text>
                        </View>
                    )}
                />

            </View >
        )
    }

    const renderExploreProperties = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                }}
            >
                {/* Title */}

                <Text
                    style={{
                        ...Styles.sectionTitle,
                        paddingHorizontal: SIZES.padding,
                        marginBottom: SIZES.radius,
                        ...FONTS.h3
                    }}
                >
                    Explore Today's Properties
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={constants.exploreProperties}
                    keyExtractor={(item, i) => `explore-properties-${i}`}
                    renderItem={({ item, index }) => (

                        <VerticalPropertyCard
                            data={item}

                            containerStyle={{
                                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                                marginRight: index === constants.exploreProperties.length - 1 ? SIZES.padding : 0
                            }}
                            onPress={() => navigation.navigate(AuthStackScreens.product_detail)}
                        />
                    )}
                />

                {/* <VerticalPropertyCard /> */}
            </View>
        )
    }

    const renderPopularDeals = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Title */}

                    <Text
                        style={{
                            ...Styles.sectionTitle,

                            marginBottom: SIZES.radius,
                            ...FONTS.h3
                        }}
                    >
                        Popular Deals
                    </Text>


                    <TextButton
                        label={"more"}
                        labelStyle={{
                            color: COLORS.secondary,
                            ...FONTS.body2
                        }}
                        onPress={() => { }}
                    />
                </View>

                {/* list */}

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={constants.popularDeals}
                    keyExtractor={(item, i) => `popular-deals-${i}`}
                    renderItem={({ item, index }) => (

                        <HorizontalPropertyCard
                            data={item}
                            TopRigthComponent={
                                <>
                                    <IconButton
                                        icon={item.isFavorite ? icons.favorite_selected : icons.favorite}
                                        iconStyle={{
                                            width: 12,
                                            height: 12,
                                            tintColor: item.isFavorite ? 'red' : COLORS.darkGray
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
                                </>
                            }
                            containerStyle={{
                                marginTop: index === 0 ? 0 : SIZES.radius
                            }}
                            onPress={() => navigation.navigate(AuthStackScreens.product_detail)}
                        />
                    )}
                />


            </View>
        )
    }


    // main container
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                paddingTop: SIZES.padding * 2,
                ...constants.globalstyles.maincontainer
            }}
            contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: SIZES.padding * 2.8
            }}
        >

            {/* header & search city */}

            {renderSearchCity()}

            {/* select city */}
            {renderCities()}

            {/* Explore Properties */}
            {renderExploreProperties()}

            {/* Popular deals */}

            {renderPopularDeals()}

        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    sectionTitle: {
        color: COLORS.secondary,
        ...FONTS.h3
    }

})
export default Home