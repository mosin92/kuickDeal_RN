import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#6CADD7",     // light-blue
    // primary2: "#FBB344",    // Orange
    // primary3: "#33354E",    // Dark Blue
    secondary: "#054E7B",   // dark-blue
    lightGreen: '#81C9AD',
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",
    lightGray: '#FAF9FE',

    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",
    lightSilver:'#F2F2F2',
    white: '#FFFFFF',
    black: "#2C2C2C",

    lightYellow: '#FCF3D7',
    darkYellow: '#F4E9C8',

    lightRed: '#FFE0DE',
    darkRed: '#F9D2D1',

    // lightBlue: '#D7DFFF',
    darkBlue: '#D3D8FC',
    darkGray: '#B1B1B1',
    ligthGray2: '#D9DFEB',
    lightBlue: '#E9F6FF',
    lightred: 'rgba(242, 114, 114, 1)',


    transparent: 'transparent',
    transparentPrimary: 'rgba(5, 78, 123,0.5)',
    transparentSecondary: 'rgba(108, 173, 215, 1)',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 16,
    body2: 14,
    body3: 12,
    body4: 12,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "SansationBold", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "SansationBold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "SansationBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "SansationBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "SansationBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "SansationBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "ManropeMedium", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "ManropeRegular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "ManropeLight", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "ManropeLight", fontSize: SIZES.body4, lineHeight: 22 },
};

// export const darkTheme = {
//     name: "dark",
//     backgroundColor1: COLORS.gray85,
//     backgroundColor2: COLORS.gray90,
//     backgroundColor3: COLORS.gray90,
//     backgroundColor4: COLORS.primary,
//     backgroundColor5: COLORS.gray85,
//     backgroundColor6: COLORS.black,
//     backgroundColor7: COLORS.gray90,
//     backgroundColor8: COLORS.gray70,
//     backgroundColor9: COLORS.black,
//     backgroundColor10: COLORS.gray70,
//     backgroundColor11: COLORS.gray70,
//     backgroundColor12: COLORS.gray85,
//     backgroundColor13: COLORS.gray70,
//     backgroundColor14: COLORS.gray70,
//     backgroundColor15: COLORS.gray30,
//     backgroundColor16: COLORS.white,
//     backgroundColor17: COLORS.gray70,
//     lineDivider: COLORS.gray70,
//     borderColor1: COLORS.gray70,
//     borderColor2: COLORS.gray70,
//     textColor: COLORS.white,
//     textColor2: COLORS.white,
//     textColor3: COLORS.gray40,
//     textColor4: COLORS.white,
//     textColor5: COLORS.gray30,
//     textColor6: COLORS.gray30,
//     textColor7: COLORS.gray40,
//     tintColor: COLORS.white,
//     dotColor1: COLORS.white,
//     dotColor2: COLORS.primary,
// }

// export const lightTheme = {
//     name: "light",
//     backgroundColor1: COLORS.white,
//     backgroundColor2: COLORS.primary3,
//     backgroundColor3: COLORS.additionalColor11,
//     backgroundColor4: COLORS.white,
//     backgroundColor5: COLORS.additionalColor13,
//     backgroundColor6: COLORS.primary3,
//     backgroundColor7: COLORS.white,
//     backgroundColor8: COLORS.gray10,
//     backgroundColor9: COLORS.primary3,
//     backgroundColor10: COLORS.additionalColor13,
//     backgroundColor11: COLORS.additionalColor11,
//     backgroundColor12: COLORS.lightBlue,
//     backgroundColor13: COLORS.primary3,
//     backgroundColor14: COLORS.black,
//     backgroundColor15: COLORS.white,
//     backgroundColor16: COLORS.lightGray,
//     backgroundColor17: COLORS.additionalColor9,
//     lineDivider: COLORS.gray20,
//     borderColor1: COLORS.white,
//     borderColor2: COLORS.black,
//     textColor: COLORS.black,
//     textColor2: COLORS.primary,
//     textColor3: COLORS.gray80,
//     textColor4: COLORS.white,
//     textColor5: COLORS.black,
//     textColor6: COLORS.gray,
//     textColor7: COLORS.black,
//     tintColor: COLORS.black,
//     dotColor1: COLORS.gray20,
//     dotColor2: COLORS.primary3,
// }

// export const selectedTheme = lightTheme

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
