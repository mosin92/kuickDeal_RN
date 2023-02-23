import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { CustomDropdown, FormInput, Header, HorizontalPropertyCard, IconButton, ImagePickerModal, TextButton, VerticalPropertyCard } from '../../components'
import { AuthStackNavigationProps } from '../../navigation/AuthStack'
import { useNavigation } from '@react-navigation/native'


const EditProfile = () => {
    const navigation = useNavigation<AuthStackNavigationProps>()
    // states

    const [name, setname] = React.useState('')
    const [phoneNo, setPhoneno] = React.useState('')
    const [email, setEmail] = React.useState('')

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
                    Edit Profile
                </Text>
            </View>
        )
    }

    const renderProfilePic = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    resizeMode='cover'
                    source={images.profile_pic}
                    style={{
                        height: 100,
                        width: 100
                    }}
                />

            </View>
        )
    }

    const renderUserInput = () => {

        return (
            <View
                style={{
                    marginTop: SIZES.base,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* user name */}
                <FormInput
                    value={name}
                    label="Your Name"
                    onChange={(val) => setname(val)}
                    placholder={"Enter your name"}
                    onFocus={() => { }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightSilver,
                        height: 50
                    }}
                />

                {/* phone no  */}
                <FormInput
                    value={phoneNo}
                    label={'Phone No.'}
                    onChange={(val) => setPhoneno(val)}
                    keyboardType='numeric'
                    placholder={"Enter your Phoneno"}
                    onFocus={() => { }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightSilver,
                        height: 50
                    }}
                />
                {/* email */}

                <FormInput
                    value={email}
                    label="Email Address"
                    onChange={(val) => setEmail(val)}
                    keyboardType='numeric'
                    placholder={"Enter your emaii"}
                    onFocus={() => { }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightSilver,
                        height: 50
                    }}
                />

            </View>
        )
    }

    const renderFooter = () => {

        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: SIZES.radius
                }}
            >
                <TextButton
                    label={"Update"}
                    buttonContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.secondary,
                        width: "80%"
                    }}
                    onPress={() => { }}
                />

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
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* profile pic */}
                {renderProfilePic()}

                {/* render user detail */}

                {renderUserInput()}

            </ScrollView>

            {/* footer */}
            {renderFooter()}

        </View>
    )
}

export default EditProfile