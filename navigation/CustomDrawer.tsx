import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'
import AuthStack from './AuthStack'
import { Favorite, Profile, Setting } from '../screens'
import { LineDivider, TextButton } from '../components'
import { RouteProp } from '@react-navigation/native'


export enum DrawerStackScreens {
    home = 'Home',
    my_Account = 'My Account',
    my_Favorites = "My Favorites",
    settings = 'Settings'
}

export type DrawerStackParams = {
    [DrawerStackScreens.home]: undefined,
    [DrawerStackScreens.my_Account]: undefined,
    [DrawerStackScreens.my_Favorites]: undefined,
    [DrawerStackScreens.settings]: undefined,
}

//  Stack screen props

export type DrawerStackScreenProps<RouteName extends keyof DrawerStackParams = DrawerStackScreens> = DrawerScreenProps<DrawerStackParams, RouteName>

// navigation Props

export type DrawerStackNavigationProps<RouteName extends keyof DrawerStackParams = DrawerStackScreens> = DrawerNavigationProp<DrawerStackParams, RouteName>

// Routes Props

export type DrawerStackRouteProps<RouteName extends keyof DrawerStackParams = DrawerStackScreens> = RouteProp<DrawerStackParams, RouteName>


const { home, my_Account, my_Favorites, settings } = DrawerStackScreens

const drawerRoute = [
    {
        route: home, component: AuthStack, icon: icons.profile,
    },
    {
        route: my_Account, component: Profile, icon: icons.profile,
    },
    {
        route: my_Favorites, component: Favorite, icon: icons.favorite,
    },
    {
        route: settings, component: Setting, icon: icons.setting,
    },
]

interface CustomDrawerProps {
    label: string,
    icon: ImageSourcePropType,
    onPress: (val: any) => void,
    isFoucused?: any,
    containerStyle: object
}

const CustomDrawer = () => {



    const Drawer = createDrawerNavigator()

    const CustomDrawerItems = ({ label, icon, onPress, isFoucused, containerStyle }: CustomDrawerProps) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 40,
                    marginBottom: SIZES.base,
                    alignItems: 'center',
                    borderRadius: SIZES.base,
                    backgroundColor: isFoucused ? COLORS.transparentBlack1 : '',
                    ...containerStyle
                }}
                onPress={onPress}
            >
                <Image
                    resizeMode='contain'
                    source={icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.darkGray
                    }}
                />
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h3,
                        marginLeft: 15
                    }}
                >
                    {label}
                </Text>

            </TouchableOpacity>
        )
    }

    const CustomDrawerContent = ({ navigation }: any) => {

        return (
            <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }} >

                <View
                    style={{
                        flex: 1, paddingHorizontal: SIZES.padding,

                    }}
                >

                    {/* Header */}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-start'
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={images.myprofile}
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: SIZES.padding
                            }}
                        />

                        {/* Name */}

                        <Text
                            style={{
                                marginTop: SIZES.radius,
                                textAlign: 'center',
                                ...FONTS.h2
                            }}
                        >
                            Mohsin Ali
                        </Text>

                    </View>

                    <LineDivider
                        lineStyle={{
                            marginTop: SIZES.padding,
                            backgroundColor: COLORS.gray10
                        }}
                    />
                    {/* content */}

                    <View
                        style={{
                            flex: 2,
                        }}
                    >
                        {
                            drawerRoute.map(
                                (val, index) => (
                                    <CustomDrawerItems
                                        key={`custom-drawer-${index}`}
                                        label={val.route}
                                        icon={val.icon}
                                        containerStyle={{
                                            marginTop: SIZES.radius
                                        }}
                                        onPress={() => navigation.navigate(val.route)}
                                    />
                                )
                            )
                        }


                    </View>

                    {/* footer */}
                    <TextButton
                        label={"Log out"}
                        buttonContainerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginBottom: SIZES.radius,
                        }}
                        labelStyle={{
                            color: COLORS.black
                        }}
                        onPress={() => navigation.replace('AppStack')}
                    />

                </View>

            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false
            }}
            initialRouteName={'Home'}
            drawerContent={props => {
                return <CustomDrawerContent navigation={props.navigation} />
            }}
        >
            {
                drawerRoute.map(
                    (item, i) => (
                        <Drawer.Screen key={`drawer-key-${i}`} name={item.route} component={item.component} />
                    )
                )
            }

        </Drawer.Navigator>
    )
}

export default CustomDrawer