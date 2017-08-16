import React from 'react'
import { View, Image, Text } from 'react-native'
import g from '../styles/grid'
import t from '../styles/terrain'

const MarkerView = (props) => {
    if (!props.photos || props.photos.length < 1) { return null }
    const imagePath = props.photos[0].path
    return (
        <View style={t.marker}>
            <Image
                style={t.markerImage}
                source={{ uri: imagePath }}
            />
            <View style={t.markerPointer} />
        </View>
    )
}

export default MarkerView
