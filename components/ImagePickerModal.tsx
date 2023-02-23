import { View, Text, Button } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';

interface Props {
    onSelectImg: (val: any) => void
}
const ImagePickerModal: React.FC<Props> = ({ onSelectImg }) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        onSelectImg(result)
    };

    return (
        <View>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
        </View>
    )
}

export default ImagePickerModal