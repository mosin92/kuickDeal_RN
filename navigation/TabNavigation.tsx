import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationEventMap, BottomTabNavigationOptions, BottomTabScreenProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Chat, Home, MyAds, MyBids, Sell } from '../screens'
import CustomTabs from './CustomTabs'
import { icons } from '../constants'
import {  RouteProp, TabNavigationState } from '@react-navigation/native'


export enum TabScreens {
    Home = 'Home',
    My_Ads = 'My_ads',
    Sell = 'Sell',
    Chat = 'Chat',
    MyBids = 'My_bids'
}

export type BottomTabParams = {
    [TabScreens.Home]: undefined,
    [TabScreens.My_Ads]: undefined,
    [TabScreens.Sell]: undefined
    [TabScreens.Chat]: undefined
    [TabScreens.MyBids]: undefined
}

//  Stack screen props

export type TabScreensProps<RouteName extends keyof BottomTabParams = TabScreens> = BottomTabScreenProps<BottomTabParams, RouteName>

// navigation Props

export type TabNavigationsProps<RouteName extends keyof BottomTabParams = TabScreens> = BottomTabNavigationProp<BottomTabParams, RouteName>

// Routes Props

export type TabScreenRouteProps<RouteName extends keyof BottomTabParams = TabScreens> = RouteProp<BottomTabParams, RouteName>




const TabNavigation = () => {


    const tabs = [
        {
            route: TabScreens.Home, component: Home, icon: icons.home
        },
        {
            route: TabScreens.My_Ads, component: MyAds, icon: icons.ads
        },
        {
            route: TabScreens.Sell, component: Sell, icon: icons.sell
        },
        {
            route: TabScreens.Chat, component: Chat, icon: icons.chat
        },
        {
            route: TabScreens.MyBids, component: MyBids, icon: icons.mybids
        },
    ]

    const BottomTab = createBottomTabNavigator()

    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                headerShown: false,
                tabBarHideOnKeyboard: true

            }}
            initialRouteName="Home"
        >

            {
                tabs.map(
                    (item, i) => {
                        return (

                            <BottomTab.Screen
                                key={`bottom-tab-${i}`}
                                name={item.route}
                                component={item.component}
                                options={{
                                    tabBarShowLabel: false,
                                    tabBarButton: (props) => <CustomTabs {...props} item={item} />
                                }}
                            />
                        )
                    }
                )
            }
        </BottomTab.Navigator>
    )
}

export default TabNavigation