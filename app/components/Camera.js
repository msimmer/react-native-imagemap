import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Camera from 'react-native-camera'
import { Button, Icon } from 'react-native-elements'
import { id } from '../utility'

import { StyleSheet, Dimensions } from 'react-native'
import { accent, dark, highlight, light } from '../styles/colors'
import { height, width, padding } from '../styles/dimensions'


import g from '../styles/grid'
import c from '../styles/camera'



const column = {
    height,
    // width,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const styles = StyleSheet.create({
    container: {
        height: height * 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    columnLeft: {
        ...column,
        flex: 0.2,
    },
    columnCenter: {
        ...column,
        flex: 0.6,
    },
    columnRight: {
        ...column,
        flex: 0.2,
    },

    touchable: {
        height: height / 2,
        width: height / 2,
        borderRadius: height / 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: accent,
        borderColor: light,
        borderWidth: 1,
    },
    ringCenter: {
        padding: padding / 2,
        borderColor: accent,
        borderRadius: height,
        borderWidth: 1,
    },
    touchableCenter: {
        height: height,
        width: width,
        borderRadius: height / 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: accent,
    },

    icon: {
        color: light,
    },
    text: {
        color: light,
    },
})










class CameraView extends Component {
    constructor(props) {
        super(props)

        this.state = { id: '', timestamp: -1, photos: [], processing: false }

        this.takePhoto = this.takePhoto.bind(this)
        this.saveGallery = this.saveGallery.bind(this)
        this.cancel = this.cancel.bind(this)
        this.goToMap = this.goToMap.bind(this)
        // this.goToCoords = this.goToCoords.bind(this)
    }

    componentWillMount() {
        this.setInitialState()
    }

    setInitialState() {
        this.setState({
            id: id(),
            timestamp: Date.now(),
            photos: [],
            processing: false,
        })
    }

    goToMap() {
        this.props.history.push('/terrain')
    }

    // goToCoords({ latitude, longitude }) {
    //     this.props.history.push(`/terrain/${latitude},${longitude}`)
    // }

    saveGallery() {
        this.setState({ processing: true })

        const { id, timestamp, photos } = this.state
        if (photos.length < 1) { this.goToMap() }

        this.props.actions.setLocation().then(() => {
            const { location } = this.props.locationContext
            this.props.actions.addGallery({ id, timestamp, photos, location })
            this.props.actions.setRegion(location.coords)
            this.goToMap()
        })
        .catch(err => console.error(err)) // TODO: handle error
    }

    cancel() {
        this.goToMap()
    }

    takePhoto() {
        this.camera.capture().then((photo) => {
            this.setState({ photos: [...this.state.photos, photo] })
        }).catch(err => console.error(err)) // TODO: handle error
    }


    render() {
        return (
            <View style={g.column}>
                <Camera
                    style={c.camera}
                    keepAwake={true}
                    ref={camera => { this.camera = camera }}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    aspect={Camera.constants.Aspect.fill}
                >


                <View style={styles.container}>

                    <View style={styles.columnLeft}>

                        <TouchableHighlight
                            style={styles.touchable}
                            onPress={this.cancel}
                            underlayColor={highlight}
                        >
                            <View>
                                <Icon iconStyle={styles.icon} name='close' />
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.columnCenter}>
                        <View style={styles.ringCenter}>
                            <TouchableHighlight
                                style={styles.touchableCenter}
                                onPress={this.takePhoto}
                                underlayColor={highlight}
                            >
                                <View />
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={styles.columnRight}>
                        <TouchableHighlight
                            style={styles.touchable}
                            onPress={this.saveGallery}
                            underlayColor={highlight}
                        >
                            <View>
                                <Icon iconStyle={styles.icon} name='done' />
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
                </Camera>
            </View>
        )
    }
}

export default CameraView
