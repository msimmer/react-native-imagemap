import React, { Component } from 'react'
import { Text, View, Image, CameraRoll } from 'react-native'

import Camera from './views/Camera'
// import Preview from './views/Preview'
import Terrain from './views/Terrain'

import styles from '../styles'


// import ImagePicker from 'react-native-image-picker'


class App extends Component {
    constructor() {
        super()
        this.state = {
            location: {},
            photos: [],
            markers: [],
            // preview: {},
        }

        this.takePhoto = this.takePhoto.bind(this)
        this.savePhotos = this.savePhotos.bind(this)
        this.bindCameraInstance = this.bindCameraInstance.bind(this)
        this.showGallery = this.showGallery.bind(this)
        this.hideGallery = this.hideGallery.bind(this)
        this.abortPhoto = this.abortPhoto.bind(this)

        // this.acceptPreview = this.acceptPreview.bind(this)
        // this.rejectPreview = this.rejectPreview.bind(this)
    }

/*

{ coords:
   { altitudeAccuracy: -1,
     accuracy: 5,
     heading: -1,
     longitude: 28.0473051,
     altitude: 0,
     latitude: -26.204103,
     speed: -1 },
  timestamp: 1502700294805.1292 }

 */

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                // console.log('location: ', location)
                this.setState({ location })
            },
            (err) => console.log(err)
        )
    }

    bindCameraInstance(camera) {
        this.camera = camera
    }

    addPhoto(photo) {
        const photos = [...this.state.photos, photo]
        this.setState({ photos })
    }



/*

[ { node:
     { timestamp: 1502700109,
       location: {},
       group_name: 'Camera Roll',
       type: 'ALAssetTypePhoto',
       image:
        { width: 2160,
          height: 3840,
          filename: 'IMG_0093.JPG',
          uri: 'assets-library://asset/asset.JPG?id=A07BC129-F31F-45E0-9079-060330CCE6CC&ext=JPG',
          isStored: true } } } ]


 */

    savePhotos() {
        console.log('-- saving; all photos:')
        console.log(this.state.photos.length, this.state.photos)

        const { photos, markers, location } = this.state
        const title = 'test marker'
        const description = 'this is a test marker'

        markers.push({ location, photos, title, description })

        //
        // navigate to map view?
    }

    abortPhoto() {
        this.setState({ photos: [], location: {} })
        console.log('-- close')
    }

    takePhoto() {
        this.camera.capture()
        .then((data) => {
            console.log('--> takePhoto', data)
            CameraRoll.getPhotos({ first: 1 })
            .then(({ edges }) => {
                const photo = edges[0]
                this.addPhoto(photo)
                // this.setState({ preview })
            })
        })
        .catch(err => console.error(err))
    }

    // acceptPreview() {
    //     const { preview } = this.state
    //     this.addPhoto(preview)
    //     this.setState({ preview: {} })
    // }
    // rejectPreview() {
    //     this.setState({ preview: {} })
    // }

    render() {

        console.log('--> app props', this.props)
        console.log('--> app actions', this.props.actions)

        // const { preview } = this.state
        return (
            <View style={styles.row}>
                <Terrain
                    markers={this.state.markers}
                    hideMap={this.hideMap}
                />
                <Camera
                    // preview={preview}
                    bindCameraInstance={this.bindCameraInstance}
                    addPhoto={this.addPhoto}
                    savePhotos={this.savePhotos}
                    takePhoto={this.takePhoto}
                    abortPhoto={this.abortPhoto}
                />
                {/*
                <Preview
                    preview={preview}
                    acceptPreview={this.acceptPreview}
                    rejectPreview={this.rejectPreview}
                />*/}
            </View>
        )
    }
}

export default App
