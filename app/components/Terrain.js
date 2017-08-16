import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps'
import MarkerView from './Marker'
import { ButtonGroup, Button } from 'react-native-elements'

import g from '../styles/grid'
import t from '../styles/terrain'

const rand = () => String(Math.random()).slice(2)

class TerrainView extends Component {

    constructor(props) {
        super(props)

        this.initialRegion = this.initialRegion.bind(this)
        this.showCarousel = this.showCarousel.bind(this)
    }

    initialRegion() {
        const { coords } = this.props.locationContext.location
        // console.log(coords)
        // https://www.google.de/maps/@-26.204103,28.0473051,16z?hl=en
        // Search nearby -26.204161, 28.047273
        return {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100,
        }
    }

    showCarousel({ id }) {
        this.props.history.push(`/carousel/${id}`)
    }

    render() {

        const galleries = this.props.galleryContext

        return (
            <View style={t.mapViewContainer}>
                <MapView
                    style={g.terrain}
                    initialRegion={this.initialRegion()}
                >
                    { galleries.length > 0 ?
                        galleries.map(gallery => {
                            const { latitude, longitude } = gallery.coordinates
                            return (
                                <MapView.Marker
                                    draggable
                                    style={{height: 60, width: 60}}
                                    key={rand()}
                                    centerOffset={{ x: 0, y: -40 }}
                                    coordinate={{ latitude, longitude }}
                                    // title={gallery.title}
                                    // description={gallery.description}
                                    onPress={() => {
                                        this.showCarousel(gallery)
                                    }}
                                    onDragStart={() => {
                                        console.log('--- onDragStart')
                                    }}
                                    onDragEnd={() => {
                                        console.log('--- onDragEnd')
                                    }}
                                >
                                    <MarkerView { ...gallery } />
                                </MapView.Marker>
                            )
                        }) : null }
                </MapView>
            </View>
        )
    }


}

export default TerrainView
