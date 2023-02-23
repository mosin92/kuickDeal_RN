import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants'
import { CustomDropdown, FormInput, Header, HorizontalPropertyCard, IconButton, ImagePickerModal, TextButton } from '../../components'

const Favorite = ({ navigation }) => {

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
                    Favourites
                </Text>
            </View>
        )
    }

    const renderList = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >
                <View
                    style={{
                        paddingHorizontal: SIZES.padding
                    }}
                >

                    <FlatList
                        scrollEnabled
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: SIZES.padding * 3
                        }}
                        data={constants.myAds}
                        keyExtractor={(_, i) => `myAds-${i}`}
                        renderItem={({ item, index }) => (
                            <>

                                <HorizontalPropertyCard
                                    disabled={true}
                                    containerStyle={{
                                        marginTop: index === 0 ? SIZES.padding : SIZES.radius,
                                        height: 120
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
                                                icon={icons.favorite_selected}
                                                iconStyle={{
                                                    width: 12,
                                                    height: 12,
                                                    tintColor: 'red'
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
                                                onPress={() => setModal(true)}
                                            />
                                        </>
                                    }
                                />
                            </>
                        )}
                    />

                </View>
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

            {/* list of favourite */}
            {renderList()}


        </View>
    )
}

export default Favorite