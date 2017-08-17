import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Camera from 'react-native-camera'
import { Button, Icon } from 'react-native-elements'

import g from '../styles/grid'
import c from '../styles/camera'

const rand = () => `_${String(Math.random()).slice(2)}`

class CameraView extends Component {
    constructor(props) {
        super(props)

        this.state = { id: '', timestamp: -1, photos: [] }

        this.takePhoto = this.takePhoto.bind(this)
        this.saveGallery = this.saveGallery.bind(this)
        this.cancel = this.cancel.bind(this)
        this.ensureLocation = this.ensureLocation.bind(this)
        this.navigateToMap = this.navigateToMap.bind(this)
        this.setLocation = this.setLocation.bind(this)
    }

    componentWillMount() {
        this.setInitialState()
        this.setLocation().catch(err => console.log('Err:', err))
    }

    setLocation() {
        return this.props.actions.setLocation()
        .catch(err => console.log('Err:', err))
    }

    setInitialState() {
        this.setState({
            id: rand(),
            timestamp: Date.now(),
            photos: [],
        })
    }

    ensureLocation() {
        return new Promise((resolve, reject) => {
            const { location } = this.props.locationContext
            if (location && Object.keys(location).length > 0) {
                return resolve(location)
            }
            this.setLocation().then(resolve)
        })
    }

    navigateToMap() {
        this.props.history.push('/terrain')
    }

    saveGallery() {
        const { state } = this
        if (state.photos.length < 1) { this.navigateToMap() }
        this.ensureLocation()
        .then((location) => {
            this.props.actions.addGallery({ ...state, location })
            this.navigateToMap()
        })
        .catch(err => console.error(err)) // TODO: handle error
    }

    cancel() {
        this.navigateToMap()
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
                    ref={(camera) => this.camera = camera}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <View style={c.buttonGroup}>
                       <View style={c.buttonContainerLeft}>
                            <Button
                                icon={{ name: 'close' }}
                                onPress={this.cancel}
                                buttonStyle={c.button}
                            />
                        </View>
                        <View>
                            <Button
                                buttonStyle={c.buttonShutter}
                                onPress={this.takePhoto}
                            />
                        </View>
                        <View style={c.buttonContainerRight}>
                            <Button
                                icon={{ name: 'done' }}
                                onPress={this.saveGallery}
                                buttonStyle={c.button}
                            />
                        </View>
                    </View>
                </Camera>
            </View>
        )
    }
}

export default CameraView
