import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { COLORS, FONTS, icons, SIZES } from '../constants'

interface Props {
    fullWidth?: boolean,
    data: Array<{ name: string }>,
    placeholder: string,
    dropdownButtonStyle?: Object,
    onSelectItem: (val: any) => void,
    containerStyle?: Object,
    defaultValueIndex?: any,
    icon?: string | number,
    onClickICon?: () => void,
    displayData?: null | any,
    disabled?: boolean,
    defaultValue?: string | number,
    label?: string

}

const CustomDropdown: React.FC<Props> = ({
    fullWidth = true,
    data = [],
    label = "",
    placeholder = "Select Options",
    dropdownButtonStyle,
    onSelectItem,
    containerStyle,
    defaultValueIndex = undefined,
    icon,
    onClickICon,
    displayData = null,
    disabled = false,
    defaultValue
}) => {
    console.log("dropdown", defaultValue)
    let newData: string[] = data && data.map(item => {
        return item.name
    })

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    return (
        <View
            style={{
                flex: fullWidth ? 0 : 1,
                marginTop: 10,
                backgroundColor: COLORS.lightSilver,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
        >
            {/* label */}

            {
                label != "" &&
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h3,
                        marginVertical: SIZES.base
                    }}
                >
                    {label}
                </Text>
            }

            <SelectDropdown
                defaultValueByIndex={newData.length > 0 && defaultValueIndex}
                dropdownOverlayColor='transparent'
                buttonStyle={{
                    width: '100%',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightSilver,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...dropdownButtonStyle,
                }}

                buttonTextStyle={
                    {
                        ...FONTS.body2,
                        color: COLORS.darkGray,
                        textAlign: 'left',
                    }
                }
                defaultButtonText={placeholder}
                data={countries && countries}
                disabled={disabled}
                onSelect={(selectedItem, index) => {
                    onSelectItem(data[index])
                }}

                buttonTextAfterSelection={(selectedItem, index) => {

                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    if (displayData !== null && displayData.length === 0) {
                        return ''
                    }
                    else {
                        return selectedItem
                    }

                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                renderDropdownIcon={() => {
                    return (
                        <Pressable onPress={onClickICon}>
                            <Image
                                style={{
                                    width: 16,
                                    height: 16
                                }}
                                resizeMode='contain'
                                source={icon ? icon : icons.dropdown}
                            />
                        </Pressable>
                    )
                }}
            />

        </View>
    )
}

export default CustomDropdown