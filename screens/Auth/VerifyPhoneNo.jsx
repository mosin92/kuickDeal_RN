import { View, Text, Alert } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { AuthLayout, FormInput, TextButton } from '../../components';
import { COLORS, constants, FONTS, SIZES, validation } from '../../constants';

const VerifyPhoneNo = ({ navigation }) => {

    // states

    const [phoneno, setphoneno] = React.useState('')

    // states error

    const [phonenoError, setphonenoError] = React.useState('')

    // states Focused

    const [phonenoFocused, setphonenoFocused] = React.useState(false)


    // loading state

    const [loading, setloading] = React.useState(false)


    // HELPER FUNCTION

    const isEnableButton = () => {
        return phoneno !== "" && phonenoError === ""
    }


    const handleSubmmit = () => {
        setloading(true)

        setTimeout(() => {
            setloading(false)
            Alert.alert("Dummy Msg", "Otp send successfully", [
                {
                    onPress: () => navigation.navigate(constants.StackScreens.public.verify_otp)
                }
            ])
        }, 3000);
    }

    // UI RENDER

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: 'center'
                }}
            >

                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h5
                    }}
                >
                    Verify your Identity
                </Text>
            </View>
        )
    }



    const renderContent = () => {

        return (
            <Animatable.View
                animation={"fadeInUp"}
                style={{
                    marginTop: SIZES.padding
                }}
            >

                {/* Verify Header section */}
                <View
                >
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h2
                        }}
                    >
                        Enter your Phone Number
                    </Text>

                    {/* subTitle */}

                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body1
                        }}
                    >
                        We will send a 4 digit code.
                    </Text>

                </View>

                {/* FormInput */}

                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >

                    <FormInput
                        label={"Enter your Email or Mobile No."}
                        keyboardType='numeric'
                        value={phoneno}
                        errorMsg={phonenoError}
                        onFocus={(val) => setphonenoFocused(val)}
                        inputContainerStyle={{
                            borderBottomColor: phonenoFocused ? COLORS.secondary : COLORS.ligthGray2,
                            borderBottomWidth: 2,
                        }}
                        onChange={(val) => {
                            validation.validateMobileNo(val, setphonenoError)
                            setphoneno(val)
                        }}
                    />
                </View>

                {/* Send OTP Btn */}

                <View
                    style={{
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >

                    <TextButton
                        loading={loading}
                        disabled={loading && isEnableButton() ? true : isEnableButton() && !loading ? false : true}
                        label={"SEND OTP"}
                        buttonContainerStyle={{
                            backgroundColor: COLORS.secondary,
                            height: 50,
                            width: "90%",
                            borderRadius: SIZES.radius,
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: SIZES.padding
                        }}
                        onPress={() => handleSubmmit()}
                    />
                </View>


                {/* SignIN text */}

                <View
                    style={{
                        height: 20,
                        alignItems: 'flex-end',
                        marginTop: SIZES.base
                    }}
                >
                    <TextButton
                        label={"Sign in Instead?"}
                        labelStyle={{
                            color: COLORS.secondary
                        }}
                    />

                </View>

            </Animatable.View>
        )
    }


    return (
        <AuthLayout
            HeaderSection={renderHeader()}
            MainSection={renderContent()}
        />
    )
}

export default VerifyPhoneNo