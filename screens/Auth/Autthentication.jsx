import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { AuthLayout, FormInput, IconButton, TextButton } from '../../components'
import { COLORS, constants, FONTS, icons, SIZES, validation } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Animatable from 'react-native-animatable';

const Autthentication = ({ navigation }) => {

    // main states

    const [selectedTab, setselectedTab] = React.useState('signin')


    const renderHeaderSection = () => {

        return (
            <Animatable.View
                style={{
                    justifyContent: 'space-around',
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center',
                    flexDirection: 'row',
                    flex: 1
                }}
            >
                <TextButton
                    label={"SIGN IN"}
                    labelStyle={{
                        color: selectedTab === "signin" ? COLORS.white : 'rgba(255, 255, 255, 0.25)'
                    }}
                    onPress={() => setselectedTab("signin")}
                />
                <TextButton
                    onPress={() => setselectedTab("signup")}
                    label={"SIGN UP"}
                    labelStyle={{
                        color: selectedTab === "signup" ? COLORS.white : 'rgba(255, 255, 255, 0.25)'
                    }}
                />
            </Animatable.View>
        )
    }

    //Common Footer component

    const Footer = () => {

        const socail_media = [
            icons.google,
            icons.fb,
            icons.twitter
        ]

        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* text */}

                <Text
                    style={{
                        color: COLORS.secondary,
                        ...FONTS.body1
                    }}
                >
                    Or sign in with
                </Text>

                {/* Socail Icon */}

                <View
                    style={{
                        marginTop: SIZES.base,
                        flexDirection: 'row',
                        justifyContent: "space-between"
                    }}
                >
                    {
                        socail_media.map(
                            (item, index) => (
                                <IconButton
                                    key={`socail-media-${index}`}
                                    icon={item}
                                    containerStyle={{
                                        marginRight: SIZES.radius
                                    }}
                                    iconStyle={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            )
                        )
                    }

                </View>
            </View>
        )
    }


    // LOGIN Component

    const LOGIN = () => {

        // States

        const [username, setUsername] = React.useState('')
        const [password, setpassword] = React.useState('')

        const [usernameError, setusernameError] = React.useState('')
        const [passwordError, setpasswordError] = React.useState('')

        const [nameFoused, setnameFoused] = React.useState(false)
        const [passwordFoused, setpasswordFoused] = React.useState(false)

        const [loading, setloading] = React.useState(false)


        // show paswd

        const [showpaswd, setshowpaswd] = React.useState(false)


        // helper function

        const isEnableLoginBtn = () => {
            return username !== "" && password !== "" && usernameError === "" && passwordError === ""
        }

        const handleSubmit = () => {
            setloading(true)

            setTimeout(() => {
                setloading(false)
                setUsername('')
                setpassword('')
                Alert.alert("Dummy Msg", "Login Successfully", [
                    {
                        onPress: () => navigation.replace('AuthStack')
                    }
                ])
            }, 3000);
        }

        return (
            <Animatable.View
                animation={"fadeInUp"}

                delay={500}

                style={{
                    flex: 1,
                    paddingVertical: SIZES.radius * 1.5,
                }}
            >
                {/* login Header section */}
                <View
                >
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h2
                        }}
                    >
                        Welcome back
                    </Text>

                    {/* subTitle */}

                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body1
                        }}
                    >
                        Sign in with your account
                    </Text>

                </View>


                {/* Form Inputs */}

                <View
                    style={{
                        marginTop: SIZES.radius
                    }}
                >


                    {/* User name */}

                    <FormInput
                        label={"Username"}
                        onFocus={(val) => setnameFoused(val)}
                        value={username}
                        errorMsg={usernameError}
                        onChange={(val) => {
                            validation.validateName(val, setusernameError)
                            setUsername(val)
                        }}
                        inputContainerStyle={{
                            borderBottomColor: nameFoused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}

                    />

                    {/* Password */}

                    <FormInput
                        label={"Password"}
                        value={password}
                        onFocus={(val) => setpasswordFoused(val)}
                        errorMsg={passwordError}
                        onChange={(val) => {
                            validation.validatePassword(val, setpasswordError)
                            setpassword(val)
                        }}
                        secureTextEntry={!showpaswd}
                        containerStyle={{
                            marginTop: SIZES.padding
                        }}
                        inputContainerStyle={{
                            borderBottomColor: passwordFoused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}
                        appendComponent={
                            <IconButton
                                icon={icons.close_eye}
                                iconStyle={{
                                    width: 15,
                                    height: 15
                                }}
                                onPress={() => setshowpaswd(prev => !prev)}
                            />
                        }
                    />

                </View>

                {/* SignIn Btn */}

                <View
                    style={{
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >

                    <TextButton
                        loading={loading}
                        disabled={loading && isEnableLoginBtn() ? true : isEnableLoginBtn() && !loading ? false : true}
                        label={"SIGN In"}
                        buttonContainerStyle={{
                            backgroundColor: isEnableLoginBtn() ? COLORS.secondary : COLORS.transparentPrimary,
                            height: 50,
                            width: "90%",
                            borderRadius: SIZES.radius,
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: SIZES.padding
                        }}
                        onPress={() => handleSubmit()}
                    />
                </View>

                {/* Forgot password */}

                <View
                    style={{
                        height: 20,
                        alignItems: 'flex-end',
                        marginTop: SIZES.base
                    }}
                >
                    <TextButton
                        label={"Forgot your password?"}
                        labelStyle={{
                            color: COLORS.secondary
                        }}
                    />

                </View>

                {/* footer */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >

                    <Footer />
                </View>

            </Animatable.View>
        )
    }

    // SIGnUP

    const SignUp = () => {

        // States

        const [firstname, setfirstname] = React.useState('')
        const [lastname, setlastname] = React.useState('')
        const [email, setemail] = React.useState('')
        const [password, setpassword] = useState('')

        // Error states

        const [firstnameError, setfirstnameError] = React.useState('')
        const [lastnameError, setlastnameError] = React.useState('')
        const [emailError, setemailError] = React.useState('')
        const [passwordError, setpasswordErro] = React.useState('')


        // input foucsed states

        const [firstnameFocused, setfirstnameFocused] = React.useState(false)
        const [lastnameFocused, setlastnameFocused] = React.useState(false)
        const [emailFocused, setemailFocused] = React.useState(false)
        const [passwordFocused, setpasswordFocused] = React.useState(false)


        // loading state
        const [loading, setloading] = React.useState(false)


        // helper function


        const isEnableSIGNUP = () => {
            return firstname !== "" && lastname !== "" && password !== "" && firstnameError === ""
                && lastnameError === "" && emailError === "" && passwordError === ""
        }


        // handle on Submit btn

        const handleSubmit = () => {

            setloading(true)

            setTimeout(() => {


                setloading(false)

                // clear data
                setfirstname('')
                setlastname('')
                setemail('')
                setpassword('')

                // show alert box
                Alert.alert("Dummy Msg", "Register Successfully", [
                    {
                        onPress: () => navigation.navigate(constants.StackScreens.public.verify_phoneNo)
                    }
                ])

            }, 3000);
        }


        return (
            <Animatable.View
                animation={"fadeInUp"}
                style={{
                    paddingVertical: SIZES.radius
                }}
            >

                {/* Forminput */}

                <View>
                    {/* First name */}

                    <FormInput
                        label={"Firstname"}
                        onFocus={(val) => setfirstnameFocused(val)}
                        value={firstname}
                        errorMsg={firstnameError}
                        onChange={(val) => {
                            validation.validateName(val, setfirstnameError)
                            setfirstname(val)
                        }}
                        inputContainerStyle={{
                            borderBottomColor: firstnameFocused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}

                    />

                    {/* last name */}

                    <FormInput
                        label={"Lastname"}
                        onFocus={(val) => setlastnameFocused(val)}
                        value={lastname}
                        errorMsg={lastnameError}
                        onChange={(val) => {
                            validation.validateName(val, setlastnameError)
                            setlastname(val)
                        }}
                        inputContainerStyle={{
                            borderBottomColor: lastnameFocused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}
                    />

                    {/* Email */}

                    <FormInput
                        label={"Email Address"}
                        onFocus={(val) => setemailFocused(val)}
                        value={email}
                        errorMsg={emailError}
                        onChange={(val) => {
                            validation.validateEmail(val, setemailError)
                            setemail(val)
                        }}
                        inputContainerStyle={{
                            borderBottomColor: emailFocused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}
                    />

                    {/* Password */}

                    <FormInput
                        label={"Password"}
                        onFocus={(val) => setpasswordFocused(val)}
                        value={password}
                        errorMsg={passwordError}
                        onChange={(val) => {
                            validation.validatePassword(val, setpasswordErro)
                            setpassword(val)
                        }}
                        inputContainerStyle={{
                            borderBottomColor: passwordFocused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}
                    />

                </View>

                {/* Sign UP btn */}
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >

                    <TextButton
                        loading={loading}
                        disabled={loading && isEnableSIGNUP() ? true : isEnableSIGNUP() && !loading ? false : true}
                        label={"SIGN UP"}
                        buttonContainerStyle={{
                            backgroundColor: isEnableSIGNUP() ? COLORS.secondary : COLORS.transparentPrimary,
                            height: 50,
                            width: "90%",
                            borderRadius: SIZES.radius,
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: SIZES.padding
                        }}
                        onPress={() => handleSubmit()}
                    />
                </View>

                {/* Footer */}
                <Footer />

            </Animatable.View>
        )
    }

    return (
        <AuthLayout
            HeaderSection={renderHeaderSection()}
            MainSection={selectedTab === "signin" ? <LOGIN /> : <SignUp />}
        />
    )
}

const styles = StyleSheet.create({
    tabText: {
        color: COLORS.white
    }
})
export default Autthentication