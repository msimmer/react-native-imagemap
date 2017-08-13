/*


open app -> take pictures -> click done -> save marker with gallery

 */


import React, { Component } from 'react'
import { Text, View, Image, CameraRoll } from 'react-native'

import Camera from './components/Views/Camera'
// import Preview from './components/Views/Preview'
import Terrain from './components/Views/Terrain'

import styles from './styles'

// import ImagePicker from 'react-native-image-picker'


class App extends Component {
    constructor() {
        super()
        this.state = {
            location: {},
            photos: [],
            markers: [],
            showMap: false,
            // preview: {},
        }

        this.takePhoto = this.takePhoto.bind(this)
        this.savePhotos = this.savePhotos.bind(this)
        this.bindCameraInstance = this.bindCameraInstance.bind(this)
        this.showMap = this.showMap.bind(this)
        this.hideMap = this.hideMap.bind(this)
        this.showGallery = this.showGallery.bind(this)
        this.hideGallery = this.hideGallery.bind(this)

        // this.acceptPreview = this.acceptPreview.bind(this)
        // this.rejectPreview = this.rejectPreview.bind(this)
    }

showMap() {
    this.setState({ showMap: true })
}
hideMap() {
    this.setState({ showMap: false })
}

showGallery() {
    // this.setState({ showGallery: true })
}
hideGallery() {
    // this.setState({ showMap: false })
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
                console.log('location: ', location)
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
        this.showMap()

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
        // const { preview } = this.state
        return (
            <View style={styles.row}>
                <Terrain
                    markers={this.state.markers}
                    showMap={this.state.showMap}
                    hideMap={this.hideMap}
                />
                <Camera
                    // preview={preview}
                    showMap={this.state.showMap}
                    bindCameraInstance={this.bindCameraInstance}
                    addPhoto={this.addPhoto}
                    savePhotos={this.savePhotos}
                    takePhoto={this.takePhoto}
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
