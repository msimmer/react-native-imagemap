import React from 'react'
import { Text, View } from 'react-native'
import Camera from 'react-native-camera'

import styles from '../../styles'

const CameraView = (props) => {
    // if (Object.keys(props.preview).length > 0) { return null }
    if (props.showMap) { return null }
    return (
        <Camera
            ref={props.bindCameraInstance}
            style={styles.camera}
            aspect={Camera.constants.Aspect.fill}
        >
            <View style={styles.buttonGroup}>
                <Text
                    style={styles.button}
                    onPress={props.takePhoto}
                >[CAPTURE]</Text>
                <Text
                    style={styles.button}
                    onPress={props.savePhotos}
                >[DONE]</Text>
            </View>
        </Camera>
    )
}

export default CameraView
