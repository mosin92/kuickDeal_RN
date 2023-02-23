import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'


interface Props {
    containerStyle?: Object,
    label?: string,
    placholder: string,
    prependComponent?: React.ReactNode,
    appendComponent?: React.ReactNode,
    onChange: (val: any) => void,
    secureTextEntry?: boolean,
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url' | undefined,
    autoComplete?: 'off' | undefined,
    autoCapitalize?: 'sentences' | 'words' | 'characters' | 'none' | undefined,
    errorMsg?: string,
    inputStyle?: Object,
    value: any,
    maxLength?: number | undefined,
    inputContainerStyle?: Object,
    onFocus?: (val: boolean) => void,
    multiline?: boolean
}

const FormInput: React.FC<Props> = ({
    containerStyle,
    label,
    placholder,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoComplete = "off",
    autoCapitalize = 'none',
    errorMsg = "",
    inputStyle,
    value,
    maxLength,
    inputContainerStyle,
    onFocus = () => { },
    multiline = false
}) => {
    return (
        <View style={{ ...containerStyle, marginVertical: 5 }}>

            {/* label & error msg */}
            {
                label &&
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >

                    <Text style={{
                        color: COLORS.secondary, ...FONTS.h4
                    }} >{label}</Text>

                    <Text style={{ color: 'red', ...FONTS.body4 }}>{errorMsg}</Text>
                </View>

            }


            {/* text input */}

            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.white,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...inputContainerStyle
                }}
            >
                {prependComponent}

                <TextInput
                    maxLength={maxLength}
                    value={value}
                    keyboardType={keyboardType}
                    style={{
                        flex: 1,
                        color: COLORS.gray30,
                        ...inputStyle
                    }}
                    multiline={multiline}
                    placeholder={placholder}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={COLORS.darkGray}
                    autoComplete={autoComplete}
                    autoCapitalize={autoCapitalize}
                    onFocus={() => onFocus(true)}
                    onBlur={() => onFocus(false)}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}

            </View>

        </View>
    )
}

export default FormInput