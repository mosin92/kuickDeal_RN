import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Animatable from 'react-native-animatable';

interface Props {
    containerStyle?: Object,
    HeaderSection: React.ReactNode,
    MainSection: React.ReactNode,
}

const AuthLayout: React.FC<Props> = ({ containerStyle, HeaderSection, MainSection }) => {

    // render logo

    const renderLogo = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.logo}
                    resizeMode='contain'
                    style={{
                        height: 110,
                        width: 112
                    }}
                />
            </View>
        )
    }

    // main contanier
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{
                height: SIZES.height,
                backgroundColor: COLORS.white,
                ...containerStyle
            }}
        >
            {/* logo */}

            {renderLogo()}

            {/* content */}

            <Animatable.View
                animation={'fadeInUp'}
                style={{
                    borderTopRightRadius: SIZES.padding * 2,
                    borderTopLeftRadius: SIZES.padding,
                    height: 70,
                    width: SIZES.width,
                    backgroundColor: COLORS.primary,
                    flex: 1,

                }}
            >
                <View
                    style={{
                        height: 70,
                    }}
                >
                    {HeaderSection}
                </View>

                {/* Inner container */}

                <View
                    style={{
                        backgroundColor: COLORS.white,
                        flex: 1,
                        borderTopRightRadius: SIZES.padding * 2,
                        borderTopLeftRadius: SIZES.padding,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    {MainSection}
                </View>


            </Animatable.View>
        </KeyboardAwareScrollView>
    )
}

export default AuthLayout