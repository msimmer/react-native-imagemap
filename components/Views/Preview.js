import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from '../../styles'

const PreviewView = (props) => {
    return (
        <View>
            <Image
              source={{ uri: props.preview.node.image.uri }}
              style={styles.previewImage}
            />
            <View style={styles.buttonGroup}>
                <Text
                    style={styles.button}
                    onPress={props.rejectPreview}
                >[RETAKE]</Text>
                <Text
                    style={styles.button}
                    onPress={props.acceptPreview}
                >[OK]</Text>
            </View>
        </View>
    )
}

export default PreviewView
