import React from 'react'
import { Text, View } from 'react-native'
import Camera from 'react-native-camera'
import { Button } from 'react-native-elements'

import { StyleSheet, Dimensions, Icon } from 'react-native'
import styles from '../styles'

const CameraView = (props) => {
    // setTimeout(() => {console.log('-- props', props)}, 1000)
    return (
        <View style={styles.column}>
            <Camera
                ref={props.bindCameraInstance}
                style={styles.camera}
                keepAwake={true}
                // captureTarget={Camera.constants.CaptureTarget.disk}
                aspect={Camera.constants.Aspect.fill}
            >
                <View style={{
                    flex: 0,
                    flexDirection: 'row',
                    height: 120,
                    width: Dimensions.get('window').width,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    paddingTop: 20,
                }}>
                   <View
                        style={{
                            flex: 0,
                            borderRadius: 20,
                            top: -5,
                            height: 40,
                            width: 40,
                            marginLeft: 20,
                            backgroundColor: 'black',
                            borderColor: 'white',
                            borderWidth: 1,
                        }}
                    >
                        <Button
                            icon={{ name: 'close' }}
                            onPress={() => props.history.push('/terrain')}
                            buttonStyle={{
                                backgroundColor: 'transparent',
                                top: -2,
                                left: 5,
                            }}
                        />
                    </View>
                    <View
                        style={styles.shutter}
                        onPress={props.takePhoto}
                    />
                    <View
                        style={{
                            flex: 0,
                            borderRadius: 20,
                            height: 40,
                            width: 40,
                            top: -5,
                            marginRight: 20,
                            backgroundColor: 'black',
                            borderColor: 'white',
                            borderWidth: 1,
                        }}
                    >
                        <Button
                            icon={{ name: 'done' }}
                            onPress={props.savePhotos}
                            buttonStyle={{
                                backgroundColor: 'transparent',
                                top: -2,
                                left: 5,
                            }}
                        />
                    </View>
                </View>
            </Camera>
        </View>
    )
}

export default CameraView
