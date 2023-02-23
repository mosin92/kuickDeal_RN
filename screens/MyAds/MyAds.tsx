import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants'
import { AppModal, Header, HorizontalPropertyCard, IconButton, LineDivider } from '../../components'
import { AuthStackNavigationProps } from '../../navigation/AuthStack'
import { useNavigation } from '@react-navigation/native'

const MyAds = () => {

    const navigation = useNavigation<AuthStackNavigationProps>()
    // states

    const [showModal, setModal] = React.useState<boolean>(false)


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
                    My Ads
                </Text>
            </View>
        )
    }

    const renderModal = () => {

        const adsmodalData = [
            {
                icon: icons.edit,
                label: 'Edit'
            },
            {
                icon: icons.pause,
                label: 'Pause'
            },
            {
                icon: icons.share,
                label: 'Share'
            },
            {
                icon: icons.delete_,
                label: 'Delete'
            },
        ]
        return (
            <>
                {
                    showModal &&
                    <AppModal
                        containerStyle={{
                            paddingHorizontal: SIZES.padding
                        }}
                        overlayStyle={{
                            backgroundColor: COLORS.transparentBlack1
                        }}
                        isVisible={showModal}
                        onClose={() => setModal(false)}
                        minusHeigth={250}

                    >

                        {/* content */}

                        {
                            adsmodalData.map(
                                (item, i) => (
                                    <TouchableOpacity
                                        key={`ads-modal-${i}`}
                                        style={{
                                            flexDirection: 'row',
                                            height: 50,
                                            alignItems: 'center',
                                            borderBottomColor: COLORS.gray10,
                                            borderBottomWidth: 1
                                        }}
                                    >
                                        <Image
                                            source={item.icon}
                                            style={{
                                                width: 18,
                                                height: 18,
                                                tintColor: COLORS.black
                                            }}
                                        />

                                        <Text
                                            style={{
                                                color: COLORS.black,
                                                marginLeft: SIZES.padding,
                                                ...FONTS.body1
                                            }}
                                        >
                                            {item.label}

                                        </Text>
                                    </TouchableOpacity>

                                )
                            )
                        }

                    </AppModal>
                }
            </>
        )
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
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
                            onPress={() => { }}
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
                                        icon={icons.threedots}
                                        iconStyle={{
                                            width: 12,
                                            height: 12,
                                            tintColor: COLORS.darkGray
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
                    )}
                />

            </View>

            {/* Ads modal */}

            {renderModal()}


        </View>
    )
}

export default MyAds