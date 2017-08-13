import React from 'react'
import { View, Image, Text } from 'react-native'

/*

{ location:
   { coords:
      { altitudeAccuracy: -1,
        accuracy: 5,
        heading: -1,
        longitude: 28.0473051,
        altitude: 0,
        latitude: -26.204103,
        speed: -1 },
     timestamp: 1502713822658.581 },
  photos:
   [ { node:
        { timestamp: 1502713948,
          location: {},
          group_name: 'Camera Roll',
          type: 'ALAssetTypePhoto',
          image:
           { width: 2160,
             height: 3840,
             filename: 'IMG_0111.JPG',
             uri: 'assets-library://asset/asset.JPG?id=0B624830-AB9B-4834-A7B2-38DA9666B358&ext=JPG',
             isStored: true } } } ],
  title: 'test marker',
  description: 'this is a test marker' }

 */
import styles from '../../styles'

const MarkerView = (props) => {
    return (
        <View style={styles.marker}>
            <Image
                style={styles.markerImage}
                source={{ uri: props.photos[0].node.image.uri }}
            />
        </View>
    )
}

export default MarkerView
