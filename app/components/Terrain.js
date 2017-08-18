import React, { Component } from 'react'
import { Text, View, AlertIOS } from 'react-native'
import MapView from 'react-native-maps'
import MarkerView from './Marker'
import { ButtonGroup, Button } from 'react-native-elements'
import { rand } from '../utility'

import g from '../styles/grid'
import t from '../styles/terrain'

class TerrainView extends Component {

    constructor(props) {
        super(props)

        this.map = null
        this.mapDidMount = false

        this.showCarousel = this.showCarousel.bind(this)
        this.onLayout = this.onLayout.bind(this)
    }

    showCarousel({ id }) {
        this.props.history.push(`/carousel/${id}`)
    }

    onLayout() {
        if (Object.keys(this.props.locationContext).length < 1) {
            // initial load
            this.props.actions.setLocation().then(() => {
                const { location } = this.props.locationContext

                if (!this.map) { // map isn't loaded, abort
                    AlertIOS.alert('Cannot load map')
                    return
                }

                const { latitude, longitude } = location.coords
                const region = { latitude, longitude }

                this.props.actions.setRegion(region)
                this.map.animateToRegion(region)
            })
            .catch(err => console.error(err)) // TODO: handle error
        } else if ({}.hasOwnProperty.call(this.props.locationContext, 'region') ) {
            // && Object.keys(this.props.locationContext.region) > 3) {
            // has region set from previous drag events, or by creating a new gallery
            this.map.animateToRegion(this.props.locationContext.region)
        }
    }

    render() {

        const galleries = this.props.galleryContext

        return (
            <View style={t.mapViewContainer}>
                <MapView
                    ref={map => { this.map = map }}
                    showsUserLocation={true}
                    onLayout={this.onLayout}
                    style={g.terrain}
                >
                    { galleries.length > 0 ?
                        galleries.map(gallery => {
                            const { latitude, longitude } = gallery.coordinates
                            return (
                                <MapView.Marker
                                    key={rand()}
                                    style={{height: 60, width: 60}}
                                    centerOffset={{ x: 0, y: -40 }}
                                    coordinate={{ latitude, longitude }}
                                    // title={gallery.title}
                                    // description={gallery.description}
                                    onPress={() => {
                                        this.showCarousel(gallery)
                                        this.props.actions.setRegion(this.map.__lastRegion) // so we can revert to previous view
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
