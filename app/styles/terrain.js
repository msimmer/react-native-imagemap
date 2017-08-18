import { StyleSheet, Dimensions } from 'react-native'

// const buttonContainer = {
//     flex: 0,
//     top: -5,
//     height: 40,
//     width: 40,
//     backgroundColor: 'black',
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 20,
// }

export default StyleSheet.create({
    mapViewContainer: {
        flex: 1,
        flexDirection: 'column',
        // marginTop: 70,
    },
    marker: {
        flex: 0,
        height: 60,
        width: 60,
        backgroundColor: '#fff',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
    },
    markerImage: {
        flex: 0,
        height: 60,
        width: 60,
        zIndex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'salmon',

    },
    markerPointer: {
        // flex: 0,
        // position: 'absolute',
        // bottom: -10,
        // width: 20,
        // height: 20,
        // zIndex: 0,
        // transform: [{ rotate: '45deg' }],
        // backgroundColor: 'salmon',
    },
})
