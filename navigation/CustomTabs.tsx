import { Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { COLORS, SIZES, } from '../constants'
import { useNavigation, } from '@react-navigation/native'
import { View } from 'react-native-animatable'
import { TabNavigationsProps, TabScreens } from './TabNavigation'
import { AppStackScreens } from './AppStack'

interface TabData {
    route: string,
    component: React.FC<any>,
    icon: ImageSourcePropType
}

interface Props {
    item: TabData,
    accessibilityState?: any
}

const CustomTabs: React.FC<Props> = ({ item, accessibilityState }) => {
    const navigate = useNavigation<any>()
    const focused = accessibilityState.selected

    const tabStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }

    const TabStyle2 = {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 48,
        width: 48,
        borderRadius: 40,
        backgroundColor: COLORS.secondary,
        position: 'relative',
        top: -10
    }

    const btnStyle = item.route === "Sell" ? TabStyle2 : tabStyle
    return (
        <TouchableOpacity
            onPress={() => {
                navigate.navigate(item.route)
            }}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}
        >

            {/* Icon */}

            {
                item.route === "Sell" ?

                    <>
                        <View
                            style={{
                                height: 45,
                                width: 45,
                                borderWidth: 5,
                                backgroundColor: COLORS.darkGray,
                                borderRadius: SIZES.padding,
                                borderColor: 'rgba(255, 255, 255, 1)',
                                bottom: 12,
                                shadowColor: COLORS.darkGray,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                shadowRadius: 0.9,
                                shadowOffset: {
                                    height: 20,
                                    width: 30
                                },
                                elevation: 20
                            }}
                        >

                            <View
                                style={{
                                    height: 40,
                                    width: 40,
                                    backgroundColor: COLORS.secondary,
                                    borderRadius: SIZES.padding,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // bottom: 10
                                    position: 'absolute'
                                }}
                            >
                                <Image
                                    style={{
                                        height: 15,
                                        width: 15,
                                        tintColor: COLORS.darkGray
                                    }}
                                    source={item.icon}
                                />

                            </View>
                        </View>

                    </>
                    :
                    <>
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: focused ? COLORS.secondary : COLORS.darkGray
                            }}
                            source={item.icon}
                        />
                    </>

            }


            {/* Text */}
            <Text
                style={{
                    color: focused ? COLORS.secondary : COLORS.darkGray,
                    bottom: item.route === "Sell" ? 12 : 0
                }}
            >
                {item.route}
            </Text>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({

    sellbtn: {
        height: 48,
        width: 48,
        borderRadius: SIZES.padding,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CustomTabs