import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },

    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    previewImage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    terrain: {
        flex: 1,
    },
    buttonGroup: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
    },
    button: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 10,
    },
    marker: {
        flex: 0,
        height: 60,
        width: 60,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    markerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
    },

    shutter: {
        flex: 0,
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'coral',
        alignSelf: 'flex-start',
    },
    cameraClose: {
        alignSelf: 'flex-end',
        flex: 0,
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'coral',
    },
})
