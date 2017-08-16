import { StyleSheet, Dimensions } from 'react-native'

const buttonContainer = {
    flex: 0,
    top: -5,
    height: 40,
    width: 40,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
}

export default StyleSheet.create({
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonGroup: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 120,
        width: Dimensions.get('window').width,
        paddingTop: 20,
        backgroundColor: 'black',
    },
    buttonContainerLeft: {
        ...buttonContainer,
        marginLeft: 20,
    },
    buttonContainerRight: {
        ...buttonContainer,
        marginRight: 20,
    },
    buttonShutter: {
        flex: 0,
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'coral',
        alignSelf: 'flex-start',
    },
    button: {
        top: -2,
        left: 5,
        backgroundColor: 'transparent',
    },
})
