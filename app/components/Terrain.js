import React from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps'
import MarkerView from './Marker'
import { ButtonGroup, Button } from 'react-native-elements'

import styles from '../styles'

const rand = () => String(Math.random()).slice(2)

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


const TerrainView = (props) => {
    // if (!props.showMap) { return null }
    // if (!props.markers || !props.markers.length) {
        return (

                <Text>
                    no markers
                </Text>

        )
    // }
    return (
        <View style={styles.column}>
            <MapView
                style={styles.terrain}
                initialRegion={{
                    latitude: -26.204103,
                    longitude: 28.0473051,
                    latitudeDelta: 0.0922, // what do these do?
                    longitudeDelta: 0.0421,
                }}
            >

{/*

type LatLng {
  latitude: Number,
  longitude: Number,
}
type Point {
  x: Number,
  y: Number,
}
*/}

                { props.markers.map(marker => {
                    const { latitude, longitude } = marker.location.coords
                    return (
                        <MapView.Marker
                            key={rand()}
                            coordinate={{ latitude, longitude }}
                            title={marker.title}
                            description={marker.description}
                            onPress={(e) => {
                                console.log('-- clicks marker')
                                props.showGallery(marker)
                            }}
                        >
                            <MarkerView { ...marker } />
                        </MapView.Marker>
                    )
                }) }
            </MapView>
            {/*<ButtonGroup>*/}
                <Button
                    large
                    title='DONE'
                    onPress={() => props.hideMap()}
                />
            {/*</ButtonGroup>*/}
        </View>
    )
}

export default TerrainView
