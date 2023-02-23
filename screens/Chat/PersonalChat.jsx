import { View, Text, Image, FlatList, TextInput } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { ChatBox, CustomDropdown, FormInput, Header, HorizontalPropertyCard, IconButton, ImagePickerModal, TextButton, VerticalPropertyCard } from '../../components'

const dummydata = [
    {
        id: 1,
        message: 'hi'
    },
    {
        id: 0.23,
        message: 'hello mohsin'
    },
    {
        id: 3,
        message: 'how are you'
    },
    {
        id: 4,
        message: 'what you r doing'
    },
    {
        id: 5,
        message: 'ok, see you!'
    },
    {
        id: 6,
        message: 'when will we meet you'
    },
    {
        id: 7,
        message: 'we can meet on this weekend'
    },
    {
        id: 8,
        message: 'thats great!'
    },
    {
        id: 9,
        message: 'ok, see you there, bye !'
    },
    {
        id: 10,
        message: 'Are you sure , you will available'
    },
    {
        id: 11,
        message: 'yes yes!'
    },
    {
        id: 12,
        message: 'Okay V.good!'
    },
    {
        id: 12,
        message: 'Okay V.good!'
    },
    {
        id: 13,
        message: 'Okay!'
    },
]

const PersonalChat = ({ navigation }) => {

    const [message, setmessage] = React.useState('')

    const [chat, setChat] = React.useState(dummydata)

    const flatlistRef = React.useRef()

   
    // HANDLER
    React.useEffect(() => {
        flatlistRef?.current.scrollToEnd({ animated: true })
    }, [])


    const addMessage = (msg) => {

        console.log(msg)
        setChat([
            ...chat,
            {
                id: Math.floor(Math.random() * 100),
                message: msg
            }
        ])
        setmessage('')
    }

    // UI RENDER
    const renderHeader = () => {
        return (
            <>
                <View
                    style={{
                        paddingHorizontal: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >

                    {/* profile */}

                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        {/* img */}

                        <Image
                            source={icons.chat_logo}
                            style={{
                                width: 45,
                                height: 45
                            }}
                        />

                        <Image
                            source={images.profile_pic}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 45,
                                height: 45
                            }}
                        />

                    </View>

                    <Text
                        style={{
                            color: COLORS.secondary,
                            ...FONTS.h3
                        }}
                    >
                        Mohsin Ali
                    </Text>

                </View>

                <IconButton
                    icon={icons.back}
                    containerStyle={{
                        paddingHorizontal: SIZES.padding,
                        paddingTop: SIZES.radius
                    }}
                    iconStyle={{
                        width: 18,
                        height: 18,
                        tintColor: COLORS.primary
                    }}
                    onPress={() => navigation.goBack()}
                />

            </>

        )
    }

    const renderChatContainer = () => {

        return (
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding,
                    // borderWidth: 2,
                    // borderColor: 'red',
                    paddingHorizontal: SIZES.padding
                }}
            >
                <FlatList
                    ref={flatlistRef}
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={() => flatlistRef?.current.scrollToEnd({ animated: true })}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: SIZES.padding,
                        // borderWidth: 2,
                        // borderColor: 'red'
                    }}
                    data={chat}
                    keyExtractor={(_, index) => `personal-chat-${index}`}
                    renderItem={({ item, index }) => {

                        if (index % 2 == 0) {
                            return (
                                <ChatBox
                                    message={item.message}
                                />
                            )
                        }
                        else {
                            return (
                                <ChatBox
                                    message={item.message}
                                    position='RIGHT'
                                />
                            )
                        }

                    }}
                />

            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    // flex:1,
                    marginVertical: SIZES.radius,
                    // borderWidth: 2,
                    // borderColor: 'red',
                    minHeight: 45,
                    maxHeight: 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: COLORS.lightSilver,
                        flex: 1,
                        borderRadius: SIZES.radius,
                        paddingLeft: SIZES.base,
                        alignItems: 'center'
                    }}
                >
                    <TextInput
                        placeholder='Write your message'
                        placeholderTextColor={COLORS.darkGray}
                        value={message}
                        style={{
                            flex: 1,
                            color: COLORS.darkGray,
                            minHeight: 45,
                            maxHeight: 100
                        }}
                        multiline
                        onChangeText={(val) => setmessage(val)}
                    />

                    <IconButton
                        containerStyle={{
                            marginLeft: SIZES.radius,
                            height: 48,
                            width: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.secondary,
                            borderRadius: SIZES.radius
                        }}
                        icon={icons.chat_search}
                        iconStyle={{
                            width: 15,
                            height: 15
                        }}
                        onPress={() => addMessage(message)}
                    />

                </View>


                {/* <FormInput
                    placholder={"write your message"}
                    onFocus={() => { }}
                    multiline
                    value={message}
                    containerStyle={{
                        // minHeight: 45,
                        // maxHeight: 260,
                        borderColor: COLORS.primary,
                        borderWidth: 2,
                        justifyContent: 'center',
                        paddingLeft: SIZES.base,
                        flex: 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightSilver
                    }}
                    inputContainerStyle={{
                        minHeight: 45,
                        maxHeight: 260,
                    }}
                    onChange={(val) => setmessage(val)}
                    appendComponent={
                        
                    }
                /> */}

                <IconButton
                    containerStyle={{
                        marginLeft: SIZES.radius,
                        height: 45,
                        width: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.primary,
                        borderRadius: SIZES.radius
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20
                    }}
                    icon={icons.camera}
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
            {renderHeader()}

            {/* chat Container */}

            {renderChatContainer()}
            {/* footer */}

            {renderFooter()}
        </View>
    )
}

export default PersonalChat