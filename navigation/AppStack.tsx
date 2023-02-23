import React from 'react'
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { Autthentication, Otp, VerifyPhoneNo } from '../screens'
import { AppStackList } from './types'
import { RouteProp } from '@react-navigation/native'

export enum AppStackScreens {
    auth = 'auth',
    verify_phoneNo = 'verify_phoneNo',
    verify_otp = 'verify_otp',
}


export type AppStackParams = {
    [AppStackScreens.auth]: undefined,
    [AppStackScreens.verify_otp]: undefined,
    [AppStackScreens.verify_phoneNo]: undefined,
}

//  Stack screen props

export type AppStackScreenProps<RouteName extends keyof AppStackParams = AppStackScreens> = StackScreenProps<AppStackParams, RouteName>

// navigation Props

export type AppStackNavigationProps<RouteName extends keyof AppStackParams = AppStackScreens> = StackNavigationProp<AppStackParams, RouteName>

// Routes Props

export type AppStackRouteProps<RouteName extends keyof AppStackParams = AppStackScreens> = RouteProp<AppStackParams, RouteName>


const AppStack = () => {

    const { auth, verify_otp, verify_phoneNo } = AppStackScreens

    const appStack = [
        {
            route: auth, component: Autthentication
        },
        {
            route: verify_otp, component: Otp
        },
        {
            route: verify_phoneNo, component: VerifyPhoneNo
        },
    ]




    const Stack = createStackNavigator<AppStackList>()

    return (
        <Stack.Navigator
            initialRouteName={AppStackScreens.auth}
            screenOptions={{
                headerShown: false
            }}
        >
            {
                appStack.map(
                    (item, index) => (
                        <Stack.Screen
                            key={`app-stack-scren-${index}`}
                            name={item.route} component={item.component} />
                    )
                )
            }

        </Stack.Navigator>
    )
}

export default AppStack