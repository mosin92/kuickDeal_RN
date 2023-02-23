import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useCallback, useEffect } from 'react';
import { COLORS, FONTS, images } from './constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStack, AuthStack, CustomDrawer } from './navigation';
import Toast from 'react-native-toast-message';
import { View } from 'react-native-animatable';
import { Image } from 'react-native';

export type RootStackParamsList = {
  AppStack: undefined,
  AuthStack: undefined,
}

export default function App() {

  const [fontLoaded, setFontloaded] = React.useState(false)

  const fontload = async () => {
    await Font.loadAsync({
      'SansationBold': require('./assets/fonts/Sansation_Bold.ttf'),
      'ManropeMedium': require('./assets/fonts/Manrope-Medium.ttf'),
      'ManropeRegular': require('./assets/fonts/Manrope-Regular.ttf'),
      'ManropeLight': require('./assets/fonts/Manrope-Light.ttf'),
    })

    setFontloaded(true)
  }

  useEffect(() => {
    fontload()
  }, [])

  const Stack = createStackNavigator<RootStackParamsList>()

  if (!fontLoaded) {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Image
          source={images.splash}
          style={{
            width: '100%',
            height: '100%'
          }}
        />

      </View>
    )
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} />

      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen name='AppStack' component={AppStack} />
        <Stack.Screen name='AuthStack' component={CustomDrawer} />

      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

