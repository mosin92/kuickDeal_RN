import React from 'react'
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { Home, ProductDetail, EditProfile, PersonalChat, Search } from '../screens'
import TabNavigation from './TabNavigation'
import { AuthStackList } from './types'
import { RouteProp } from '@react-navigation/native'

export enum AuthStackScreens {
    home = 'home',
    product_detail = 'product_detail',
    profile_edit = "profile_edit",
    personal_chat = 'personal_chat',
    search = 'search'
}

export type AuthStackParams = {
    [AuthStackScreens.home]: undefined,
    [AuthStackScreens.personal_chat]: undefined,
    [AuthStackScreens.product_detail]: undefined,
    [AuthStackScreens.profile_edit]: undefined,
    [AuthStackScreens.search]: undefined,
}

//  Stack screen props

export type AuthStackScreenProps<RouteName extends keyof AuthStackParams = AuthStackScreens> = StackScreenProps<AuthStackParams, RouteName>

// navigation Props

export type AuthStackNavigationProps<RouteName extends keyof AuthStackParams = AuthStackScreens> = StackNavigationProp<AuthStackParams, RouteName>

// Routes Props

export type AuthStackRouteProps<RouteName extends keyof AuthStackParams = AuthStackScreens> = RouteProp<AuthStackParams, RouteName>



const AuthStack = () => {

    const { home, personal_chat, product_detail, profile_edit, search } = AuthStackScreens

    const authStack = [
        {
            route: home, component: TabNavigation
        },
        {
            route: product_detail, component: ProductDetail
        },
        {
            route: profile_edit, component: EditProfile
        },
        {
            route: personal_chat, component: PersonalChat
        },
        {
            route: search, component: Search
        },
    ]


    const Stack = createStackNavigator()


    return (
        <Stack.Navigator
            initialRouteName={'home'}
            screenOptions={{
                headerShown: false
            }}
        >
            {
                authStack.map(
                    (item, i) => (

                        <Stack.Screen key={`auth-stack-${i}`} name={item.route} component={item.component} />
                    )
                )
            }

        </Stack.Navigator>
    )
}

export default AuthStack