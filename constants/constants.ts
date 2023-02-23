import { StyleSheet } from "react-native"
import images from "./images"
import { COLORS } from "./theme"
import Toast from 'react-native-toast-message'

//  Stack Screens

const StackScreens = {
    public: {
        auth: 'auth',
        verify_phoneNo: 'verify_phoneNo',
        verify_otp: 'verify_otp',
    },
    auth: {
        home: 'home',
        product_detail: 'product_detail',
        profile_edit: "profile_edit",
        personal_chat: 'personal_chat',
        search: 'search'
    }
}



// global Style

const globalstyles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
})


// Cities

const cities = [
    {
        label: 'Islamabad',
        img: images.isb
    },
    {
        label: 'Karachi',
        img: images.karachi
    },
    {
        label: 'Lahore',
        img: images.lahore
    },
    {
        label: 'Abbotabad',
        img: images.attock
    },
    {
        label: 'Faisalabad',
        img: images.faisalabad
    },
]

// expore deals

const exploreProperties = [
    {
        propertyname: 'Eden Garden',
        cityname: 'Islamabad',
        price: 'Rs. 45,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '06',
        img: images.h1,
        isFavorite: false
    },
    {
        propertyname: 'Westridge II',
        cityname: 'Rawalpindi',
        price: 'Rs. 1,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '05',
        img: images.h2,
        isFavorite: true
    },
    {
        propertyname: 'Lari Gate',
        cityname: 'Attock',
        price: 'Rs. 6,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '06',
        img: images.h3,
        isFavorite: false
    },
]

// popular deals

const popularDeals = [
    {
        propertyname: 'Kindergarden',
        loaction: 'North Highlands',
        price: 'Rs. 9,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '06',
        img: images.deal1,
        isFavorite: true
    },
    {
        propertyname: 'San Ramon',
        loaction: 'Ireland',
        price: 'Rs. 4,000,000',
        no_of_bathrooms: '02',
        no_of_bedrooms: '05',
        img: images.deal2,
        isFavorite: false
    },
    {
        propertyname: 'Bahira Town',
        loaction: 'Pakistan',
        price: 'Rs. 9,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '08',
        img: images.deal3,
        isFavorite: true
    },
    {
        propertyname: 'Gulberg',
        loaction: 'Islamabad',
        price: 'Rs. 6,000,000',
        no_of_bathrooms: '05',
        no_of_bedrooms: '10',
        img: images.deal4,
        isFavorite: false
    },

]


// deal detail carosuel

const dealCarosuel = [

    {
        propertyname: 'Kindergarden',
        loaction: 'North Highlands',
        price: 'Rs. 9,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '06',
        img: images.carosuel1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        propertyname: 'San Ramon',
        loaction: 'Ireland',
        price: 'Rs. 4,000,000',
        no_of_bathrooms: '02',
        no_of_bedrooms: '05',
        img: images.carosuel2,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        propertyname: 'Bahira Town',
        loaction: 'Pakistan',
        price: 'Rs. 9,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '08',
        img: images.carosuel3,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        propertyname: 'Gulberg',
        loaction: 'Islamabad',
        price: 'Rs. 6,000,000',
        no_of_bathrooms: '05',
        no_of_bedrooms: '10',
        img: images.carosuel4,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        propertyname: 'Westridge II',
        loaction: 'Rawalpindi',
        price: 'Rs. 1,000,000',
        no_of_bathrooms: '04',
        no_of_bedrooms: '05',
        img: images.carosuel5,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },

]

// My ads

const myAds = [
    {
        propertyname: 'Gulberg Greens',
        loaction: 'Islamabad',
        price: 'Rs. 6,000,000',
        no_of_bathrooms: '05',
        no_of_bedrooms: '10',
        img: images.ads1,
    },
    {
        propertyname: 'Park View City',
        loaction: 'Islamabad',
        price: 'Rs. 40,000,000',
        no_of_bathrooms: '05',
        no_of_bedrooms: '12',
        img: images.ads2,
    },
    {
        propertyname: 'DHA Phase II',
        loaction: 'Karachi',
        price: 'Rs. 300,000,000',
        no_of_bathrooms: '05',
        no_of_bedrooms: '10',
        img: images.ads3,
    },
    {
        propertyname: 'Bahria Town',
        loaction: 'Rawalpindi',
        price: 'Rs. 20,000,000',
        no_of_bathrooms: '05',
        no_of_bedrooms: '10',
        img: images.ads4,
    },
]

// sell screens

const propertyType = [
    'Cottage', 'House', 'Villa', 'Hotel', 'Commercial', 'Apartment'
]


const ShowToastMessage = (text: string, type: string = 'success', position: 'top' | 'bottom' = 'top', bottomOffset: number = 40, visibilityTime: number = 400) => {
    console.log("------toast-----")
    Toast.show({
        type: type,
        text1: text,
        position: position,
        topOffset: 100,
        bottomOffset: 70,
        visibilityTime: visibilityTime
    })
}

// convert into currency formate

const CurrencyFormater = (number: string, setState: (val: any) => void) => {
    setState(number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
}

const RemoveCurrencyFormater = (number: string): string => {
    return number.replace(/\,/g, '')
}

// convert Number into Word 

var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function NumberinWords(num: number | string): string | undefined {
    if ((num = num.toString()).length > 9) return 'overflow';
    let n: any = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lac ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

export default {
    NumberinWords,
    CurrencyFormater,
    RemoveCurrencyFormater,
    ShowToastMessage,
    StackScreens,
    globalstyles,
    cities,
    exploreProperties,
    popularDeals,
    dealCarosuel,
    myAds,
    propertyType
}