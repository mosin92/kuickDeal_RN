import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Modal, ImageSourcePropType } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants'
import { CustomDropdown, FormInput, Header, IconButton, ImagePickerModal, TextButton } from '../../components'
import * as ImagePicker from 'expo-image-picker';
import { AuthStackNavigationProps } from '../../navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';

const Sell = () => {
    const navigation = useNavigation<AuthStackNavigationProps>()

    type ImageMedia = {
        img: string,
        assetId: string
    }

    const [showImagePicker, setShowImagePicker] = React.useState(false)
    const [imageMedia, setImageMedia] = React.useState<Array<ImageMedia>>([])

    // features states

    const [noOfBeds, setnoOfBeds] = React.useState(1)
    const [noOfBathrooms, setnoOfBathrooms] = React.useState(1)
    const [noOfBalcony, setnoOfBalcony] = React.useState(1)

    // HANDLERS

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
            selectionLimit: 3,
        });

        console.log("Image selection ----", result);

        // check assets is not null
        const data: Array<any> = [...imageMedia]
        if (result.assets && result.assets.length > 0) {

            result.assets.map(
                (item, i) => {
                    data.push({
                        id: item.assetId,
                        img: item.uri
                    })
                }
            )
            setImageMedia(data)
        }

    };


    const FormateNumber = (val: number) => {
        if (val.toString().length <= 1)
            return `${0}${val}`

        return val
    }

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
                    Sell your property
                </Text>
            </View>
        )
    }

    const renderTypeSell = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: SIZES.padding,
                    alignItems: 'center'
                }}
            >

                <Image
                    source={icons.addsell}
                    style={{
                        height: 18,
                        width: 18
                    }}
                />

                <Text
                    style={{
                        color: COLORS.primary,
                        marginLeft: SIZES.base
                    }}
                >
                    Create a new Ad
                </Text>
            </View>
        )
    }

    const renderPropertyDetailsInput = () => {

        // states

        const [propertyType, setPropertyType] = React.useState(constants.propertyType[0])
        const [propertyname, setpropertyname] = React.useState('')


        const countries = ["Egypt", "Canada", "Australia", "Ireland"]

        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >

                {/* property name input */}

                <View>

                    {/* title */}

                    <Text style={styles.title}>
                        Give your property a name
                    </Text>

                    <FormInput
                        value={propertyname}
                        onChange={(val) => setpropertyname(val)}
                        placholder={"The lodge house"}
                        onFocus={() => { }}
                        containerStyle={{
                            paddingHorizontal: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightSilver,
                            height: 50
                        }}
                    />
                </View>


                {/* Property Type */}

                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >

                    {/* title */}
                    <Text style={styles.title}>
                        Property Type
                    </Text>

                    {/* list property types */}

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        {
                            constants.propertyType.map(
                                (item, i) => (
                                    <TouchableOpacity
                                        key={`property-type-${i}`}
                                        style={{
                                            marginTop: SIZES.radius,
                                            height: 46,
                                            minWidth: 90,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: item === propertyType ? COLORS.primary : COLORS.lightSilver,
                                            borderRadius: SIZES.radius,
                                            marginRight: SIZES.base
                                        }}
                                        onPress={() => setPropertyType(item)}
                                    >
                                        <Text
                                            style={{
                                                color: item === propertyType ? COLORS.white : COLORS.darkGray
                                            }}
                                        >
                                            {item}
                                        </Text>

                                    </TouchableOpacity>
                                )
                            )
                        }

                    </View>

                    {/* Property location */}

                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text style={styles.title}>
                            Property Location
                        </Text>
                        <CustomDropdown
                            placeholder='Add location'
                            data={[]}
                            onSelectItem={(val) => {

                            }}
                        />

                    </View>


                </View>

            </View>
        )
    }

    type ImageContainerProps = {
        containerStyle?: object,
        onPress: () => void,
        RenderChildren: React.ReactNode
    }
    const ImageContainer: React.FC<ImageContainerProps> = ({ containerStyle, onPress, RenderChildren }) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    height: 145,
                    width: 145,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightSilver,
                    ...containerStyle
                }}
            >
                {RenderChildren}

            </TouchableOpacity>
        )
    }

    const renderAddPhotos = () => {


        // handler
        const removePhoto = (id: string | number) => {

            const data = [...imageMedia]
            const index = imageMedia.findIndex(item => item.assetId === id)
            data.splice(index, 1)
            setImageMedia(data)
        }

        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                {/* title */}

                <Text style={styles.title}>
                    Add photos to your listing
                </Text>



                {/* <ImagePickerModal
                    onSelectImg={(val) => console.log("img select", val
                    )}
                /> */}

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >

                    {/* Image media list */}
                    {/* image picker */}

                    {
                        imageMedia.length > 0 && imageMedia.map(
                            (item) => {
                                console.log("imgs------", item)
                                return (
                                    <ImageContainer
                                        onPress={() => { }}
                                        containerStyle={{
                                            marginVertical: SIZES.base
                                        }}
                                        RenderChildren={
                                            <>
                                                <Image
                                                    source={{ uri: item.img }}
                                                    resizeMode='cover'
                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: COLORS.gray10,
                                                        borderRadius: SIZES.radius,
                                                        height: "100%",
                                                        width: '100%',
                                                        position: 'absolute'
                                                    }}
                                                />

                                                {/* cancel btn */}

                                                <IconButton
                                                    icon={icons.cross_deals}
                                                    iconStyle={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        width: 25,
                                                        height: 25
                                                    }}
                                                    onPress={() => removePhoto(item.assetId)}
                                                />
                                            </>
                                        }
                                    />
                                )
                            }
                        )
                    }

                    {/* Add photo btn */}
                    <ImageContainer
                        onPress={() => pickImage()}
                        RenderChildren={
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    source={icons.addphoto}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                />

                            </View>
                        }
                    />
                </View>



            </View>
        )
    }


    // Add to card

    type FeatureCardProps = {
        containerStyle?: object,
        featureName: string,
        addPress: () => void,
        minusPress: () => void,
        value: number
    }

    const FeaturesCard: React.FC<FeatureCardProps> = ({ containerStyle, featureName, addPress, minusPress, value }) => {

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.lightSilver,
                    height: 50,
                    borderRadius: SIZES.radius,
                    padding: SIZES.base,
                    alignItems: 'center',
                    ...containerStyle
                }}
            >
                <Text
                    style={{
                        color: COLORS.darkGray,
                    }}
                >
                    {featureName}
                </Text>

                {/* quantity */}

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >

                    {/* minus button */}

                    <IconButton
                        icon={icons.minusSell}
                        iconStyle={{
                            height: 20,
                            width: 20
                        }}
                        onPress={minusPress}
                    />

                    {/*Quantit value */}

                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body2,
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        {FormateNumber(value)}
                    </Text>

                    {/* add btn */}
                    <IconButton
                        icon={icons.addsell}
                        iconStyle={{
                            height: 20,
                            width: 20
                        }}
                        onPress={addPress}
                    />

                </View>

            </View>
        )
    }

    const renderPropertyFeatures = () => {

        const [sellPrice, setSellPrice] = React.useState('')

        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >
                {/* title */}
                <Text style={{
                    ...styles.title,
                    color: COLORS.primary
                }}>
                    Almost finish, complete the listing
                </Text>

                {/* selling price */}

                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{
                        ...styles.title,
                    }}>
                        Selling Price
                    </Text>

                    {/* sell input */}

                    <FormInput
                        value={sellPrice}
                        onChange={(val) => setSellPrice(val)}
                        placholder={"Enter the sell price"}
                        keyboardType='numeric'
                        onFocus={() => { }}
                        containerStyle={{
                            paddingHorizontal: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightSilver,
                            height: 50
                        }}
                    />

                    {/* Property Features card */}
                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >

                        <FeaturesCard
                            featureName={"Bedrooms"}
                            value={noOfBeds}
                            addPress={() => setnoOfBeds(noOfBeds + 1)}
                            minusPress={() => {
                                if (noOfBeds !== 0) {
                                    setnoOfBeds(noOfBeds - 1)
                                }
                            }}
                        />

                        {/* no of bathrooms */}

                        <FeaturesCard
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            featureName={"Bathrooms"}
                            value={noOfBathrooms}
                            addPress={() => setnoOfBathrooms(noOfBathrooms + 1)}
                            minusPress={() => {
                                if (noOfBathrooms !== 0) {
                                    setnoOfBathrooms(noOfBathrooms - 1)
                                }
                            }}
                        />
                        <FeaturesCard
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            featureName={"Balcony"}
                            value={noOfBalcony}
                            addPress={() => setnoOfBalcony(noOfBalcony + 1)}
                            minusPress={() => {
                                if (noOfBalcony !== 0) {
                                    setnoOfBalcony(noOfBalcony - 1)
                                }
                            }}
                        />
                    </View>


                </View>

            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TextButton
                    label={"Publish"}
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
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius * 1.4
                }}
            >

                {/* type of sell */}
                {renderTypeSell()}

                {/* property details */}

                {renderPropertyDetailsInput()}


                {/* Add photos  */}

                {renderAddPhotos()}

                {/* House details */}

                {renderPropertyFeatures()}

                {/* Footer */}

                {renderFooter()}

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.secondary,
        ...FONTS.body1
    }
})
export default Sell