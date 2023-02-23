import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { CustomDropdown, FormInput, Header, HorizontalPropertyCard, IconButton, ImagePickerModal, TextButton, UserChatList, VerticalPropertyCard } from '../../components'


const Chat = ({ navigation }) => {

    const chatlist = [
        {
            title: 'Gladys Wiza',
            desc: 'Lorem ipsum dolor sit amet,adipiscing elit. Etiam eu',
            time: '16 Min Ago'
        },
        {
            title: 'Rita Franey',
            desc: 'Lorem ipsum dolor sit amet,adipiscing elit. Etiam eu',
            time: '2 days Ago'
        },
        {
            title: 'Gladys Wiza',
            desc: 'Lorem ipsum dolor sit amet,adipiscing elit. Etiam eu',
            time: '16 Min Ago'
        },
        {
            title: 'Agnes Conroy',
            desc: 'Lorem ipsum dolor sit amet,adipiscing elit. Etiam eu',
            time: '1 week Ago'
        },
        {
            title: 'Gladys Wiza',
            desc: 'Lorem ipsum dolor sit amet,adipiscing elit. Etiam eu',
            time: '16 Min Ago'
        },
    ]
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
                    Chats
                </Text>
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
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.padding
                }}
            >

                {
                    chatlist.map(
                        (item, i) => (
                            <UserChatList
                                onPress={() => navigation.navigate(constants.StackScreens.auth.personal_chat)}
                                key={`chat-list-${i}`}
                                data={item}
                                containerStyle={{
                                    marginTop: i === 0 ? 0 : SIZES.radius
                                }}
                                showbar={i === 0 ? true : false}
                            />
                        )
                    )
                }
            </View>
        </View>
    )
}

export default Chat