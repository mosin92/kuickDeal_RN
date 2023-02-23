import { View, Text, Alert } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { AuthLayout, FormInput, TextButton } from '../../components';
import { COLORS, FONTS, SIZES } from '../../constants';
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import OTPTextView from 'react-native-otp-textinput';

const Otp = ({ navigation }) => {

    const [otpval, setoptval] = React.useState('')
    const [loading, setloading] = React.useState(false)

    const otpRef = React.useRef()

    // HELPER FUNCTION

    const handleonChange = (val) => {

        if (val.length >= 4) {
            setoptval(val)
        }
        else {
            setoptval("")
        }

    }

    const handleSubmit = () => {
        setloading(true)

        setTimeout(() => {
            setloading(false)
            setoptval('')

            Alert.alert("", "OTP verify Successfully", [
                {
                    onPress: () => {
                        navigation.replace("AuthStack")
                        // otpRef.current.clear()
                    }
                }
            ])
        }, 3000)
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
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >

                {/* OTP Header section */}
                <View
                >
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h2
                        }}
                    >
                        Enter your OTP
                    </Text>

                    {/* subTitle */}

                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body1
                        }}
                    >
                        We have send you a 4 digit code.
                    </Text>
                </View>

                {/* OTP INput Field */}

                <View
                    style={{
                        marginTop: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.secondary,
                            ...FONTS.body1
                        }}
                    >
                        Enter OTP here
                    </Text>

                    {/* otp fields */}
                    <OTPTextView
                        ref={otpRef}
                        tintColor={COLORS.secondary}
                        textInputStyle={{
                            borderBottomWidth: 2
                        }}
                        handleTextChange={(val) => handleonChange(val)}
                    />

                </View>

                {/* Resend OTP */}

                <View
                    style={{
                        marginTop: SIZES.radius,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >


                    <Text
                        style={{
                            color: COLORS.secondary,
                            ...FONTS.body1
                        }}
                    >
                        Resend in 59 sec
                    </Text>


                    <Text
                        style={{
                            color: COLORS.transparentPrimary,
                            ...FONTS.body1
                        }}
                    >
                        Resend
                    </Text>


                </View>

                {/* Confirm btn*/}

                <View
                    style={{
                        justifyContent: "center",
                        alignItems: 'center'
                    }}
                >
                    <TextButton
                        loading={loading}
                        label={"CONFIRM"}
                        disabled={!loading && otpval === "" ? true : loading && otpval !== "" ? true : false}
                        buttonContainerStyle={{
                            backgroundColor: otpval === "" ? COLORS.darkGray : COLORS.secondary,
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

                {/* SigIn instead btn */}
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

            </View>
        )
    }


    return (
        <AuthLayout
            HeaderSection={renderHeader()}
            MainSection={renderContent()}
        />
    )
}

export default Otp