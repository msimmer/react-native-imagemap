import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    photo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonContainer: {
        flex: 0,
        top: 20,
        left: 20,
        height: 40,
        width: 40,
        zIndex: 1,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        position: 'absolute',
    },
    button: {
        top: -2,
        left: 5,
        backgroundColor: 'transparent',
    },
})
