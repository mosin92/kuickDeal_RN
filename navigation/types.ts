import { StackNavigationProp } from "@react-navigation/stack"
import type {
    CompositeNavigationProp,
    RouteProp,
} from '@react-navigation/native';

export type AppStackList = {
    auth: undefined,
    verify_phoneNo: undefined
    verify_otp: undefined
}


export type AuthStackList = {
    home: undefined,
    product_detail: undefined,
    profile_edit: undefined,
    personal_chat: undefined,
    search: undefined
}


export type TabNavigationList = {
    Home: any,
    My_ads: any,
    Sell: any,
    Chat: any,
    My_bids: any
}

// home screen

export type HomeScreenNavigationProps = StackNavigationProp<AuthStackList, 'home'>