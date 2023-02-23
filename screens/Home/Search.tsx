import { View, Text, Image, FlatList, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { AmountInputLabel, AppModal, ChatBox, CustomDropdown, FormInput, Header, HorizontalPropertyCard, IconButton, ImagePickerModal, PopUpModal, TextButton, VerticalPropertyCard } from '../../components'


const Search = () => {

    // states

    const [searchdata, setSearchData] = React.useState('')

    // filter modal
    const [showFilterModal, setFilterModal] = React.useState(false)

    // propertyType
    const [propertyType, setpropertyType] = React.useState('')


    // show location modal
    const [showLocationPopup, setShowLocationPopup] = React.useState(false)

    // search locationinput

    const [searchLocation, setSearchLocation] = React.useState('')


    // list down selected location by user
    const [selectedLocations, setSelectedLocations] = React.useState<string[]>([''])

    // dummy data for search location

    const dummylocationData = [
        'Islamabad', '2nd Floor 53 Noor Chamber M.A. Jinnah Raod', '116, Murree Road', ' LA-2-A/1, F.B. Area',
        '10-12, Rimpa Plaza M.A.Jinnah Road', '2nd Sunset St., Phase-IIExt. D.H.A., Karachi',
        '27-D-1, Gulberg III', ' Sm Taufiq Road, B Area, Karachi', '10-Al-Falah Askaria Plaza Committee Chowk',
        'Furniture Market, Near Masjid Rasool Pura, Ferozpur Road', ' 21, Bahadur Y.J.SocietyBahadurabad',
        'Rawalpindi']

    // dummylocation list

    const [locationList, setlocationList] = React.useState<string[]>(dummylocationData)


    // no of beds selection

    const [noOfBeds, setNoOfBeds] = React.useState<string>('')

    // price range

    const [minPrice, setMinPrice] = React.useState<string>('')
    const [maxPrice, setMaxPrice] = React.useState<string>('')

    // show cancel icon 

    const [onFoused, setOnFoused] = React.useState<boolean>(false)

    // filter deals data

    const [filterDeals, setfilterDeals] = React.useState(constants.myAds)

    // *** HANDLERS  *** //

    console.log("NUMBER-FORMATER--------- ", (2000000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))

    // show Reset button

    const ShowResetBtn = () => {

        return propertyType !== "" || noOfBeds !== "" || selectedLocations.length > 0
    }

    // Filter location

    const FilterLocation = (txt: string) => {
        if (txt.length < 2) {
            setlocationList(dummylocationData)
            return
        }

        const filterdata = dummylocationData.filter(
            (item, i) => (item.toLocaleLowerCase().includes(txt.toLowerCase()))
        )
        setlocationList(filterdata)
    }


    // apply all filters


    const AllFilters = (txt: string) => {
        if (txt.length < 2) {
            setfilterDeals(constants.myAds)
            return
        }

        const filterdata = constants.myAds.filter(
            (item, i) => (item.propertyname.toLocaleLowerCase().includes(txt.toLowerCase()))
        )
        setfilterDeals(filterdata)
    }

    // UI RENDER
    const renderSearchInput = () => {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.radius,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >

                {/* search input */}
                <FormInput
                    placholder={"Type here..."}
                    value={searchdata}
                    containerStyle={{
                        flex: 1,
                        height: 55,
                        borderWidth: 1,
                        borderColor: COLORS.gray10,
                        borderRadius: SIZES.base,
                        paddingHorizontal: SIZES.radius,
                        justifyContent: 'center',
                    }}
                    onFocus={(val) => setOnFoused(val)}
                    prependComponent={
                        <Image
                            source={icons.search}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                                marginRight: SIZES.base
                            }}
                        />
                    }
                    appendComponent={
                        <>
                            {
                                onFoused &&
                                <IconButton
                                    icon={icons.cancel}
                                    containerStyle={{
                                        marginLeft: SIZES.base
                                    }}
                                    iconStyle={{
                                        width: 18,
                                        height: 18,
                                    }}
                                    onPress={() => {
                                        setSearchData('')
                                    }}
                                />
                            }
                        </>
                    }
                    onChange={(val) => {

                        setSearchData(val)
                        AllFilters(val)
                    }}
                />

                <IconButton
                    icon={icons.filter}
                    containerStyle={{
                        marginLeft: SIZES.base,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        borderColor: COLORS.gray10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20
                    }}
                    onPress={() => setFilterModal(true)}
                />

            </View>
        )
    }

    type SectionProps = {

        containerStyle?: object,
        title: string,
        children: React.ReactNode
    }

    const Section: React.FC<SectionProps> = ({ containerStyle, title, children }) => {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    ...containerStyle
                }}
            >
                {/* title */}

                <Text
                    style={{
                        paddingHorizontal: SIZES.padding,
                        color: COLORS.secondary,
                        ...FONTS.h3
                    }}
                >
                    {title}
                </Text>

                {children}

            </View>
        )
    }

    const renderPropertyType = () => {
        const bedrooms = ['All', 'Cottage', 'House', 'Appartment', 'Plot']
        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >
                {/* title */}
                <Text
                    style={{
                        paddingHorizontal: SIZES.padding,
                        color: COLORS.secondary,
                        ...FONTS.h3
                    }}
                >
                    Property Type
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={bedrooms}
                    keyExtractor={(_, index) => `property-type-${index}`}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setpropertyType(item)}
                            style={{
                                marginTop: SIZES.base,
                                height: 46,
                                minWidth: 100,
                                borderRadius: SIZES.radius,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: propertyType === item ? COLORS.primary : COLORS.lightSilver,
                                marginLeft: index === 0 ? SIZES.padding : SIZES.base,
                                marginRight: index === bedrooms.length - 1 ? SIZES.padding : 0
                            }}
                        >
                            <Text
                                style={{
                                    color: propertyType === item ? COLORS.white : COLORS.darkGray
                                }}
                            >
                                {item}
                            </Text>

                        </TouchableOpacity>
                    )}

                />
            </View>
        )
    }

    const renderSearchLocation = () => {
        return (
            <Section
                title={'Location'}
            >
                <View
                    style={{
                        marginHorizontal: SIZES.padding,
                        height: 45,
                        backgroundColor: COLORS.lightSilver,
                        marginTop: SIZES.base,
                        flexDirection: 'row',
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        paddingHorizontal: SIZES.radius
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setShowLocationPopup(true)}
                        style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGray
                            }}
                        >
                            Search Location
                        </Text>
                    </TouchableOpacity>

                    <Image
                        source={icons.search}
                        style={{
                            justifyContent: 'center'
                        }}

                    />

                </View>

            </Section>
        )
    }

    type SectionLocationProps = {
        containerStyle?: object,
        label: string,
        onPress: () => void,
        labelStyle?: object,
        iconStyle?: object,
        showIcon?: boolean
    }

    const SelectedLocations: React.FC<SectionLocationProps> = ({ containerStyle, label, onPress, labelStyle, iconStyle, showIcon = true }) => {

        return (
            <View
                style={{
                    height: 30,
                    backgroundColor: COLORS.lightSilver,
                    alignSelf: 'flex-start',
                    paddingVertical: 2,
                    paddingHorizontal: SIZES.base,
                    borderRadius: SIZES.radius,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...containerStyle
                }}
            >
                <Text
                    style={{
                        ...FONTS.body3,
                        ...labelStyle
                    }}
                >
                    {label}
                </Text>

                {/* cancel button */}
                {
                    showIcon &&
                    <IconButton
                        icon={icons.cancel}
                        iconStyle={{
                            tintColor: COLORS.darkGray,
                            width: 12,
                            height: 12,
                            borderWidth: 1,
                            marginLeft: 4,
                            ...iconStyle
                        }}
                        onPress={onPress}
                    />
                }


            </View>
        )
    }


    const renderLocationPopup = () => {

        return (
            <>
                <PopUpModal
                    showModal={showLocationPopup}
                    HeaderComponent={
                        <View
                            style={{
                                height: 50,
                                borderBottomColor: COLORS.gray20,
                                borderBottomWidth: 1,
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding,
                                flexDirection: 'row',
                                alignItems: 'center',
                                shadowColor: COLORS.gray10,
                            }}
                        >
                            {/* back */}

                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    alignItems: 'center'
                                }}
                            >
                                <IconButton
                                    onPress={() => setShowLocationPopup(false)}
                                    icon={icons.back}
                                    containerStyle={{
                                        justifyContent: 'center'
                                    }}
                                    iconStyle={{
                                        tintColor: COLORS.black,
                                        width: 16,
                                        height: 16
                                    }}
                                />

                                <Text
                                    style={{
                                        marginLeft: SIZES.base,
                                        ...FONTS.h3
                                    }}
                                >Select location</Text>
                            </View>

                            {/* done */}

                            <Text
                                style={{
                                    color: COLORS.black,
                                    ...FONTS.h4
                                }}
                            >
                                Done
                            </Text>

                        </View>
                    }

                    FooterComponent={
                        <View
                            style={{
                                height: 60,
                                borderTopColor: COLORS.gray10,
                                borderTopWidth: 1,
                                justifyContent: "space-between",
                                flexDirection: 'row',
                                paddingHorizontal: SIZES.padding
                                // alignItems: 'center'
                            }}
                        >

                            {/* Reset */}

                            <TextButton
                                label={"Reset"}
                                buttonContainerStyle={{
                                    flex: 1,
                                    justifyContent: 'center',

                                }}
                                labelStyle={{
                                    color: COLORS.black,
                                    ...FONTS.h3
                                }}
                                onPress={() => setSelectedLocations([])}
                            />

                            <TextButton
                                label={"Confirm"}

                                buttonContainerStyle={{
                                    borderRadius: SIZES.base,
                                    alignSelf: "center",
                                    paddingHorizontal: SIZES.padding,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 40,
                                    width: 110,
                                    backgroundColor: COLORS.secondary
                                }}
                                labelStyle={{
                                    color: COLORS.white,
                                    ...FONTS.h4
                                }}
                                onPress={() => setShowLocationPopup(false)}
                            />

                        </View>
                    }
                >
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <View
                            style={{
                                // height:60,
                                backgroundColor: COLORS.white
                            }}
                        >
                            <FormInput
                                placholder={"Search locations..."}
                                value={searchLocation}
                                containerStyle={{
                                    marginTop: SIZES.radius,
                                    height: 55,
                                    borderWidth: 1,
                                    borderColor: COLORS.gray10,
                                    borderRadius: SIZES.base,
                                    paddingHorizontal: SIZES.radius,
                                    justifyContent: 'center',
                                }}
                                onFocus={() => { }}
                                prependComponent={
                                    <Image
                                        source={icons.search}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: COLORS.gray30,
                                            marginRight: SIZES.base
                                        }}
                                    />
                                }
                                onChange={(val) => {
                                    setSearchLocation(val)
                                    FilterLocation(val)
                                }}
                            />

                            {/* show selected location */}

                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap'
                                }}
                            >
                                {
                                    selectedLocations.length > 0 && selectedLocations.map(
                                        (item, i) => (
                                            <SelectedLocations
                                                key={`selected-location-${i}`}
                                                label={item}
                                                containerStyle={{
                                                    marginRight: SIZES.base,
                                                    marginTop: SIZES.base
                                                }}
                                                onPress={() => {

                                                    const i = selectedLocations.findIndex(location => location === item)

                                                    const list = [...selectedLocations]
                                                    list.splice(i, 1)
                                                    setSelectedLocations(list)
                                                }}
                                            />
                                        )
                                    )
                                }
                                {/* <SelectedLocations /> */}
                            </View>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                            }}
                        >

                            {
                                locationList.map(
                                    (item, i) => (
                                        <TouchableOpacity
                                            key={`sfsdf-${i}`}
                                            onPress={() => {
                                                if (selectedLocations.length === 5) {
                                                    // Toast.show({
                                                    //     type: 'info',
                                                    //     text1: 'This is an info message'
                                                    //   });
                                                    constants.ShowToastMessage("You cann't select more than 5 locations", 'error',)
                                                    return
                                                }
                                                setSelectedLocations([
                                                    ...selectedLocations, item
                                                ])
                                            }}
                                            style={{
                                                height: 55,
                                                justifyContent: 'center',
                                                borderBottomColor: COLORS.gray10,
                                                borderBottomWidth: 1
                                            }}
                                        >
                                            <Text
                                            >

                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                )
                            }
                        </ScrollView>
                    </View>

                </PopUpModal>
            </>
        )
    }

    const renderUserSelectedLocationList = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingHorizontal: SIZES.padding
                }}
            >
                {
                    selectedLocations.length > 0 && selectedLocations.map(
                        (item, i) => (
                            <SelectedLocations
                                key={`selected-location-${i}`}
                                label={item}
                                containerStyle={{
                                    marginRight: SIZES.base,
                                    marginTop: SIZES.base
                                }}
                                onPress={() => {

                                    const i = selectedLocations.findIndex(location => location === item)

                                    const list = [...selectedLocations]
                                    list.splice(i, 1)
                                    setSelectedLocations(list)
                                }}
                            />
                        )
                    )
                }
            </View>
        )
    }

    const renderRoomQuantity = () => {

        const bedrooms = ['Any', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5 Bedrooms']
        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >
                {/* title */}
                <Text
                    style={{
                        paddingHorizontal: SIZES.padding,
                        color: COLORS.secondary,
                        ...FONTS.h3
                    }}
                >
                    Rooms
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={bedrooms}
                    keyExtractor={(_, index) => `bedrooms-${index}`}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setNoOfBeds(item)}
                            style={{
                                marginTop: SIZES.base,
                                height: 46,
                                minWidth: 100,
                                borderRadius: SIZES.radius,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: noOfBeds === item ? COLORS.primary : COLORS.lightSilver,
                                marginLeft: index === 0 ? SIZES.padding : SIZES.base,
                                marginRight: index === bedrooms.length - 1 ? SIZES.padding : 0
                            }}
                        >
                            <Text
                                style={{
                                    color: noOfBeds === item ? COLORS.white : COLORS.darkGray
                                }}
                            >
                                {item}
                            </Text>

                        </TouchableOpacity>
                    )}

                />
            </View>
        )
    }

    const renderPriceRange = () => {

        return (
            <View
                style={{
                    marginTop: SIZES.radius
                }}
            >
                {/* title */}
                <Text
                    style={{
                        paddingHorizontal: SIZES.padding,
                        color: COLORS.secondary,
                        ...FONTS.h3
                    }}
                >
                    Price Range
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.padding,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >



                    {/* Min price */}

                    <View
                        style={{
                            width: SIZES.width * 0.35
                        }}
                    >
                        <FormInput
                            placholder={"min"}
                            maxLength={9}
                            value={minPrice}
                            onFocus={() => { }}
                            keyboardType='numeric'
                            containerStyle={{
                                backgroundColor: COLORS.lightSilver,
                                borderRadius: SIZES.radius,
                                paddingHorizontal: SIZES.base,
                            }}
                            inputContainerStyle={{
                                backgroundColor: COLORS.lightSilver,
                            }}

                            onChange={(val) => {
                                const data = constants.RemoveCurrencyFormater(val)
                                constants.CurrencyFormater(data, setMinPrice)
                            }}
                        />

                    </View>
                    {/* max price */}

                    <View
                        style={{
                            width: SIZES.width * 0.35
                        }}
                    >
                        <FormInput
                            placholder={"max"}
                            maxLength={9}
                            onFocus={() => { }}
                            value={maxPrice}
                            keyboardType='numeric'
                            onChange={(val) => {
                                const data = constants.RemoveCurrencyFormater(val)
                                constants.CurrencyFormater(data, setMaxPrice)
                            }}
                            containerStyle={{
                                // flex: 1,
                                backgroundColor: COLORS.lightSilver,
                                borderRadius: SIZES.radius,
                                paddingHorizontal: SIZES.base
                            }}
                            inputContainerStyle={{
                                backgroundColor: COLORS.lightSilver,
                            }}
                        />

                    </View>

                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    {/* min label */}

                    <View
                        style={{
                            width: SIZES.width * 0.35,
                        }}
                    >
                        {
                            minPrice !== "" &&
                            <AmountInputLabel
                                label={`Pkr ${constants.NumberinWords(constants.RemoveCurrencyFormater(minPrice))}`}
                            />
                        }


                    </View>

                    {/* max label */}

                    <View
                        style={{
                            width: SIZES.width * 0.35,
                        }}
                    >
                        {
                            maxPrice !== "" && constants.RemoveCurrencyFormater(maxPrice) <= constants.RemoveCurrencyFormater(minPrice) &&
                            <AmountInputLabel
                                label={`max should be greater then min`}
                                labelStyle={{
                                    color: "red"
                                }}
                            />
                        }

                        {
                            maxPrice !== "" && constants.RemoveCurrencyFormater(maxPrice) > constants.RemoveCurrencyFormater(minPrice) &&
                            <AmountInputLabel
                                label={`Pkr ${constants.NumberinWords(constants.RemoveCurrencyFormater(maxPrice))}`}
                            />
                        }
                    </View>

                </View>

            </View>


        )
    }

    const renderFilterModal = () => {
        return (
            <View
            // style
            >
                {
                    showFilterModal &&
                    <AppModal
                        isVisible={showFilterModal}
                        minusHeigth={700}
                        containerStyle={{
                            paddingHorizontal: 0,
                        }}
                        onClose={() => setFilterModal(false)}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                flexGrow: 1,
                                // paddingBottom: SIZES.padding
                            }}
                        >
                            {/* Title */}

                            <View
                                style={{
                                    marginTop: SIZES.radius,
                                    alignItems: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.secondary,
                                        ...FONTS.h2
                                    }}
                                >
                                    Filters
                                </Text>
                            </View>


                            {/* Property Type */}
                            {renderPropertyType()}


                            {/* Search Location */}

                            {renderSearchLocation()}

                            {/* render Location Modal PopUP */}

                            {renderLocationPopup()}

                            {/* show selected location */}
                            {renderUserSelectedLocationList()}

                            {/* No of rooms */}
                            {renderRoomQuantity()}

                            {/* Price Range */}

                            {renderPriceRange()}

                            {/* close modal button */}
                            <IconButton
                                icon={icons.cancel}
                                iconStyle={{
                                    width: 20,
                                    height: 20
                                }}
                                containerStyle={{
                                    position: 'absolute',
                                    top: 7,
                                    right: 20
                                }}
                                onPress={() => setFilterModal(false)}
                            />

                        </ScrollView>

                        <TextButton
                            label={"Apply Filters"}
                            buttonContainerStyle={{
                                height: 45,
                                backgroundColor: COLORS.secondary,
                                borderRadius: SIZES.radius,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '60%',
                                alignSelf: 'center',
                                marginBottom: SIZES.radius
                            }}
                            onPress={() => setFilterModal(false)}
                        />

                    </AppModal>
                }

            </View>
        )
    }

    const renderSelectedFilters = () => {

        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,
                    flexWrap: 'wrap'
                }}
            >

                {/* Property Type */}
                {
                    propertyType !== "" &&
                    <SelectedLocations
                        label={propertyType}
                        containerStyle={{
                            marginTop: 4,
                            height: 45,
                            width: 90,
                            backgroundColor: COLORS.primary,
                            marginRight: SIZES.base
                        }}
                        labelStyle={{
                            color: COLORS.white
                        }}
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        onPress={() => setpropertyType('')}
                    />
                }


                {/* locations */}

                {
                    selectedLocations.length > 0 && selectedLocations.map(
                        (item, index) => (
                            <SelectedLocations
                                label={item}
                                containerStyle={{
                                    marginTop: 4,
                                    height: 45,
                                    // minwidth: 90,
                                    backgroundColor: COLORS.primary,
                                    marginRight: SIZES.base
                                }}
                                labelStyle={{
                                    color: COLORS.white
                                }}
                                iconStyle={{
                                    tintColor: COLORS.white
                                }}

                                onPress={() => {

                                    const i = selectedLocations.findIndex(location => location === item)

                                    const list = [...selectedLocations]
                                    list.splice(i, 1)
                                    setSelectedLocations(list)
                                }}
                            />
                        )
                    )
                }


                {/* No of Rooms */}


                {
                    noOfBeds !== "" &&
                    <SelectedLocations
                        label={noOfBeds}
                        containerStyle={{
                            marginTop: 4,
                            height: 45,
                            width: 90,
                            backgroundColor: COLORS.primary,
                            marginRight: SIZES.base
                        }}
                        labelStyle={{
                            color: COLORS.white
                        }}
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        onPress={() => setNoOfBeds('')}
                    />
                }


                {/* Reset btn */}

                {
                    ShowResetBtn() &&
                    <TouchableOpacity
                        style={{
                            marginTop: 4,
                            height: 45,
                            width: 90,
                            backgroundColor: COLORS.white,
                            borderWidth: 1,
                            marginRight: SIZES.base,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: SIZES.radius
                        }}
                        onPress={() => {
                            setpropertyType('')
                            setSelectedLocations([])
                            setNoOfBeds('')
                        }}
                    >
                        <Text
                            style={{ color: COLORS.black, ...FONTS.body3 }}
                        >
                            Reset
                        </Text>
                    </TouchableOpacity>
                }

            </View>
        )
    }

    const renderFilterdDeals = () => {

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    flexGrow: 1,
                    marginTop: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
            >
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={filterDeals}
                    keyExtractor={(_, i) => `myAds-${i}`}
                    renderItem={({ item, index }) => (
                        <>

                            <HorizontalPropertyCard
                                onPress={() => { }}
                                disabled={true}
                                containerStyle={{
                                    marginTop: index === 0 ? SIZES.padding : SIZES.radius,
                                    height: 120
                                }}
                                imgStyle={{
                                    width: 100
                                }}
                                overlayStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                data={item}

                                TopRigthComponent={
                                    <>
                                        <IconButton
                                            icon={icons.favorite}
                                            iconStyle={{
                                                width: 12,
                                                height: 12,
                                                tintColor: COLORS.darkGray
                                            }}
                                            containerStyle={{
                                                borderWidth: 1,
                                                borderColor: COLORS.gray10,
                                                height: 28,
                                                width: 28,
                                                borderRadius: SIZES.padding,
                                                backgroundColor: COLORS.white,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                shadowColor: COLORS.darkGray,
                                                shadowOpacity: 1,
                                                shadowOffset: {
                                                    height: 250,
                                                    width: 150
                                                },
                                                elevation: 5,
                                                shadowRadius: 10
                                            }}
                                        // onPress={() => setModal(true)}
                                        />
                                    </>
                                }
                            />
                        </>
                    )}
                />


            </ScrollView>
        )
    }

    return (
        <View
            style={{
                ...constants.globalstyles.maincontainer,
                paddingTop: SIZES.padding * 1.8,
            }}
        >
            {/* Search input & filter */}
            {renderSearchInput()}

            {/* filter Modal */}
            {renderFilterModal()}

            {/* Selected Filters  */}
            {renderSelectedFilters()}
            {/* Filter deal list */}

            {renderFilterdDeals()}


        </View>
    )
}

export default Search