// DIP Joint data
const DIPData = [
    { flexion: '<-30', dtFlexion: 45, extension: '<-70', dtExtension: 45, ankylosis: '<-30', dtAnkylosis: 45 },
    { flexion: -30, dtFlexion: 45, extension: -70, dtExtension: 45, ankylosis: -30, dtAnkylosis: 45 },
    { flexion: -29, dtFlexion: 45, extension: -69, dtExtension: 44, ankylosis: -29, dtAnkylosis: 45 },
    { flexion: -28, dtFlexion: 44, extension: -68, dtExtension: 43, ankylosis: -28, dtAnkylosis: 44 },
    { flexion: -27, dtFlexion: 44, extension: -67, dtExtension: 43, ankylosis: -27, dtAnkylosis: 44 },
    { flexion: -26, dtFlexion: 44, extension: -66, dtExtension: 42, ankylosis: -26, dtAnkylosis: 44 },
    { flexion: -25, dtFlexion: 44, extension: -65, dtExtension: 41, ankylosis: -25, dtAnkylosis: 44 },
    { flexion: -24, dtFlexion: 43, extension: -64, dtExtension: 40, ankylosis: -24, dtAnkylosis: 43 },
    { flexion: -23, dtFlexion: 43, extension: -63, dtExtension: 39, ankylosis: -23, dtAnkylosis: 43 },
    { flexion: -22, dtFlexion: 43, extension: -62, dtExtension: 39, ankylosis: -22, dtAnkylosis: 43 },
    { flexion: -21, dtFlexion: 42, extension: -61, dtExtension: 38, ankylosis: -21, dtAnkylosis: 42 },
    { flexion: -20, dtFlexion: 42, extension: -60, dtExtension: 37, ankylosis: -20, dtAnkylosis: 42 },
    { flexion: -19, dtFlexion: 42, extension: -59, dtExtension: 36, ankylosis: -19, dtAnkylosis: 42 },
    { flexion: -18, dtFlexion: 41, extension: -58, dtExtension: 35, ankylosis: -18, dtAnkylosis: 41 },
    { flexion: -17, dtFlexion: 41, extension: -57, dtExtension: 35, ankylosis: -17, dtAnkylosis: 41 },
    { flexion: -16, dtFlexion: 41, extension: -56, dtExtension: 34, ankylosis: -16, dtAnkylosis: 41 },
    { flexion: -15, dtFlexion: 41, extension: -55, dtExtension: 33, ankylosis: -15, dtAnkylosis: 41 },
    { flexion: -14, dtFlexion: 40, extension: -54, dtExtension: 32, ankylosis: -14, dtAnkylosis: 40 },
    { flexion: -13, dtFlexion: 40, extension: -53, dtExtension: 31, ankylosis: -13, dtAnkylosis: 40 },
    { flexion: -12, dtFlexion: 40, extension: -52, dtExtension: 31, ankylosis: -12, dtAnkylosis: 40 },
    { flexion: -11, dtFlexion: 39, extension: -51, dtExtension: 30, ankylosis: -11, dtAnkylosis: 39 },
    { flexion: -10, dtFlexion: 39, extension: -50, dtExtension: 29, ankylosis: -10, dtAnkylosis: 39 },
    { flexion: -9, dtFlexion: 39, extension: -49, dtExtension: 28, ankylosis: -9, dtAnkylosis: 39 },
    { flexion: -8, dtFlexion: 38, extension: -48, dtExtension: 27, ankylosis: -8, dtAnkylosis: 38 },
    { flexion: -7, dtFlexion: 38, extension: -47, dtExtension: 26, ankylosis: -7, dtAnkylosis: 38 },
    { flexion: -6, dtFlexion: 38, extension: -46, dtExtension: 25, ankylosis: -6, dtAnkylosis: 38 },
    { flexion: -5, dtFlexion: 38, extension: -45, dtExtension: 25, ankylosis: -5, dtAnkylosis: 38 },
    { flexion: -4, dtFlexion: 37, extension: -44, dtExtension: 24, ankylosis: -4, dtAnkylosis: 37 },
    { flexion: -3, dtFlexion: 37, extension: -43, dtExtension: 23, ankylosis: -3, dtAnkylosis: 37 },
    { flexion: -2, dtFlexion: 37, extension: -42, dtExtension: 22, ankylosis: -2, dtAnkylosis: 37 },
    { flexion: -1, dtFlexion: 36, extension: -41, dtExtension: 21, ankylosis: -1, dtAnkylosis: 36 },
    { flexion: 0, dtFlexion: 36, extension: -40, dtExtension: 20, ankylosis: 0, dtAnkylosis: 36 },
    { flexion: 1, dtFlexion: 36, extension: -39, dtExtension: 19, ankylosis: 1, dtAnkylosis: 36 },
    { flexion: 2, dtFlexion: 35, extension: -38, dtExtension: 18, ankylosis: 2, dtAnkylosis: 35 },
    { flexion: 3, dtFlexion: 35, extension: -37, dtExtension: 18, ankylosis: 3, dtAnkylosis: 35 },
    { flexion: 4, dtFlexion: 34, extension: -36, dtExtension: 17, ankylosis: 4, dtAnkylosis: 35 },
    { flexion: 5, dtFlexion: 34, extension: -35, dtExtension: 16, ankylosis: 5, dtAnkylosis: 35 },
    { flexion: 6, dtFlexion: 33, extension: -34, dtExtension: 15, ankylosis: 6, dtAnkylosis: 34 },
    { flexion: 7, dtFlexion: 33, extension: -33, dtExtension: 14, ankylosis: 7, dtAnkylosis: 34 },
    { flexion: 8, dtFlexion: 32, extension: -32, dtExtension: 14, ankylosis: 8, dtAnkylosis: 34 },
    { flexion: 9, dtFlexion: 32, extension: -31, dtExtension: 13, ankylosis: 9, dtAnkylosis: 33 },
    { flexion: 10, dtFlexion: 31, extension: -30, dtExtension: 12, ankylosis: 10, dtAnkylosis: 33 },
    { flexion: 11, dtFlexion: 31, extension: -29, dtExtension: 11, ankylosis: 11, dtAnkylosis: 33 },
    { flexion: 12, dtFlexion: 30, extension: -28, dtExtension: 10, ankylosis: 12, dtAnkylosis: 32 },
    { flexion: 13, dtFlexion: 30, extension: -27, dtExtension: 10, ankylosis: 13, dtAnkylosis: 32 },
    { flexion: 14, dtFlexion: 29, extension: -26, dtExtension: 9, ankylosis: 14, dtAnkylosis: 32 },
    { flexion: 15, dtFlexion: 29, extension: -25, dtExtension: 8, ankylosis: 15, dtAnkylosis: 32 },
    { flexion: 16, dtFlexion: 28, extension: -24, dtExtension: 7, ankylosis: 16, dtAnkylosis: 31 },
    { flexion: 17, dtFlexion: 28, extension: -23, dtExtension: 6, ankylosis: 17, dtAnkylosis: 31 },
    { flexion: 18, dtFlexion: 27, extension: -22, dtExtension: 6, ankylosis: 18, dtAnkylosis: 31 },
    { flexion: 19, dtFlexion: 27, extension: -21, dtExtension: 5, ankylosis: 19, dtAnkylosis: 30 },
    { flexion: 20, dtFlexion: 26, extension: -20, dtExtension: 4, ankylosis: 20, dtAnkylosis: 30 },
    { flexion: 21, dtFlexion: 26, extension: -19, dtExtension: 4, ankylosis: 21, dtAnkylosis: 30 },
    { flexion: 22, dtFlexion: 25, extension: -18, dtExtension: 4, ankylosis: 22, dtAnkylosis: 31 },
    { flexion: 23, dtFlexion: 25, extension: -17, dtExtension: 3, ankylosis: 23, dtAnkylosis: 31 },
    { flexion: 24, dtFlexion: 24, extension: -16, dtExtension: 3, ankylosis: 24, dtAnkylosis: 31 },
    { flexion: 25, dtFlexion: 24, extension: -15, dtExtension: 3, ankylosis: 25, dtAnkylosis: 32 },
    { flexion: 26, dtFlexion: 23, extension: -14, dtExtension: 3, ankylosis: 26, dtAnkylosis: 32 },
    { flexion: 27, dtFlexion: 23, extension: -13, dtExtension: 3, ankylosis: 27, dtAnkylosis: 32 },
    { flexion: 28, dtFlexion: 22, extension: -12, dtExtension: 2, ankylosis: 28, dtAnkylosis: 32 },
    { flexion: 29, dtFlexion: 22, extension: -11, dtExtension: 2, ankylosis: 29, dtAnkylosis: 33 },
    { flexion: 30, dtFlexion: 21, extension: -10, dtExtension: 2, ankylosis: 30, dtAnkylosis: 33 },
    { flexion: 31, dtFlexion: 20, extension: -9, dtExtension: 2, ankylosis: 31, dtAnkylosis: 33 },
    { flexion: 32, dtFlexion: 20, extension: -8, dtExtension: 2, ankylosis: 32, dtAnkylosis: 33 },
    { flexion: 33, dtFlexion: 19, extension: -7, dtExtension: 1, ankylosis: 33, dtAnkylosis: 34 },
    { flexion: 34, dtFlexion: 19, extension: -6, dtExtension: 1, ankylosis: 34, dtAnkylosis: 34 },
    { flexion: 35, dtFlexion: 18, extension: -5, dtExtension: 1, ankylosis: 35, dtAnkylosis: 34 },
    { flexion: 36, dtFlexion: 17, extension: -4, dtExtension: 1, ankylosis: 36, dtAnkylosis: 34 },
    { flexion: 37, dtFlexion: 17, extension: -3, dtExtension: 1, ankylosis: 37, dtAnkylosis: 34 },
    { flexion: 38, dtFlexion: 16, extension: -2, dtExtension: 0, ankylosis: 38, dtAnkylosis: 34 },
    { flexion: 39, dtFlexion: 16, extension: -1, dtExtension: 0, ankylosis: 39, dtAnkylosis: 35 },
    { flexion: 40, dtFlexion: 15, extension: 0, dtExtension: 0, ankylosis: 40, dtAnkylosis: 35 },
    { flexion: 41, dtFlexion: 15, extension: 1, dtExtension: 0, ankylosis: 41, dtAnkylosis: 35 },
    { flexion: 42, dtFlexion: 14, extension: 2, dtExtension: 0, ankylosis: 42, dtAnkylosis: 36 },
    { flexion: 43, dtFlexion: 14, extension: 3, dtExtension: 0, ankylosis: 43, dtAnkylosis: 36 },
    { flexion: 44, dtFlexion: 13, extension: 4, dtExtension: 0, ankylosis: 44, dtAnkylosis: 37 },
    { flexion: 45, dtFlexion: 13, extension: 5, dtExtension: 0, ankylosis: 45, dtAnkylosis: 37 },
    { flexion: 46, dtFlexion: 12, extension: 6, dtExtension: 0, ankylosis: 46, dtAnkylosis: 37 },
    { flexion: 47, dtFlexion: 12, extension: 7, dtExtension: 0, ankylosis: 47, dtAnkylosis: 38 },
    { flexion: 48, dtFlexion: 11, extension: 8, dtExtension: 0, ankylosis: 48, dtAnkylosis: 38 },
    { flexion: 49, dtFlexion: 11, extension: 9, dtExtension: 0, ankylosis: 49, dtAnkylosis: 39 },
    { flexion: 50, dtFlexion: 10, extension: 10, dtExtension: 0, ankylosis: 50, dtAnkylosis: 39 },
    { flexion: 51, dtFlexion: 10, extension: 11, dtExtension: 0, ankylosis: 51, dtAnkylosis: 39 },
    { flexion: 52, dtFlexion: 9, extension: 12, dtExtension: 0, ankylosis: 52, dtAnkylosis: 40 },
    { flexion: 53, dtFlexion: 9, extension: 13, dtExtension: 0, ankylosis: 53, dtAnkylosis: 40 },
    { flexion: 54, dtFlexion: 8, extension: 14, dtExtension: 0, ankylosis: 54, dtAnkylosis: 40 },
    { flexion: 55, dtFlexion: 8, extension: 15, dtExtension: 0, ankylosis: 55, dtAnkylosis: 41 },
    { flexion: 56, dtFlexion: 7, extension: 16, dtExtension: 0, ankylosis: 56, dtAnkylosis: 41 },
    { flexion: 57, dtFlexion: 7, extension: 17, dtExtension: 0, ankylosis: 57, dtAnkylosis: 41 },
    { flexion: 58, dtFlexion: 6, extension: 18, dtExtension: 0, ankylosis: 58, dtAnkylosis: 41 },
    { flexion: 59, dtFlexion: 6, extension: 19, dtExtension: 0, ankylosis: 59, dtAnkylosis: 42 },
    { flexion: 60, dtFlexion: 5, extension: 20, dtExtension: 0, ankylosis: 60, dtAnkylosis: 42 },
    { flexion: 61, dtFlexion: 5, extension: 21, dtExtension: 0, ankylosis: 61, dtAnkylosis: 42 },
    { flexion: 62, dtFlexion: 4, extension: 22, dtExtension: 0, ankylosis: 62, dtAnkylosis: 43 },
    { flexion: 63, dtFlexion: 4, extension: 23, dtExtension: 0, ankylosis: 63, dtAnkylosis: 43 },
    { flexion: 64, dtFlexion: 3, extension: 24, dtExtension: 0, ankylosis: 64, dtAnkylosis: 43 },
    { flexion: 65, dtFlexion: 3, extension: 25, dtExtension: 0, ankylosis: 65, dtAnkylosis: 44 },
    { flexion: 66, dtFlexion: 2, extension: 26, dtExtension: 0, ankylosis: 66, dtAnkylosis: 44 },
    { flexion: 67, dtFlexion: 2, extension: 27, dtExtension: 0, ankylosis: 67, dtAnkylosis: 44 },
    { flexion: 68, dtFlexion: 1, extension: 28, dtExtension: 0, ankylosis: 68, dtAnkylosis: 44 },
    { flexion: 69, dtFlexion: 1, extension: 29, dtExtension: 0, ankylosis: 69, dtAnkylosis: 45 },
    { flexion: 70, dtFlexion: 0, extension: 30, dtExtension: 0, ankylosis: 70, dtAnkylosis: 45 },
    { flexion: '>70', dtFlexion: 0, extension: '>30', dtExtension: 0, ankylosis: '>70', dtAnkylosis: 45 }
];

// PIP Joint data
const PIPData = [
    { flexion: '<-30', dtFlexion: 80, extension: '<-100', dtExtension: 80, ankylosis: '<-30', dtAnkylosis: 80 },
    { flexion: -30, dtFlexion: 80, extension: -100, dtExtension: 80, ankylosis: -30, dtAnkylosis: 80 },
    { flexion: -29, dtFlexion: 79, extension: -99, dtExtension: 79, ankylosis: -29, dtAnkylosis: 79 },
    { flexion: -28, dtFlexion: 79, extension: -98, dtExtension: 78, ankylosis: -28, dtAnkylosis: 79 },
    { flexion: -27, dtFlexion: 78, extension: -97, dtExtension: 77, ankylosis: -27, dtAnkylosis: 78 },
    { flexion: -26, dtFlexion: 77, extension: -96, dtExtension: 76, ankylosis: -26, dtAnkylosis: 77 },
    { flexion: -25, dtFlexion: 76, extension: -95, dtExtension: 75, ankylosis: -25, dtAnkylosis: 76 },
    { flexion: -24, dtFlexion: 76, extension: -94, dtExtension: 73, ankylosis: -24, dtAnkylosis: 76 },
    { flexion: -23, dtFlexion: 75, extension: -93, dtExtension: 72, ankylosis: -23, dtAnkylosis: 75 },
    { flexion: -22, dtFlexion: 74, extension: -92, dtExtension: 71, ankylosis: -22, dtAnkylosis: 74 },
    { flexion: -21, dtFlexion: 74, extension: -91, dtExtension: 70, ankylosis: -21, dtAnkylosis: 74 },
    { flexion: -20, dtFlexion: 73, extension: -90, dtExtension: 69, ankylosis: -20, dtAnkylosis: 73 },
    { flexion: -19, dtFlexion: 72, extension: -89, dtExtension: 68, ankylosis: -19, dtAnkylosis: 72 },
    { flexion: -18, dtFlexion: 72, extension: -88, dtExtension: 67, ankylosis: -18, dtAnkylosis: 72 },
    { flexion: -17, dtFlexion: 71, extension: -87, dtExtension: 66, ankylosis: -17, dtAnkylosis: 71 },
    { flexion: -16, dtFlexion: 70, extension: -86, dtExtension: 65, ankylosis: -16, dtAnkylosis: 70 },
    { flexion: -15, dtFlexion: 69, extension: -85, dtExtension: 64, ankylosis: -15, dtAnkylosis: 69 },
    { flexion: -14, dtFlexion: 69, extension: -84, dtExtension: 62, ankylosis: -14, dtAnkylosis: 69 },
    { flexion: -13, dtFlexion: 68, extension: -83, dtExtension: 61, ankylosis: -13, dtAnkylosis: 68 },
    { flexion: -12, dtFlexion: 67, extension: -82, dtExtension: 60, ankylosis: -12, dtAnkylosis: 67 },
    { flexion: -11, dtFlexion: 67, extension: -81, dtExtension: 59, ankylosis: -11, dtAnkylosis: 67 },
    { flexion: -10, dtFlexion: 66, extension: -80, dtExtension: 58, ankylosis: -10, dtAnkylosis: 66 },
    { flexion: -9, dtFlexion: 65, extension: -79, dtExtension: 57, ankylosis: -9, dtAnkylosis: 65 },
    { flexion: -8, dtFlexion: 65, extension: -78, dtExtension: 56, ankylosis: -8, dtAnkylosis: 65 },
    { flexion: -7, dtFlexion: 64, extension: -77, dtExtension: 55, ankylosis: -7, dtAnkylosis: 64 },
    { flexion: -6, dtFlexion: 64, extension: -76, dtExtension: 54, ankylosis: -6, dtAnkylosis: 64 },
    { flexion: -5, dtFlexion: 63, extension: -75, dtExtension: 53, ankylosis: -5, dtAnkylosis: 63 },
    { flexion: -4, dtFlexion: 62, extension: -74, dtExtension: 51, ankylosis: -4, dtAnkylosis: 62 },
    { flexion: -3, dtFlexion: 62, extension: -73, dtExtension: 50, ankylosis: -3, dtAnkylosis: 62 },
    { flexion: -2, dtFlexion: 61, extension: -72, dtExtension: 49, ankylosis: -2, dtAnkylosis: 61 },
    { flexion: -1, dtFlexion: 60, extension: -71, dtExtension: 48, ankylosis: -1, dtAnkylosis: 60 },
    { flexion: 0, dtFlexion: 60, extension: -70, dtExtension: 47, ankylosis: 0, dtAnkylosis: 60 },
    { flexion: 1, dtFlexion: 59, extension: -69, dtExtension: 46, ankylosis: 1, dtAnkylosis: 60 },
    { flexion: 2, dtFlexion: 59, extension: -68, dtExtension: 45, ankylosis: 2, dtAnkylosis: 59 },
    { flexion: 3, dtFlexion: 58, extension: -67, dtExtension: 44, ankylosis: 3, dtAnkylosis: 59 },
    { flexion: 4, dtFlexion: 58, extension: -66, dtExtension: 43, ankylosis: 4, dtAnkylosis: 59 },
    { flexion: 5, dtFlexion: 57, extension: -65, dtExtension: 42, ankylosis: 5, dtAnkylosis: 58 },
    { flexion: 6, dtFlexion: 56, extension: -64, dtExtension: 40, ankylosis: 6, dtAnkylosis: 58 },
    { flexion: 7, dtFlexion: 56, extension: -63, dtExtension: 39, ankylosis: 7, dtAnkylosis: 58 },
    { flexion: 8, dtFlexion: 55, extension: -62, dtExtension: 38, ankylosis: 8, dtAnkylosis: 58 },
    { flexion: 9, dtFlexion: 55, extension: -61, dtExtension: 37, ankylosis: 9, dtAnkylosis: 57 },
    { flexion: 10, dtFlexion: 54, extension: -60, dtExtension: 36, ankylosis: 10, dtAnkylosis: 57 },
    { flexion: 11, dtFlexion: 53, extension: -59, dtExtension: 35, ankylosis: 11, dtAnkylosis: 57 },
    { flexion: 12, dtFlexion: 53, extension: -58, dtExtension: 34, ankylosis: 12, dtAnkylosis: 57 },
    { flexion: 13, dtFlexion: 52, extension: -57, dtExtension: 33, ankylosis: 13, dtAnkylosis: 56 },
    { flexion: 14, dtFlexion: 52, extension: -56, dtExtension: 32, ankylosis: 14, dtAnkylosis: 56 },
    { flexion: 15, dtFlexion: 51, extension: -55, dtExtension: 31, ankylosis: 15, dtAnkylosis: 56 },
    { flexion: 16, dtFlexion: 50, extension: -54, dtExtension: 29, ankylosis: 16, dtAnkylosis: 56 },
    { flexion: 17, dtFlexion: 50, extension: -53, dtExtension: 28, ankylosis: 17, dtAnkylosis: 56 },
    { flexion: 18, dtFlexion: 49, extension: -52, dtExtension: 27, ankylosis: 18, dtAnkylosis: 55 },
    { flexion: 19, dtFlexion: 49, extension: -51, dtExtension: 26, ankylosis: 19, dtAnkylosis: 55 },
    { flexion: 20, dtFlexion: 48, extension: -50, dtExtension: 25, ankylosis: 20, dtAnkylosis: 55 },
    { flexion: 21, dtFlexion: 47, extension: -49, dtExtension: 24, ankylosis: 21, dtAnkylosis: 55 },
    { flexion: 22, dtFlexion: 47, extension: -48, dtExtension: 23, ankylosis: 22, dtAnkylosis: 55 },
    { flexion: 23, dtFlexion: 46, extension: -47, dtExtension: 22, ankylosis: 23, dtAnkylosis: 54 },
    { flexion: 24, dtFlexion: 46, extension: -46, dtExtension: 21, ankylosis: 24, dtAnkylosis: 54 },
    { flexion: 25, dtFlexion: 45, extension: -45, dtExtension: 20, ankylosis: 25, dtAnkylosis: 54 },
    { flexion: 26, dtFlexion: 44, extension: -44, dtExtension: 18, ankylosis: 26, dtAnkylosis: 54 },
    { flexion: 27, dtFlexion: 44, extension: -43, dtExtension: 17, ankylosis: 27, dtAnkylosis: 54 },
    { flexion: 28, dtFlexion: 43, extension: -42, dtExtension: 16, ankylosis: 28, dtAnkylosis: 53 },
    { flexion: 29, dtFlexion: 43, extension: -41, dtExtension: 15, ankylosis: 29, dtAnkylosis: 53 },
    { flexion: 30, dtFlexion: 42, extension: -40, dtExtension: 14, ankylosis: 30, dtAnkylosis: 53 },
    { flexion: 31, dtFlexion: 41, extension: -39, dtExtension: 14, ankylosis: 31, dtAnkylosis: 53 },
    { flexion: 32, dtFlexion: 41, extension: -38, dtExtension: 13, ankylosis: 32, dtAnkylosis: 52 },
    { flexion: 33, dtFlexion: 40, extension: -37, dtExtension: 13, ankylosis: 33, dtAnkylosis: 52 },
    { flexion: 34, dtFlexion: 40, extension: -36, dtExtension: 13, ankylosis: 34, dtAnkylosis: 52 },
    { flexion: 35, dtFlexion: 39, extension: -35, dtExtension: 13, ankylosis: 35, dtAnkylosis: 51 },
    { flexion: 36, dtFlexion: 38, extension: -34, dtExtension: 12, ankylosis: 36, dtAnkylosis: 51 },
    { flexion: 37, dtFlexion: 38, extension: -33, dtExtension: 12, ankylosis: 37, dtAnkylosis: 51 },
    { flexion: 38, dtFlexion: 37, extension: -32, dtExtension: 12, ankylosis: 38, dtAnkylosis: 51 },
    { flexion: 39, dtFlexion: 37, extension: -31, dtExtension: 11, ankylosis: 39, dtAnkylosis: 50 },
    { flexion: 40, dtFlexion: 36, extension: -30, dtExtension: 11, ankylosis: 40, dtAnkylosis: 50 },
    { flexion: 41, dtFlexion: 35, extension: -29, dtExtension: 11, ankylosis: 41, dtAnkylosis: 51 },
    { flexion: 42, dtFlexion: 35, extension: -28, dtExtension: 10, ankylosis: 42, dtAnkylosis: 51 },
    { flexion: 43, dtFlexion: 34, extension: -27, dtExtension: 10, ankylosis: 43, dtAnkylosis: 52 },
    { flexion: 44, dtFlexion: 34, extension: -26, dtExtension: 9, ankylosis: 44, dtAnkylosis: 52 },
    { flexion: 45, dtFlexion: 33, extension: -25, dtExtension: 9, ankylosis: 45, dtAnkylosis: 53 },
    { flexion: 46, dtFlexion: 32, extension: -24, dtExtension: 9, ankylosis: 46, dtAnkylosis: 53 },
    { flexion: 47, dtFlexion: 32, extension: -23, dtExtension: 8, ankylosis: 47, dtAnkylosis: 54 },
    { flexion: 48, dtFlexion: 31, extension: -22, dtExtension: 8, ankylosis: 48, dtAnkylosis: 54 },
    { flexion: 49, dtFlexion: 31, extension: -21, dtExtension: 7, ankylosis: 49, dtAnkylosis: 55 },
    { flexion: 50, dtFlexion: 30, extension: -20, dtExtension: 7, ankylosis: 50, dtAnkylosis: 55 },
    { flexion: 51, dtFlexion: 29, extension: -19, dtExtension: 7, ankylosis: 51, dtAnkylosis: 56 },
    { flexion: 52, dtFlexion: 29, extension: -18, dtExtension: 6, ankylosis: 52, dtAnkylosis: 56 },
    { flexion: 53, dtFlexion: 28, extension: -17, dtExtension: 6, ankylosis: 53, dtAnkylosis: 57 },
    { flexion: 54, dtFlexion: 28, extension: -16, dtExtension: 5, ankylosis: 54, dtAnkylosis: 57 },
    { flexion: 55, dtFlexion: 27, extension: -15, dtExtension: 5, ankylosis: 55, dtAnkylosis: 58 },
    { flexion: 56, dtFlexion: 26, extension: -14, dtExtension: 5, ankylosis: 56, dtAnkylosis: 58 },
    { flexion: 57, dtFlexion: 26, extension: -13, dtExtension: 4, ankylosis: 57, dtAnkylosis: 59 },
    { flexion: 58, dtFlexion: 25, extension: -12, dtExtension: 4, ankylosis: 58, dtAnkylosis: 59 },
    { flexion: 59, dtFlexion: 25, extension: -11, dtExtension: 3, ankylosis: 59, dtAnkylosis: 60 },
    { flexion: 60, dtFlexion: 24, extension: -10, dtExtension: 3, ankylosis: 60, dtAnkylosis: 60 },
    { flexion: 61, dtFlexion: 23, extension: -9, dtExtension: 3, ankylosis: 61, dtAnkylosis: 61 },
    { flexion: 62, dtFlexion: 23, extension: -8, dtExtension: 2, ankylosis: 62, dtAnkylosis: 61 },
    { flexion: 63, dtFlexion: 22, extension: -7, dtExtension: 2, ankylosis: 63, dtAnkylosis: 62 },
    { flexion: 64, dtFlexion: 22, extension: -6, dtExtension: 2, ankylosis: 64, dtAnkylosis: 62 },
    { flexion: 65, dtFlexion: 21, extension: -5, dtExtension: 2, ankylosis: 65, dtAnkylosis: 63 },
    { flexion: 66, dtFlexion: 20, extension: -4, dtExtension: 1, ankylosis: 66, dtAnkylosis: 63 },
    { flexion: 67, dtFlexion: 20, extension: -3, dtExtension: 1, ankylosis: 67, dtAnkylosis: 64 },
    { flexion: 68, dtFlexion: 19, extension: -2, dtExtension: 1, ankylosis: 68, dtAnkylosis: 64 },
    { flexion: 69, dtFlexion: 19, extension: -1, dtExtension: 0, ankylosis: 69, dtAnkylosis: 65 },
    { flexion: 70, dtFlexion: 18, extension: 0, dtExtension: 0, ankylosis: 70, dtAnkylosis: 65 },
    { flexion: 71, dtFlexion: 17, extension: 1, dtExtension: 0, ankylosis: 71, dtAnkylosis: 66 },
    { flexion: 72, dtFlexion: 17, extension: 2, dtExtension: 0, ankylosis: 72, dtAnkylosis: 66 },
    { flexion: 73, dtFlexion: 16, extension: 3, dtExtension: 0, ankylosis: 73, dtAnkylosis: 67 },
    { flexion: 74, dtFlexion: 16, extension: 4, dtExtension: 0, ankylosis: 74, dtAnkylosis: 67 },
    { flexion: 75, dtFlexion: 15, extension: 5, dtExtension: 0, ankylosis: 75, dtAnkylosis: 68 },
    { flexion: 76, dtFlexion: 14, extension: 6, dtExtension: 0, ankylosis: 76, dtAnkylosis: 68 },
    { flexion: 77, dtFlexion: 14, extension: 7, dtExtension: 0, ankylosis: 77, dtAnkylosis: 69 },
    { flexion: 78, dtFlexion: 13, extension: 8, dtExtension: 0, ankylosis: 78, dtAnkylosis: 69 },
    { flexion: 79, dtFlexion: 13, extension: 9, dtExtension: 0, ankylosis: 79, dtAnkylosis: 70 },
    { flexion: 80, dtFlexion: 12, extension: 10, dtExtension: 0, ankylosis: 80, dtAnkylosis: 70 },
    { flexion: 81, dtFlexion: 11, extension: 11, dtExtension: 0, ankylosis: 81, dtAnkylosis: 71 },
    { flexion: 82, dtFlexion: 11, extension: 12, dtExtension: 0, ankylosis: 82, dtAnkylosis: 71 },
    { flexion: 83, dtFlexion: 10, extension: 13, dtExtension: 0, ankylosis: 83, dtAnkylosis: 72 },
    { flexion: 84, dtFlexion: 10, extension: 14, dtExtension: 0, ankylosis: 84, dtAnkylosis: 72 },
    { flexion: 85, dtFlexion: 9, extension: 15, dtExtension: 0, ankylosis: 85, dtAnkylosis: 73 },
    { flexion: 86, dtFlexion: 8, extension: 16, dtExtension: 0, ankylosis: 86, dtAnkylosis: 73 },
    { flexion: 87, dtFlexion: 8, extension: 17, dtExtension: 0, ankylosis: 87, dtAnkylosis: 74 },
    { flexion: 88, dtFlexion: 7, extension: 18, dtExtension: 0, ankylosis: 88, dtAnkylosis: 74 },
    { flexion: 89, dtFlexion: 7, extension: 19, dtExtension: 0, ankylosis: 89, dtAnkylosis: 75 },
    { flexion: 90, dtFlexion: 6, extension: 20, dtExtension: 0, ankylosis: 90, dtAnkylosis: 75 },
    { flexion: 91, dtFlexion: 5, extension: 21, dtExtension: 0, ankylosis: 91, dtAnkylosis: 76 },
    { flexion: 92, dtFlexion: 5, extension: 22, dtExtension: 0, ankylosis: 92, dtAnkylosis: 76 },
    { flexion: 93, dtFlexion: 4, extension: 23, dtExtension: 0, ankylosis: 93, dtAnkylosis: 77 },
    { flexion: 94, dtFlexion: 4, extension: 24, dtExtension: 0, ankylosis: 94, dtAnkylosis: 77 },
    { flexion: 95, dtFlexion: 3, extension: 25, dtExtension: 0, ankylosis: 95, dtAnkylosis: 78 },
    { flexion: 96, dtFlexion: 2, extension: 26, dtExtension: 0, ankylosis: 96, dtAnkylosis: 78 },
    { flexion: 97, dtFlexion: 2, extension: 27, dtExtension: 0, ankylosis: 97, dtAnkylosis: 79 },
    { flexion: 98, dtFlexion: 1, extension: 28, dtExtension: 0, ankylosis: 98, dtAnkylosis: 79 },
    { flexion: 99, dtFlexion: 1, extension: 29, dtExtension: 0, ankylosis: 99, dtAnkylosis: 80 },
    { flexion: 100, dtFlexion: 0, extension: 30, dtExtension: 0, ankylosis: 100, dtAnkylosis: 80 },
    { flexion: '>100', dtFlexion: 0, extension: '>30', dtExtension: 0, ankylosis: '>100', dtAnkylosis: 80 }
];

// MP Joint data
const MPData = [
    { flexion: '<-20', dtFlexion: 60, extension: '<-90', dtExtension: 100, ankylosis: '<-20', dtAnkylosis: 60 },
    { flexion: -20, dtFlexion: 60, extension: -90, dtExtension: 100, ankylosis: -20, dtAnkylosis: 60 },
    { flexion: -19, dtFlexion: 59, extension: -89, dtExtension: 99, ankylosis: -19, dtAnkylosis: 60 },
    { flexion: -18, dtFlexion: 59, extension: -88, dtExtension: 97, ankylosis: -18, dtAnkylosis: 59 },
    { flexion: -17, dtFlexion: 58, extension: -87, dtExtension: 96, ankylosis: -17, dtAnkylosis: 59 },
    { flexion: -16, dtFlexion: 58, extension: -86, dtExtension: 94, ankylosis: -16, dtAnkylosis: 59 },
    { flexion: -15, dtFlexion: 57, extension: -85, dtExtension: 93, ankylosis: -15, dtAnkylosis: 58 },
    { flexion: -14, dtFlexion: 56, extension: -84, dtExtension: 91, ankylosis: -14, dtAnkylosis: 58 },
    { flexion: -13, dtFlexion: 56, extension: -83, dtExtension: 90, ankylosis: -13, dtAnkylosis: 58 },
    { flexion: -12, dtFlexion: 55, extension: -82, dtExtension: 88, ankylosis: -12, dtAnkylosis: 58 },
    { flexion: -11, dtFlexion: 55, extension: -81, dtExtension: 87, ankylosis: -11, dtAnkylosis: 57 },
    { flexion: -10, dtFlexion: 54, extension: -80, dtExtension: 85, ankylosis: -10, dtAnkylosis: 57 },
    { flexion: -9, dtFlexion: 54, extension: -79, dtExtension: 84, ankylosis: -9, dtAnkylosis: 57 },
    { flexion: -8, dtFlexion: 53, extension: -78, dtExtension: 82, ankylosis: -8, dtAnkylosis: 56 },
    { flexion: -7, dtFlexion: 53, extension: -77, dtExtension: 81, ankylosis: -7, dtAnkylosis: 56 },
    { flexion: -6, dtFlexion: 52, extension: -76, dtExtension: 79, ankylosis: -6, dtAnkylosis: 56 },
    { flexion: -5, dtFlexion: 52, extension: -75, dtExtension: 78, ankylosis: -5, dtAnkylosis: 55 },
    { flexion: -4, dtFlexion: 51, extension: -74, dtExtension: 77, ankylosis: -4, dtAnkylosis: 55 },
    { flexion: -3, dtFlexion: 51, extension: -73, dtExtension: 75, ankylosis: -3, dtAnkylosis: 55 },
    { flexion: -2, dtFlexion: 50, extension: -72, dtExtension: 74, ankylosis: -2, dtAnkylosis: 55 },
    { flexion: -1, dtFlexion: 50, extension: -71, dtExtension: 72, ankylosis: -1, dtAnkylosis: 54 },
    { flexion: 0, dtFlexion: 49, extension: -70, dtExtension: 71, ankylosis: 0, dtAnkylosis: 54 },
    { flexion: 1, dtFlexion: 49, extension: -69, dtExtension: 70, ankylosis: 1, dtAnkylosis: 54 },
    { flexion: 2, dtFlexion: 48, extension: -68, dtExtension: 68, ankylosis: 2, dtAnkylosis: 53 },
    { flexion: 3, dtFlexion: 48, extension: -67, dtExtension: 67, ankylosis: 3, dtAnkylosis: 53 },
    { flexion: 4, dtFlexion: 47, extension: -66, dtExtension: 65, ankylosis: 4, dtAnkylosis: 53 },
    { flexion: 5, dtFlexion: 47, extension: -65, dtExtension: 64, ankylosis: 5, dtAnkylosis: 52 },
    { flexion: 6, dtFlexion: 46, extension: -64, dtExtension: 62, ankylosis: 6, dtAnkylosis: 52 },
    { flexion: 7, dtFlexion: 46, extension: -63, dtExtension: 61, ankylosis: 7, dtAnkylosis: 52 },
    { flexion: 8, dtFlexion: 45, extension: -62, dtExtension: 59, ankylosis: 8, dtAnkylosis: 52 },
    { flexion: 9, dtFlexion: 45, extension: -61, dtExtension: 58, ankylosis: 9, dtAnkylosis: 51 },
    { flexion: 10, dtFlexion: 44, extension: -60, dtExtension: 56, ankylosis: 10, dtAnkylosis: 51 },
    { flexion: 11, dtFlexion: 43, extension: -59, dtExtension: 55, ankylosis: 11, dtAnkylosis: 51 },
    { flexion: 12, dtFlexion: 43, extension: -58, dtExtension: 53, ankylosis: 12, dtAnkylosis: 50 },
    { flexion: 13, dtFlexion: 42, extension: -57, dtExtension: 52, ankylosis: 13, dtAnkylosis: 50 },
    { flexion: 14, dtFlexion: 42, extension: -56, dtExtension: 50, ankylosis: 14, dtAnkylosis: 50 },
    { flexion: 15, dtFlexion: 41, extension: -55, dtExtension: 49, ankylosis: 15, dtAnkylosis: 49 },
    { flexion: 16, dtFlexion: 40, extension: -54, dtExtension: 47, ankylosis: 16, dtAnkylosis: 49 },
    { flexion: 17, dtFlexion: 40, extension: -53, dtExtension: 46, ankylosis: 17, dtAnkylosis: 49 },
    { flexion: 18, dtFlexion: 39, extension: -52, dtExtension: 44, ankylosis: 18, dtAnkylosis: 49 },
    { flexion: 19, dtFlexion: 39, extension: -51, dtExtension: 43, ankylosis: 19, dtAnkylosis: 48 },
    { flexion: 20, dtFlexion: 38, extension: -50, dtExtension: 41, ankylosis: 20, dtAnkylosis: 48 },
    { flexion: 21, dtFlexion: 38, extension: -49, dtExtension: 40, ankylosis: 21, dtAnkylosis: 48 },
    { flexion: 22, dtFlexion: 37, extension: -48, dtExtension: 38, ankylosis: 22, dtAnkylosis: 47 },
    { flexion: 23, dtFlexion: 37, extension: -47, dtExtension: 37, ankylosis: 23, dtAnkylosis: 47 },
    { flexion: 24, dtFlexion: 36, extension: -46, dtExtension: 35, ankylosis: 24, dtAnkylosis: 47 },
    { flexion: 25, dtFlexion: 36, extension: -45, dtExtension: 34, ankylosis: 25, dtAnkylosis: 46 },
    { flexion: 26, dtFlexion: 35, extension: -44, dtExtension: 33, ankylosis: 26, dtAnkylosis: 46 },
    { flexion: 27, dtFlexion: 35, extension: -43, dtExtension: 31, ankylosis: 27, dtAnkylosis: 46 },
    { flexion: 28, dtFlexion: 34, extension: -42, dtExtension: 30, ankylosis: 28, dtAnkylosis: 46 },
    { flexion: 29, dtFlexion: 34, extension: -41, dtExtension: 28, ankylosis: 29, dtAnkylosis: 45 },
    { flexion: 30, dtFlexion: 33, extension: -40, dtExtension: 27, ankylosis: 30, dtAnkylosis: 45 },
    { flexion: 31, dtFlexion: 32, extension: -39, dtExtension: 26, ankylosis: 31, dtAnkylosis: 46 },
    { flexion: 32, dtFlexion: 32, extension: -38, dtExtension: 24, ankylosis: 32, dtAnkylosis: 47 },
    { flexion: 33, dtFlexion: 31, extension: -37, dtExtension: 23, ankylosis: 33, dtAnkylosis: 48 },
    { flexion: 34, dtFlexion: 31, extension: -36, dtExtension: 21, ankylosis: 34, dtAnkylosis: 49 },
    { flexion: 35, dtFlexion: 30, extension: -35, dtExtension: 20, ankylosis: 35, dtAnkylosis: 50 },
    { flexion: 36, dtFlexion: 29, extension: -34, dtExtension: 18, ankylosis: 36, dtAnkylosis: 50 },
    { flexion: 37, dtFlexion: 29, extension: -33, dtExtension: 17, ankylosis: 37, dtAnkylosis: 51 },
    { flexion: 38, dtFlexion: 28, extension: -32, dtExtension: 15, ankylosis: 38, dtAnkylosis: 52 },
    { flexion: 39, dtFlexion: 28, extension: -31, dtExtension: 14, ankylosis: 39, dtAnkylosis: 53 },
    { flexion: 40, dtFlexion: 27, extension: -30, dtExtension: 12, ankylosis: 40, dtAnkylosis: 54 },
    { flexion: 41, dtFlexion: 27, extension: -29, dtExtension: 12, ankylosis: 41, dtAnkylosis: 55 },
    { flexion: 42, dtFlexion: 26, extension: -28, dtExtension: 12, ankylosis: 42, dtAnkylosis: 56 },
    { flexion: 43, dtFlexion: 26, extension: -27, dtExtension: 11, ankylosis: 43, dtAnkylosis: 57 },
    { flexion: 44, dtFlexion: 25, extension: -26, dtExtension: 11, ankylosis: 44, dtAnkylosis: 58 },
    { flexion: 45, dtFlexion: 25, extension: -25, dtExtension: 11, ankylosis: 45, dtAnkylosis: 59 },
    { flexion: 46, dtFlexion: 24, extension: -24, dtExtension: 11, ankylosis: 46, dtAnkylosis: 59 },
    { flexion: 47, dtFlexion: 24, extension: -23, dtExtension: 11, ankylosis: 47, dtAnkylosis: 60 },
    { flexion: 48, dtFlexion: 23, extension: -22, dtExtension: 10, ankylosis: 48, dtAnkylosis: 61 },
    { flexion: 49, dtFlexion: 23, extension: -21, dtExtension: 10, ankylosis: 49, dtAnkylosis: 62 },
    { flexion: 50, dtFlexion: 22, extension: -20, dtExtension: 10, ankylosis: 50, dtAnkylosis: 63 },
    { flexion: 51, dtFlexion: 22, extension: -19, dtExtension: 10, ankylosis: 51, dtAnkylosis: 64 },
    { flexion: 52, dtFlexion: 21, extension: -18, dtExtension: 9, ankylosis: 52, dtAnkylosis: 65 },
    { flexion: 53, dtFlexion: 21, extension: -17, dtExtension: 9, ankylosis: 53, dtAnkylosis: 66 },
    { flexion: 54, dtFlexion: 20, extension: -16, dtExtension: 9, ankylosis: 54, dtAnkylosis: 67 },
    { flexion: 55, dtFlexion: 20, extension: -15, dtExtension: 9, ankylosis: 55, dtAnkylosis: 68 },
    { flexion: 56, dtFlexion: 19, extension: -14, dtExtension: 8, ankylosis: 56, dtAnkylosis: 69 },
    { flexion: 57, dtFlexion: 19, extension: -13, dtExtension: 8, ankylosis: 57, dtAnkylosis: 70 },
    { flexion: 58, dtFlexion: 18, extension: -12, dtExtension: 8, ankylosis: 58, dtAnkylosis: 71 },
    { flexion: 59, dtFlexion: 18, extension: -11, dtExtension: 7, ankylosis: 59, dtAnkylosis: 72 },
    { flexion: 60, dtFlexion: 17, extension: -10, dtExtension: 7, ankylosis: 60, dtAnkylosis: 73 },
    { flexion: 61, dtFlexion: 16, extension: -9, dtExtension: 7, ankylosis: 61, dtAnkylosis: 74 },
    { flexion: 62, dtFlexion: 16, extension: -8, dtExtension: 7, ankylosis: 62, dtAnkylosis: 75 },
    { flexion: 63, dtFlexion: 15, extension: -7, dtExtension: 6, ankylosis: 63, dtAnkylosis: 76 },
    { flexion: 64, dtFlexion: 15, extension: -6, dtExtension: 6, ankylosis: 64, dtAnkylosis: 77 },
    { flexion: 65, dtFlexion: 14, extension: -5, dtExtension: 6, ankylosis: 65, dtAnkylosis: 78 },
    { flexion: 66, dtFlexion: 13, extension: -4, dtExtension: 6, ankylosis: 66, dtAnkylosis: 78 },
    { flexion: 67, dtFlexion: 13, extension: -3, dtExtension: 6, ankylosis: 67, dtAnkylosis: 79 },
    { flexion: 68, dtFlexion: 12, extension: -2, dtExtension: 5, ankylosis: 68, dtAnkylosis: 80 },
    { flexion: 69, dtFlexion: 12, extension: -1, dtExtension: 5, ankylosis: 69, dtAnkylosis: 81 },
    { flexion: 70, dtFlexion: 11, extension: 0, dtExtension: 5, ankylosis: 70, dtAnkylosis: 82 },
    { flexion: 71, dtFlexion: 11, extension: 1, dtExtension: 5, ankylosis: 71, dtAnkylosis: 83 },
    { flexion: 72, dtFlexion: 10, extension: 2, dtExtension: 5, ankylosis: 72, dtAnkylosis: 84 },
    { flexion: 73, dtFlexion: 10, extension: 3, dtExtension: 4, ankylosis: 73, dtAnkylosis: 85 },
    { flexion: 74, dtFlexion: 9, extension: 4, dtExtension: 4, ankylosis: 74, dtAnkylosis: 86 },
    { flexion: 75, dtFlexion: 9, extension: 5, dtExtension: 4, ankylosis: 75, dtAnkylosis: 87 },
    { flexion: 76, dtFlexion: 8, extension: 6, dtExtension: 4, ankylosis: 76, dtAnkylosis: 87 },
    { flexion: 77, dtFlexion: 8, extension: 7, dtExtension: 4, ankylosis: 77, dtAnkylosis: 88 },
    { flexion: 78, dtFlexion: 7, extension: 8, dtExtension: 3, ankylosis: 78, dtAnkylosis: 89 },
    { flexion: 79, dtFlexion: 7, extension: 9, dtExtension: 3, ankylosis: 79, dtAnkylosis: 90 },
    { flexion: 80, dtFlexion: 6, extension: 10, dtExtension: 3, ankylosis: 80, dtAnkylosis: 91 },
    { flexion: 81, dtFlexion: 5, extension: 11, dtExtension: 3, ankylosis: 81, dtAnkylosis: 92 },
    { flexion: 82, dtFlexion: 5, extension: 12, dtExtension: 2, ankylosis: 82, dtAnkylosis: 93 },
    { flexion: 83, dtFlexion: 4, extension: 13, dtExtension: 2, ankylosis: 83, dtAnkylosis: 94 },
    { flexion: 84, dtFlexion: 4, extension: 14, dtExtension: 2, ankylosis: 84, dtAnkylosis: 95 },
    { flexion: 85, dtFlexion: 3, extension: 15, dtExtension: 2, ankylosis: 85, dtAnkylosis: 96 },
    { flexion: 86, dtFlexion: 2, extension: 16, dtExtension: 1, ankylosis: 86, dtAnkylosis: 96 },
    { flexion: 87, dtFlexion: 2, extension: 17, dtExtension: 1, ankylosis: 87, dtAnkylosis: 97 },
    { flexion: 88, dtFlexion: 1, extension: 18, dtExtension: 1, ankylosis: 88, dtAnkylosis: 98 },
    { flexion: 89, dtFlexion: 1, extension: 19, dtExtension: 0, ankylosis: 89, dtAnkylosis: 99 },
    { flexion: 90, dtFlexion: 0, extension: 20, dtExtension: 0, ankylosis: 90, dtAnkylosis: 100 },
    { flexion: '>90', dtFlexion: 0, extension: '>20', dtExtension: 0, ankylosis: '>90', dtAnkylosis: 100 }
];

function lookupDTImpairment(angle, jointType, motionType) {
    let data;
    if (jointType === 'DIP') {
        data = DIPData;
    } else if (jointType === 'PIP') {
        data = PIPData;
    } else if (jointType === 'MP') {
        data = MPData;
    } else {
        throw new Error('Invalid joint type');
    }

    let dtImpairment = null;
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (motionType === 'flexion' && (angle <= row.flexion || row.flexion === '<-30' && angle < -30)) {
            dtImpairment = row.dtFlexion;
            break;
        } else if (motionType === 'extension' && (angle <= row.extension || row.extension === '<-70' && angle < -70)) {
            dtImpairment = row.dtExtension;
            break;
        } else if (motionType === 'ankylosis' && (angle <= row.ankylosis || row.ankylosis === '<-30' && angle < -30)) {
            dtImpairment = row.dtAnkylosis;
            break;
        }
    }

    if (dtImpairment === null) {
        throw new Error('Angle out of range');
    }

    return dtImpairment;
}

function combineImpairments(impairments) {
    let combined = 0;
    let combinedSteps = [];
    impairments.forEach(imp => {
        combined = Math.round((combined + (imp / 100) * (1 - combined)) * 100) / 100;
        combinedSteps.push(imp);
    });
    return { combined: Math.round(combined * 100), combinedSteps }; // Convert to percentage and round to nearest whole number
}

function addImpairments(impairments) {
    return impairments.reduce((acc, imp) => acc + imp, 0);
}

function convertToHD(dt, fingerType) {
    const conversionFactor = fingerType === 'index' || fingerType === 'middle' ? 0.2 : 0.1;
    return Math.round(dt * conversionFactor);
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const forms = document.querySelectorAll('.calculatorForm');

    forms.forEach(form => {
        const fingerType = form.closest('.calculator-box').id.replace('Finger', '').toLowerCase();
        const dipFlexion = form.querySelector('.DIPFlexion').value;
        const dipExtension = form.querySelector('.DIPExtension').value;
        const dipAnkylosis = form.querySelector('.DIPAnkylosis').value;
        const pipFlexion = form.querySelector('.PIPFlexion').value;
        const pipExtension = form.querySelector('.PIPExtension').value;
        const pipAnkylosis = form.querySelector('.PIPAnkylosis').value;
        const mpFlexion = form.querySelector('.MPFlexion').value;
        const mpExtension = form.querySelector('.MPExtension').value;
        const mpAnkylosis = form.querySelector('.MPAnkylosis').value;

        const dipImpairments = [
            dipFlexion && lookupDTImpairment(parseFloat(dipFlexion), 'DIP', 'flexion'),
            dipExtension && lookupDTImpairment(parseFloat(dipExtension), 'DIP', 'extension'),
            dipAnkylosis && lookupDTImpairment(parseFloat(dipAnkylosis), 'DIP', 'ankylosis')
        ].filter(imp => imp);

        const pipImpairments = [
            pipFlexion && lookupDTImpairment(parseFloat(pipFlexion), 'PIP', 'flexion'),
            pipExtension && lookupDTImpairment(parseFloat(pipExtension), 'PIP', 'extension'),
            pipAnkylosis && lookupDTImpairment(parseFloat(pipAnkylosis), 'PIP', 'ankylosis')
        ].filter(imp => imp);

        const mpImpairments = [
            mpFlexion && lookupDTImpairment(parseFloat(mpFlexion), 'MP', 'flexion'),
            mpExtension && lookupDTImpairment(parseFloat(mpExtension), 'MP', 'extension'),
            mpAnkylosis && lookupDTImpairment(parseFloat(mpAnkylosis), 'MP', 'ankylosis')
        ].filter(imp => imp);

        const dipImpairment = addImpairments(dipImpairments);
        const pipImpairment = addImpairments(pipImpairments);
        const mpImpairment = addImpairments(mpImpairments);

        const totalImpairments = [dipImpairment, pipImpairment, mpImpairment].sort((a, b) => b - a); // Sort from highest to lowest
        const { combined: totalImpairment, combinedSteps } = combineImpairments(totalImpairments);

        form.querySelector('.DIPFlexionImpairment').textContent = dipImpairments[0] !== undefined ? dipImpairments[0] : 0;
        form.querySelector('.DIPExtensionImpairment').textContent = dipImpairments[1] !== undefined ? dipImpairments[1] : 0;
        form.querySelector('.DIPAnkylosisImpairment').textContent = dipImpairments[2] !== undefined ? dipImpairments[2] : 0;
        form.querySelector('.DIPTotalImpairment').textContent = dipImpairment;

        form.querySelector('.PIPFlexionImpairment').textContent = pipImpairments[0] !== undefined ? pipImpairments[0] : 0;
        form.querySelector('.PIPExtensionImpairment').textContent = pipImpairments[1] !== undefined ? pipImpairments[1] : 0;
        form.querySelector('.PIPAnkylosisImpairment').textContent = pipImpairments[2] !== undefined ? pipImpairments[2] : 0;
        form.querySelector('.PIPTotalImpairment').textContent = pipImpairment;

        form.querySelector('.MPFlexionImpairment').textContent = mpImpairments[0] !== undefined ? mpImpairments[0] : 0;
        form.querySelector('.MPExtensionImpairment').textContent = mpImpairments[1] !== undefined ? mpImpairments[1] : 0;
        form.querySelector('.MPAnkylosisImpairment').textContent = mpImpairments[2] !== undefined ? mpImpairments[2] : 0;
        form.querySelector('.MPTotalImpairment').textContent = mpImpairment;

        const hdImpairment = convertToHD(totalImpairment, fingerType);
        const combinedStepsText = combinedSteps.map(step => `${step} C`).join(' ').slice(0, -1);
        const CVC = `CVC: ${combinedStepsText} = ${totalImpairment} DT = ${hdImpairment} HD`;

        form.querySelector('.cvc-result').textContent = CVC;
    });
});
